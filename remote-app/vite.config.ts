import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import federation from '@originjs/vite-plugin-federation';
import packageJson from './package.json';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		federation({
			name: 'archisys_remote',
			filename: 'remoteEntry.js',
			exposes: {
				'./Test': './src/components/Test',
			},
			// shared: ['react', 'react-dom'],
			shared: packageJson.dependencies,
		}),
	],
	build: {
		target: 'esnext',
		// minify: false,
		cssCodeSplit: false,
	},
	preview: {
		port: 8081,
	},
});
