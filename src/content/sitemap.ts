import * as fs from "node:fs";
import { SITE } from "../consts";

export const blog: string[] = fs
  .readdirSync("src/content/blog")
  .map((file) => `${SITE}/blog/${file.replace(".mdx", "")}/`);
  
export const projects: string[] = fs
  .readdirSync("src/content/projects")
  .map((file) => `${SITE}/projects/${file.replace(".mdx", "")}/`);
