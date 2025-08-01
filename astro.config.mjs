// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      plugins: [
        starlightThemeBlack({
          footerText: "Made with ❤️ by Krish Gupta",
        }),
      ],
      title: "Astra YSWS",
      description: "You Ship an Astro Website, We Ship ???",
      social: [
        {
          icon: "slack",
          label: "Slack",
          href: "https://hackclub.slack.com/archives/C097R4K3K1V",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kkrishguptaa/ysws-astra",
        },
      ],
      sidebar: [
        {
          label: "Information",
          autogenerate: { directory: "houston" },
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/kkrishguptaa/ysws-astra/edit/main/src/content/docs/",
      },
    }),
    mdx(),
  ],
  base: "/ysws-astra",
  site: "https://kkrishguptaa.github.io/ysws-astra",
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },
});
