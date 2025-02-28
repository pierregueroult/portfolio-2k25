import type { CollectionEntry } from "astro:content";

export function excludeDrafts({ data }: CollectionEntry<"blog">): boolean {
  return import.meta.env.PROD ? !data.draft : true;
}
