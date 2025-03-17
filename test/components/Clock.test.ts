import { describe, expect, it } from "vitest";
import Clock from "../../src/components/Clock.astro";
import { renderAstroComponent } from "../../src/utils/tests-renderer";

// @vitest-environment happy-dom
describe("Clock", async () => {
  const render = await renderAstroComponent(Clock);

  it("should not be empty ", () => {
    const clock = render.querySelector("[data-clock]");
    expect(clock).not.toBeNull();
  });

  it("should respect the en-GB format", () => {
    const clock = render.querySelector("[data-clock]");
    expect(clock?.textContent).toMatch(/\d{2}:\d{2}:\d{2}/);
  });
});
