// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  base: "/ysws-astra",
  site: "https://kkrishguptaa.github.io/ysws-astra",
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },
});
