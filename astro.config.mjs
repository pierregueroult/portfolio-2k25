import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/consts";

export default defineConfig({
  site: SITE,
  output: "server",
  integrations: [
    mdx(),
    robotsTxt({
      transform: (content) => `# Dont try to find the private things \n\n${content}`,
      sitemapBaseFileName: "sitemap-index",
      policy: [
        {
          userAgent: "*",
          disallow: ["/documents/private"],
        },
        {
          userAgent: "Googlebot-Image",
          disallow: ["/"],
        },
      ],
    }),
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
    enabled: false,
  },
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; frame-src 'self' https://www.youtube.com; script-src 'self' https://use.typekit.net https://eu-assets.i.posthog.com https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval'; script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com https://eu-assets.i.posthog.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://use.typekit.net https://p.typekit.net; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; connect-src 'self' https://eu.i.posthog.com https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com; block-all-mixed-content; upgrade-insecure-requests;",
    },
  },
});
