import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://pierregueroult.dev",
  integrations: [sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
  }), partytown()]
});