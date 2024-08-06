module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:@next/next/recommended",
  ],
  plugins: ["perfectionist", "unused-imports"],
  rules: {
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
