import { defineMiddleware } from "astro:middleware";
import { resolveLocale } from "./utils/resolve-locale";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();

  context.locals.theme = context.cookies.get("theme")?.value ?? "system";
  context.locals.locale = resolveLocale(context.url);
  const response = await next();

  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; frame-src 'self' https://www.youtube.com; script-src 'self' https://use.typekit.net https://eu-assets.i.posthog.com https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval'; script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com https://eu-assets.i.posthog.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://use.typekit.net https://p.typekit.net; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; connect-src 'self' https://eu.i.posthog.com https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com; block-all-mixed-content; upgrade-insecure-requests;",
  );
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  return response;
});
