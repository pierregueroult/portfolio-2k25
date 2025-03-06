import type { APIRoute } from "astro";
import { LOCALES } from "../consts";
import { projects, pages, blog } from "../sitemap";

const possibleIndexes = ["index", "base", ...LOCALES] as const;

export const prerender = true;

export const getStaticPaths = async () => {
  return possibleIndexes.map((index) => ({ params: { index } }));
};

export const GET: APIRoute = async ({ params: { index }, rewrite }) => {
  if (!index || !possibleIndexes.includes(index as (typeof possibleIndexes)[number])) {
    return rewrite(`https://pierregueroult.dev/404`);
  }

  let xmlResponse = "";

  if (index === "index") {
    xmlResponse = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${possibleIndexes
        .filter((idx) => idx !== "index")
        .map((idx) => `<sitemap><loc>https://pierregueroult.dev/sitemap-${idx}.xml</loc></sitemap>`)
        .join("")}
    </sitemapindex>`;
  }

  const generateSitemap = (urls: string[], prefix = "") => {
    const lastmod = new Date().toISOString();

    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
      ${urls
        .map((url) => {
          const urlObj = new URL(url);
          const baseUrl = urlObj.host + urlObj.pathname;
          const modifiedUrl = prefix ? `https://${prefix}.${baseUrl}` : `https://${baseUrl}`;

          const alternates = LOCALES.reduce((acc, locale) => {
            return locale !== prefix
              ? acc + `<xhtml:link rel="alternate" hreflang="${locale}" href="https://${locale}.${baseUrl}"></xhtml:link>`
              : acc;
          }, "");

          const xDefaultTag = prefix
            ? `<xhtml:link rel="alternate" hreflang="x-default" href="https://${baseUrl}"></xhtml:link>`
            : "";

          const priority = pages.includes(url) ? "1.0" : "0.7";

          return `<url>
            <loc>${modifiedUrl}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${priority}</priority>
            ${alternates}
            ${xDefaultTag}
          </url>`;
        })
        .join("")}
    </urlset>`;
  };

  if (index === "base") {
    xmlResponse = generateSitemap([...pages, ...projects, ...blog]);
  }

  if (LOCALES.includes(index as (typeof LOCALES)[number])) {
    xmlResponse = generateSitemap([...pages, ...projects, ...blog], index);
  }
  return new Response(xmlResponse.replace(/\s+/g, " ").trim(), {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
};
