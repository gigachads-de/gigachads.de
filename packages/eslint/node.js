import turbo from "eslint-plugin-turbo";
import ts from "typescript-eslint";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config} */
const nodeConfig = [
  {
    ignores: ["node_modules/", "dist/", ".turbo", ".tsbuildinfo"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    name: "node",
    files: ["**/*.ts", "**/*.js"],
    plugins: {
      turbo
    }
  },
  prettier
];

export default nodeConfig;
