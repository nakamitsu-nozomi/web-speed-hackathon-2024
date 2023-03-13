import preact from '@preact/preset-vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      assetsInlineLimit: 20480,
      cssCodeSplit: true,
      cssTarget: 'chrome110',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 40960,
        },
        // plugins: [visualizer(), splitVendorChunkPlugin(), viteCompression()],
        plugins: [
          mode === 'analyze' &&
            visualizer({
              brotliSize: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              open: true,
            }),
          splitVendorChunkPlugin(),
          viteCompression(),
        ],
      },
      target: 'chrome110',
    },
    plugins: [preact()],
    resolve: {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      },
    },
  };
});
