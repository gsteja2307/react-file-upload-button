import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	root: 'example',           // Set root to the 'example' folder
	build: {
		outDir: '../dist',     // Output directory for build
	},
	resolve: {
		alias: {
			'@': '/src',      // Optional: Aliases for easier imports
		},
	},
})
