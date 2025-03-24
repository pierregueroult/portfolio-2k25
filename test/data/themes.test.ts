import { describe, it, expect } from "vitest";
import { getThemes } from "../../src/data/themes";

describe("getThemes", () => {
  it("should return themes array with system theme when no parameter is provided", () => {
    const themes = getThemes();

    expect(themes).toBeInstanceOf(Array);
    expect(themes.length).toBeGreaterThan(0);
    expect(themes[0]).toEqual({
      title: "System",
      value: "system",
      svg: expect.any(String),
    });
  });

  it("should return themes array with system theme including current system theme when provided", () => {
    const themes = getThemes("dark");

    expect(themes).toBeInstanceOf(Array);
    expect(themes.length).toBeGreaterThan(0);
    expect(themes[0]).toEqual({
      title: "System (dark)",
      value: "system",
      svg: expect.any(String),
    });
  });

  it("should include all required theme options", () => {
    const themes = getThemes();

    const expectedValues = ["system", "light", "dark", "pastel", "solarized-light", "solarized-dark"];
    const themeValues = themes.map((theme) => theme.value);

    expect(themeValues).toEqual(expect.arrayContaining(expectedValues));
  });

  it("should mark special themes with isSpecial flag", () => {
    const themes = getThemes();

    const specialThemes = themes.filter((theme) => theme.isSpecial);
    expect(specialThemes.length).toBe(3);

    specialThemes.forEach((theme) => {
      expect(theme.isSpecial).toBe(true);
    });
  });

  it("should have valid SVG content for all themes", () => {
    const themes = getThemes();

    themes.forEach((theme) => {
      expect(theme.svg).toContain("<svg");
      expect(theme.svg).toContain('xmlns="http://www.w3.org/2000/svg"');
      expect(theme.svg).toContain('stroke="currentColor"');
    });
  });
});
