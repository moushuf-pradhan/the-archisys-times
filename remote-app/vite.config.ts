import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import federation from '@originjs/vite-plugin-federation';
// import packageJson from './package.json';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		federation({
			name: 'archisys_remote',
			filename: 'remoteEntry.js',
			exposes: {
				'./Home': './src/exports/Home.tsx',
				'./NewsDetail': './src/exports/NewsDetail.tsx',
				// './Error': './src/pages/Error/Error.tsx',
			},
			shared: ['react', 'react-dom', 'react-router'],
			// shared: packageJson.dependencies,
		}),
	],
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
			'@functions': path.resolve(__dirname, './src/utils/functions'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	build: {
		target: 'esnext',
		// minify: false,
		cssCodeSplit: false,
	},
	preview: {
		port: 8081,
	},
});
