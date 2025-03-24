import { describe, expect, it } from "vitest";
import TranslationAlert from "../../src/components/TranslationAlert.astro";
import { renderAstroComponent } from "../../src/utils/tests-renderer";

// @vitest-environment happy-dom
describe("TranslationAlert", async () => {
  const render = await renderAstroComponent(TranslationAlert, {
    props: {
      title: "Hello World",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam lorem, fermentum eu feugiat at, porttitor nec enim. Sed maximus tincidunt ante. Etiam varius ultricies magna, nec porta erat convallis in. Pellentesque cursus, turpis sed placerat suscipit, lorem nulla efficitur ante, ac efficitur ante eros at elit. Pellentesque varius euismod ante, eget lacinia diam posuere id. Curabitur sagittis eros sapien, vel ullamcorper arcu mattis suscipit.",
    },
    locals: {
      locale: "en",
      theme: "light",
    },
  });

  it("should have the proper role", () => {
    const alert = render.querySelector("[role='alert']");
    expect(alert).not.toBeNull();
  });

  it("should contain the title from the props", () => {
    const title = render.querySelector("[data-test-title]");
    expect(title?.textContent?.trim()).toBe("Hello World");
  });

  it("should contain the text from the props", () => {
    const text = render.querySelector("[data-test-text]");
    expect(text?.textContent?.trim()).toBe(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam lorem, fermentum eu feugiat at, porttitor nec enim. Sed maximus tincidunt ante. Etiam varius ultricies magna, nec porta erat convallis in. Pellentesque cursus, turpis sed placerat suscipit, lorem nulla efficitur ante, ac efficitur ante eros at elit. Pellentesque varius euismod ante, eget lacinia diam posuere id. Curabitur sagittis eros sapien, vel ullamcorper arcu mattis suscipit.",
    );
  });

  it("should arbor the proper language attribute", () => {
    const alert = render.querySelector("[role='alert']");
    expect(alert?.getAttribute("lang")).toBe("en");
  });
});
