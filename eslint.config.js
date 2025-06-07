const jsExtensions = [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"];

// Import the recommended configs
const eslintRecommended = require("eslint/conf/eslint-recommended");
// If you want React rules, also import:
// const reactRecommended = require("eslint-plugin-react/configs/recommended");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["**/*"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: true,
        document: true,
        console: true,
        module: true,
        require: true,
        process: true,
      },
    },
    // plugins: {
    //   react: require("eslint-plugin-react"),
    // },
    rules: {},
  },
  // Spread the recommended configs for JS/TS/MDX files
  {
    files: jsExtensions.map(ext => `**/*${ext}`),
    ...eslintRecommended,
    // ...reactRecommended,
  },
]; 