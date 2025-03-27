import { LOCALES } from "../consts";

export function getLocale(lang: string | undefined): (typeof LOCALES)[number] {
  return lang && LOCALES.includes(lang as (typeof LOCALES)[number]) ? (lang as (typeof LOCALES)[number]) : LOCALES[0];
}

export function getDir(lang: string | undefined): "ltr" | "rtl" {
  return getLocale(lang) === "ar" ? "rtl" : "ltr";
}