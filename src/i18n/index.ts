import { LOCALES } from "../consts";
import { ar } from "./langs/ar";
import { en } from "./langs/en";
import { fr } from "./langs/fr";
import { morse } from "./langs/morse";

export type Texts = {
  [key: string]: string;
};

type TextsObject = {
  [key in (typeof LOCALES)[number]]: {
    [key: string]: string;
  };
};

export const texts: TextsObject = {
  en: en,
  fr: fr,
  ar: ar,
  morse: morse,
};

export const useTranslation =
  (lang: (typeof LOCALES)[number]) => (key: keyof (typeof texts)[(typeof LOCALES)[number]]) =>
    texts[lang][key] ?? key;
