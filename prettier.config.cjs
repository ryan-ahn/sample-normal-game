/** @type {import("prettier").Config} */
module.exports = {
  importOrder: ["<THIRD_PARTY_MODULES>", "^@repo/(.*)$", "^~/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["cn", "tv"],
  endOfLine: "lf",
};
