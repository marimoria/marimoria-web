import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const isProd = process.env.NODE_ENV == 'production';

export default defineConfig({
    base: '/marimoria-web/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        minify: isProd ? 'esbuild' : false,
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        target: 'esnext'
    },
    server: {
        open: true,
        port: 3000
    },
    plugins: [vue()]
});