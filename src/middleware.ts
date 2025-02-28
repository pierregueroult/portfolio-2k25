import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  context.locals.theme = context.cookies.get("theme")?.value ?? "system";
  return next();
});
