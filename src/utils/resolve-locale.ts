import { LOCALES } from "../consts";

export const resolveLocale = (url: URL): (typeof LOCALES)[number] => {
  const locale: string = url.hostname.split(".")[0];
  return (LOCALES.includes(locale as (typeof LOCALES)[number]) ? locale : "en") as (typeof LOCALES)[number];
};
