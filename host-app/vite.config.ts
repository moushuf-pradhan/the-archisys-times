import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@layouts': path.resolve(__dirname, './src/layouts'),
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/utils/constants'),
			'@types': path.resolve(__dirname, './src/utils/types'),
			'@enums': path.resolve(__dirname, './src/utils/enums'),
			'@hooks': path.resolve(__dirname, './src/utils/hooks'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
});
