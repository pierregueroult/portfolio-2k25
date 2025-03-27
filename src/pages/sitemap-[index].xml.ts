import type { APIRoute } from "astro";
import { LOCALES, SITE } from "../consts";
import * as fs from "node:fs";

const getEntries = (dir: string, prefix: string) =>
  fs.readdirSync(`src/content/${dir}`).map((file) => `${prefix}/${file.replace(".mdx", "")}/`);

const blog = getEntries("blog", "blog");
const projects = getEntries("projects", "projects");
const pages = ["", "blog", "projects", "socials"];
const indexes = ["index", "base", ...LOCALES] as const;

export const prerender = true;

export const getStaticPaths = async () => indexes.map((index) => ({ params: { index } }));

const generateSitemapIndex = (): string => `
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${indexes
      .filter((i) => i !== "index")
      .map((i) => `<sitemap><loc>${SITE}/sitemap-${i}.xml</loc></sitemap>`)
      .join("\n")}
  </sitemapindex>
`;

const generateSitemap = (lang: string | undefined): string => `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...pages, ...blog, ...projects]
      .map(
        (loc) => `
      <url>
        <loc>${SITE}${lang ? `/${lang}` : ""}${loc ? `/${loc}` : ""}</loc>
        <changefreq>weekly</changefreq>
        <priority>${pages.includes(loc) ? "1.0" : "0.7"}</priority>
      </url>`,
      )
      .join("\n")}
  </urlset>
`;

export const GET: APIRoute = async ({ params: { index }, rewrite }) => {
  if (!indexes.includes(index as (typeof indexes)[number])) return rewrite("/404");

  const lang = index === "base" ? undefined : index;
  const xmlContent = index === "index" ? generateSitemapIndex() : generateSitemap(lang);

  return new Response(xmlContent.trim(), {
    headers: { "Content-Type": "application/xml" },
  });
};
