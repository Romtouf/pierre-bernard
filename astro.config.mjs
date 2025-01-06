// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.pierre-bernard.net',
	integrations: [
		tailwind(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.9,
			lastmod: new Date(),
		}),
	],
	build: {
		inlineStylesheets: 'auto',
	},
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp'
		},
		domains: ['unpkg.com'],
	},
	vite: {
		build: {
			cssCodeSplit: false,
			rollupOptions: {
				output: {
					manualChunks: undefined
				}
			}
		},
		ssr: {
			noExternal: ['@astrojs/tailwind']
		}
	}
});