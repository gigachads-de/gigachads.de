import turbo from "eslint-plugin-turbo";
import ts from "typescript-eslint";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";

/** @type {import("eslint").Linter.Config} */
const reactConfig = [
  {
    ignores: ["node_modules/", "dist/", ".turbo", ".tsbuildinfo"]
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    name: "react",
    files: ["**/*.ts", "**/*.js", "**/*.tsx", "**/*.jsx"],
    languageOptions: {
      parserOptions:  {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      turbo,
      react
    }
  },
  prettier
];

export default reactConfig;
