import { type APIRoute } from "astro";
import {
  spotifyNowPlayingSchema,
  spotifyTokenSchema,
  type SpotifyInternalApiResponse,
  type SpotifyToken,
} from "../schemas/spotify";
import { env } from "../env";

const RATE_REQUEST_LIMIT = 20;
const RATE_TIME_WINDOW = 60 * 1000;
const requestCounts = new Map<string, { count: number; lastRequest: number }>();

let cachedResponse: SpotifyInternalApiResponse | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 20 * 1000;

const getAccessToken = async (): Promise<SpotifyToken> => {
  const basicToken: string = Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicToken}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await res.json();

  const parsed = spotifyTokenSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error("Failed to parse Spotify token response", parsed.error);
  }
  return parsed.data;
};

export const GET: APIRoute = async ({ request }) => {
  const auth = request.headers.get("Authorization");
  if (!auth || auth !== `Bearer ${env.API_KEY}`) {
    return new Response(JSON.stringify({ error: "Invalid API key" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (cachedResponse && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return new Response(JSON.stringify(cachedResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ip = request.headers.get("x-forwarded-for") ?? request.headers.get("xf-connecting-ip") ?? "unknown";
  const now = Date.now();
  const requestData = requestCounts.get(ip) ?? { count: 0, lastRequest: 0 };

  if (now - requestData.lastRequest > RATE_TIME_WINDOW) {
    requestData.count = 0;
  }

  requestData.count++;
  requestData.lastRequest = now;
  requestCounts.set(ip, requestData);

  if (requestData.count > RATE_REQUEST_LIMIT) {
    return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { access_token } = await getAccessToken();

  const nowPlaying = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (nowPlaying.status === 204) {
    return new Response(JSON.stringify({ isPlaying: false }));
  }

  const data = await nowPlaying.json();

  const parsed = spotifyNowPlayingSchema.safeParse(data);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid response from Spotify" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const song = parsed.data.item;

  if (!song) {
    return new Response(JSON.stringify({ isPlaying: false }));
  }

  const response: SpotifyInternalApiResponse = {
    isPlaying: parsed.data.is_playing,
    title: song.name,
    artist: song.artists.map((artist) => artist.name).join(", "),
    album: song.album.name,
    cover: song.album.images[0].url,
    url: song.external_urls.spotify,
  };

  cachedResponse = response;
  cacheTimestamp = Date.now();

  return new Response(JSON.stringify(response), { status: 200, headers: { "Content-Type": "application/json" } });
};
