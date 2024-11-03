// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path'

export default defineConfig({
    plugins: [react(), cssInjectedByJsPlugin()],
    build: {
 	   lib: {
 		   entry: path.resolve(__dirname, 'src/UploadButton.tsx'),
 		   name: 'ReactFileUploadButton',
 		   fileName: (format) => `react-file-upload-button.${format}.js`
 	   },
 	   rollupOptions: {
 		   external: ['react', 'react-dom'], // Ensure React is treated as an external dependency
 		   output: {
 			   globals: {
 				   react: 'React',
 				   'react-dom': 'ReactDOM'
 			   }
 		   }
 	   }
    }
})
