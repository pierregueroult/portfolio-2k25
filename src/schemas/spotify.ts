import { z } from 'zod';

export const spotifyNowPlayingSchema = z.object({
    is_playing: z.boolean(),
    item : z.object({
        name: z.string(),
        album: z.object({
            name: z.string(),
            images: z.array(z.object({
                url: z.string().url(),
            })).nonempty(),
        }),
        artists: z.array(z.object({
            name: z.string(),
        })).nonempty(),
        external_urls: z.object({
            spotify: z.string().url(),
        }),
    }).nullable(),
});

export type SpotifyNowPlaying = z.infer<typeof spotifyNowPlayingSchema>;

export const spotifyTokenSchema = z.object({
    access_token: z.string(),
    token_type: z.literal('Bearer'),
    expires_in: z.number().positive(),
})

export type SpotifyToken = z.infer<typeof spotifyTokenSchema>;

export const spotifyInternalApiResponseSchema = z.object({
    isPlaying: z.boolean(),
    title: z.string(),
    artist: z.string(),
    album: z.string(),
    cover: z.string().url(),
    url: z.string().url(),
});

export type SpotifyInternalApiResponse = z.infer<typeof spotifyInternalApiResponseSchema>;

export const spotifyInternalApiResponseErrorSchema = z.object({
    error: z.string(),
});

export type SpotifyInternalApiResponseError = z.infer<typeof spotifyInternalApiResponseErrorSchema>;