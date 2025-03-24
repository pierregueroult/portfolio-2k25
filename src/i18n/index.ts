import { LOCALES } from "../consts";
import { ar } from "./langs/ar";
import { en } from "./langs/en";
import { fr } from "./langs/fr";
import { morse } from "./langs/morse";

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type Texts = {
  components: {
    header: {
      lang: string;
      theme: string;
      paris: string;
      france: string;
    };
    navigation: {
      home: string;
      socials: string;
      projects: string;
      blog: string;
    };
    theme: {
      default: string;
      special: string;
      search: string;
    };
    lang: {
      choose: string;
      current: string;
    };
    modal: {
      close: string;
    };
    items: {
      more: string;
      now: string;
      from: string;
      to: string;
      about: string;
      work: {
        looking: string;
        near: string;
      };
      certification: {
        certifiedBy: string;
      };
    };
    noTranslation: {
      title: string;
      text: string;
    };
    contact: {
      name: string;
      email: string;
      message: string;
      send: string;
      consent: string;
      privacy: string;
      consent2: string;
    };
  };
  pages: {
    blog: {
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
      title: string;
      subtitle: string;
      articles: string;
      translation: {
        title: string;
        text: string;
      };
    };
    socials: {
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
      title: string;
      subtitle: string;
      featured: string;
      links: string;
      contact: {
        title: string;
        description: string;
      };
      music: {
        title: string;
        description: string;
        spotify: string;
        cover: string;
      }
    };
    projects: {
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
      title: string;
      subtitle: string;
      creations: string;
      projects: string;
      contributions: string;
      schools: string;
      translation: {
        title: string;
        text: string;
      };
    };
    index: {
      meta: {
        title: string;
        description: string;
        keywords: string;
      };
      title: string;
      subtitle: string;
      works: string;
      schools: string;
      certifications: string;
      curriculum: string;
    };
  };
};

type TextsObject = {
  [key in (typeof LOCALES)[number]]: Texts;
};

export const texts: TextsObject = {
  en: en,
  fr: fr,
  ar: ar,
  morse: morse,
};

const getNestedValue = (obj: Texts, path: string): string => {
  return path.split('.').reduce((acc: unknown, part) => {
    if (typeof acc === 'object' && acc !== null) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj) as string ?? path;
};

export const useTranslation =
  (lang: (typeof LOCALES)[number]) => (key: NestedKeyOf<Texts>) =>
    getNestedValue(texts[lang], key);

export type TranslationString = NestedKeyOf<Texts>;