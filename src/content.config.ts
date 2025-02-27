import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    keywords: z.array(z.string()),
    lastmod: z.coerce.date().optional(),
    draft: z.boolean().default(true),
    summary: z.string(),
  }),
});

export const collections = { blog };
