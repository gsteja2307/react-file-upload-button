// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
 	   lib: {
 		   entry: path.resolve(__dirname, 'src/UploadButton.tsx'), // Your entry component
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
