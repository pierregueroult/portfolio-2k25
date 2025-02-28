import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../consts";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  return rss({
    title: "Pierre's Tech Blog",
    description:
      "Read my latest articles, thoughts, and tech tutorials. I write about web development, software engineering, automation, and tech culture.",
    site: site || SITE,
    customData: "<language>en-us</language>",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.data.slug}`,
      categories: post.data.tags,
    })),
  });
};
