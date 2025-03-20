import { describe, it, expect } from "vitest";
import { SITE, LOCALES, IGNORED_LOCALES } from "../src/consts";

describe("Constants", () => {
  describe("SITE", () => {
    it("should be a valid URL", () => {
      expect(SITE).toBe("https://pierregueroult.dev");
      expect(() => new URL(SITE)).not.toThrow();
    });
  });

  describe("LOCALES", () => {
    it("should be a readonly array of strings", () => {
      expect(LOCALES).toBeInstanceOf(Array);
      expect(LOCALES).toEqual(["en", "fr", "ar", "morse"]);
      expect(LOCALES).toHaveLength(4);
      expect(LOCALES.every((locale: string) => typeof locale === "string")).toBe(true);
    });

    it("should contain all required locales", () => {
      expect(LOCALES).toContain("en");
      expect(LOCALES).toContain("fr");
      expect(LOCALES).toContain("ar");
      expect(LOCALES).toContain("morse");
    });
  });

  describe("IGNORED_LOCALES", () => {
    it("should be a readonly array of strings", () => {
      expect(IGNORED_LOCALES).toBeInstanceOf(Array);
      expect(IGNORED_LOCALES).toEqual(["morse"]);
      expect(IGNORED_LOCALES).toHaveLength(1);
      expect(IGNORED_LOCALES.every((locale: string) => typeof locale === "string")).toBe(true);
    });

    it("should only contain locales that are in LOCALES", () => {
      expect(IGNORED_LOCALES.every((locale: string) => LOCALES.includes(locale as "en" | "fr" | "ar" | "morse"))).toBe(
        true,
      );
    });
  });
});
