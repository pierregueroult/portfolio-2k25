import { defineMiddleware } from "astro:middleware";
import { resolveLocale } from "./utils/resolve-locale";

export const onRequest = defineMiddleware((context, next) => {
  context.locals.theme = context.cookies.get("theme")?.value ?? "system";
  context.locals.locale = resolveLocale(context.url);
  return next();
});
