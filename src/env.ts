import { z } from "zod";

const envSchema = z.object({
  SPOTIFY_CLIENT_ID: z.string().min(1, "SPOTIFY_CLIENT_ID is required"),
  SPOTIFY_CLIENT_SECRET: z.string().min(1, "SPOTIFY_CLIENT_SECRET is required"),
  SPOTIFY_REFRESH_TOKEN: z.string().min(1, "SPOTIFY_REFRESH_TOKEN is required"),
  API_KEY: z.string().min(1, "API_KEY is required"),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  throw new Error("Your .env file is invalid");
}

export const env = parsed.data;
