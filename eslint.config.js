// const jsExtensions = [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"];

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
    rules: {
      // ESLint recommended rules (manually listed for flat config)
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
      "no-debugger": "warn",
      "eqeqeq": "warn",
      "curly": "warn",
      "semi": ["warn", "always"],
      // Add more rules as needed
    },
  },
  // Optionally, add React rules here if you want React linting
  // {
  //   files: jsExtensions.map(ext => `**/*${ext}`),
  //   plugins: {
  //     react: require("eslint-plugin-react"),
  //   },
  //   rules: {
  //     "react/react-in-jsx-scope": "off",
  //     "react/prop-types": "off",
  //     // Add more React rules as needed
  //   },
  // },
]; 