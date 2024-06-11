module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:@next/next/recommended",
  ],
  plugins: ["perfectionist"],
  rules: {
    "no-unused-vars": "error",
    "prettier/prettier": [
      "error",
      {
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
  },
};
