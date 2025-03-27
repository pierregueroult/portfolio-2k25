export const SITE: string = import.meta.env.PROD ? "https://pierregueroult.dev" : "http://localhost:4321";

export const LOCALES = ["en", "fr", "ar"] as const;

export const DEFAULT_LOCALE = "fr";