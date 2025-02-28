import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/consts";
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
});
