import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LOCALE, LOCALES, SITE } from "@/consts";

const nonLocalizedPaths = new Set(["rss.xml", "spotify", "_actions", "_image"]);

const getSubdomain = (hostname: string) => hostname.split(".")[0] as (typeof LOCALES)[number];

const shouldRedirectToLocale = (pathname: string): boolean =>
  !LOCALES.some((locale) => pathname.startsWith(`/${locale}`)) &&
  ![...nonLocalizedPaths].some((path) => pathname.endsWith(path) || pathname.startsWith(`/${path}`));

const applySecurityHeaders = (response: Response) => {
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "frame-src 'self' https://www.youtube.com; " +
      "script-src 'self' https://use.typekit.net https://eu-assets.i.posthog.com 'unsafe-inline' 'unsafe-eval'; " +
      "script-src-elem 'self' https://eu-assets.i.posthog.com 'unsafe-inline'; " +
      "style-src 'self' 'unsafe-inline' https://eu.posthog.com; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' https://use.typekit.net https://p.typekit.net; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'none'; " +
      "connect-src 'self' https://eu.i.posthog.com https://internal-t.posthog.com https://*.posthog.com; " +
      "block-all-mixed-content; " +
      "upgrade-insecure-requests;",
  );

  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=(), payment=(), usb=(), fullscreen=(self), display-capture=()",
  );
};

const applyOtherHeaders = (response: Response, pathname: string) => {
  const locale = pathname.split("/")[1] || DEFAULT_LOCALE;
  response.headers.set(
    "Content-Language",
    LOCALES.includes(locale as (typeof LOCALES)[number]) ? locale : DEFAULT_LOCALE,
  );
};

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();

  const url = new URL(context.url);
  const subdomain = getSubdomain(url.hostname);

  if (LOCALES.includes(subdomain)) {
    return context.redirect(new URL(`/${subdomain}${url.pathname}${url.search}`, SITE).toString());
  }

  if (shouldRedirectToLocale(url.pathname)) {
    const acceptedLocale: string | undefined = context.request.headers
      .get("Accept-Language")
      ?.split(",")[0]
      ?.split("-")[0];
    return context.redirect(
      new URL(
        `/${
          LOCALES.includes(acceptedLocale as (typeof LOCALES)[number]) ? acceptedLocale : DEFAULT_LOCALE
        }${url.pathname}${url.search}`,
        SITE,
      ).toString(),
    );
  }

  context.locals.theme = context.cookies.get("theme")?.value ?? "system";
  const response = await next();

  applySecurityHeaders(response);
  applyOtherHeaders(response, url.pathname);

  return response;
});
