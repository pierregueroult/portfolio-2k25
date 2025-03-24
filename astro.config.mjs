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
  image: {
    domains: ["i.scdn.co"],
  }
});
