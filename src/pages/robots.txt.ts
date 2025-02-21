import type { APIRoute } from "astro";

const getRobotsText = (sitemapURL: URL): string => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("/sitemap.xml", site);

  return new Response(getRobotsText(sitemapURL));
};
