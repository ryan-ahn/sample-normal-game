export default {
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json-summary", "json", "lcov"],
      enabled: true,
      include: [
        "apps/**/app/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "packages/**/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      ],
      exclude: [
        "apps/**/app/{*,index,schema,*.stories,*.test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "apps/**/app/**/{index,schema,*.stories,*.test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        "packages/**/src/**/{index,schema,*.stories,*.test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      ],
    },
  },
};
