import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import { config } from "./config"

// https://astro.build/config
export default defineConfig({
  site: config.site,
  integrations: [react(), tailwind(), sitemap()],
  trailingSlash: "never"
});
