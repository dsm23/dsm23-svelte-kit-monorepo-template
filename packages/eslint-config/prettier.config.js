/**
 *  @type {import("prettier").Options}
 */
const config = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<BUILTIN_MODULES>",
    "<TYPES>^(node:)",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>^([@a-z])",
    "^~/(.*)$",
    "<TYPES>^~/(.*)",
    "^[.]",
    "<TYPES>",
  ],
  // renovate: datasource=npm depName=typescript
  importOrderTypeScriptVersion: "5.9.2",
};

export default config;
