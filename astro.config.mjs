import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte, { vitePreprocess } from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  preprocess: vitePreprocess(),
});