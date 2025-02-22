import eslintPluginAstro from "eslint-plugin-astro";
import esLintTypescript from "typescript-eslint";

/** @type {import('eslint').Linter.Config} */
const config = [...esLintTypescript.configs.recommended, ...eslintPluginAstro.configs.recommended];

export default config;
