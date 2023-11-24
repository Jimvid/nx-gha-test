import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  cacheDir: '../../node_modules/.vite/react',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary'],
      reportsDirectory: './reports/coverage',
    },
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    outputFile: {
      html: './reports/html/index.html',
      json: './reports/report.json',
    },
  },
};

export default defineConfig(config);
