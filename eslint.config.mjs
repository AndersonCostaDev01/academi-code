import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort"; // 🔥 Importação correta do plugin

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort, // 🔥 Forma correta de definir plugins
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
