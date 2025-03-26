import { defineMiddleware } from "astro:middleware";
import { LOCALES, SITE } from "@/consts";

const doesntNeedLocale = ["rss.xml", "spotify"];

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();

  const url = new URL(context.url);
  const subdomain = url.hostname.split('.')[0] as typeof LOCALES[number];

  if (LOCALES.includes(subdomain)) {
    const newPath = `/${subdomain}${url.pathname}${url.search}`;
    const newUrl = new URL(newPath, SITE);
    return context.redirect(newUrl.toString());
  }

  if (!LOCALES.some((locale) => url.pathname.startsWith(`/${locale}`)) && !doesntNeedLocale.some(path => url.pathname.endsWith(path))) {
    const newPath = `/fr${url.pathname}${url.search}`;
    const newUrl = new URL(newPath, SITE);
    return context.redirect(newUrl.toString());
  }

  context.locals.theme = context.cookies.get("theme")?.value ?? "system";
  const response = await next();

  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; frame-src 'self' https://www.youtube.com; script-src 'self' https://use.typekit.net https://eu-assets.i.posthog.com 'unsafe-inline' 'unsafe-eval'; script-src-elem 'self' https://eu-assets.i.posthog.com 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://eu.posthog.com; img-src 'self' data: https:; font-src 'self' https://use.typekit.net https://p.typekit.net; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; connect-src 'self' https://eu.i.posthog.com https://internal-t.posthog.com https://*.posthog.com; block-all-mixed-content; upgrade-insecure-requests;",
  );
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=(), payment=(), usb=(), fullscreen=(self), display-capture=(), interest-cohort=()");

  return response;
});
