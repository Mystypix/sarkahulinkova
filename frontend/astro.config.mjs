import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "5clabyqx",
      dataset: "production",
      apiVersion: "2023-02-08",
      useCdn: false,
    }),
  ],
});
