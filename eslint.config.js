const jsExtensions = [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"];

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
    plugins: {
      //react: require("eslint-plugin-react"),
    },
    rules: {},
  },
  {
    files: jsExtensions.map(ext => `**/*${ext}`),
    extends: ["eslint:recommended"/*, "plugin:react/recommended"*/],
  },
]; 