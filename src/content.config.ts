import { file, glob } from "astro/loaders";
import { LOCALES } from "./consts";
import { defineCollection, z } from "astro:content";

const localizedStringSchema = z.object(
  Object.fromEntries(LOCALES.map((lang) => [lang, z.string()]))
);

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
      }),
    ),
    date: z.coerce.date(),
  }),
});

const socials = defineCollection({
  loader: file("./src/content/socials/socials.json"),
  schema: z.object({
    title: z.string(),
    link: z.string(),
    description: localizedStringSchema,
    isFeatured: z.boolean().default(false),
  }),
});

const works = defineCollection({
  loader: file("./src/content/works/works.json"),
  schema: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("looking"),
      place: z.string(),
      role: localizedStringSchema,
    }),
    z.object({
      type: z.literal("passed"),
      place: z.string(),
      works: z.array(
        z.object({
          role: localizedStringSchema, 
          techs: z.array(z.string()),
          period: z.tuple([
            z.string().transform((str) => new Date(str)),
            z.union([z.string().transform((str) => (str === "now" ? "now" : new Date(str))), z.literal("now")]),
          ]),
          description: localizedStringSchema,
        }),
      ),
    }),
  ]),
});

const schools = defineCollection({
  loader: file("./src/content/schools/schools.json"),
  schema: z.object({
    name: z.string(),
    school: z.string(),
    city: z.string(),
    country: z.string(),
    period: z.tuple([
      z.string().transform((str) => new Date(str)),
      z.union([z.string().transform((str) => (str === "now" ? "now" : new Date(str))), z.literal("now")]),
    ]),
    description: localizedStringSchema,
  }),
});

export const collections = { blog, projects, socials, works, schools };
