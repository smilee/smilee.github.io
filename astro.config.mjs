import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uxplus.dev',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
