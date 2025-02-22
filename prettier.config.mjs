/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro"],
  printWidth: 120,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
