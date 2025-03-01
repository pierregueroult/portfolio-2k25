import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE, LOCALES } from "./src/consts";
import { blog, projects } from "./src/content/sitemap";
import partytown from "@astrojs/partytown";

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
      serialize: (page) => {
        console.log(page);
        return {
          url: page.url,
          changefreq: page.changefreq,
          priority: page.priority,
          lastmod: page.lastmod,
          links: LOCALES.map((locale) => ({
            lang: locale,
            hreflang: locale,
            url: page.url.replace("https://", `https://${locale}.`),
          })),
        };
      },
    }),
    robotsTxt(),
    partytown({
      config: { forward: ["dataLayer.push "] },
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
    enabled: true,
  },
});
