import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		lib: {
			entry: {
				Button: path.resolve(__dirname, 'src/components/Button/Button'),
			},
			name: 'ui-components',
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
