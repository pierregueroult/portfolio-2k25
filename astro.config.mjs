import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE, LOCALES } from "./src/consts";
import { blog, projects } from "./src/content/sitemap";

export default defineConfig({
  site: SITE,
  output: "server",
  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [...projects, ...blog],
      serialize: (page) => ({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: page.lastmod,
        links: LOCALES.map((locale) => ({
          lang: locale,
          hreflang: locale,
          url: page.url.replace("https://", `https://${locale}.`),
        })),
      }),
    }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  adapter: node({
    mode: "standalone",
  }),
  devToolbar: {
    enabled: true,
  },
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' https://use.typekit.net https://eu-assets.i.posthog.com https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval'; script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com https://eu-assets.i.posthog.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://use.typekit.net https://p.typekit.net; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; connect-src 'self' https://eu.i.posthog.com https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com; block-all-mixed-content; upgrade-insecure-requests;",
    },
  },
});
