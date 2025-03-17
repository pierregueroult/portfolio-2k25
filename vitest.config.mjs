import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    environment: "node",
    coverage: {
      reporter: ["text", "lcov"],
    }
  },
});
