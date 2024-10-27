import type { Config } from "tailwindcss";

import tailwindConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [tailwindConfig],
};

export default config;
