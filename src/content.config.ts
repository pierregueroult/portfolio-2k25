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

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    kind: z.enum(["project", "creation", "contribution"]),
    role: z.string(),
    slug: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(
      z.object({
        url: z.string(),
        title: z.string(),
      })
    ),
    date: z.coerce.date(),
  }),
})

export const collections = { blog, projects };
