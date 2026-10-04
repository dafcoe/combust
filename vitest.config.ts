import { fileURLToPath, URL } from 'node:url';
import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'src/assets/*',
          'src/**/index.ts',
          'src/**/*.spec.ts',
          'src/**/*.type.ts',
          'src/**/*.constant.ts',
          'src/**/*.fixture.ts',
        ],
      },
    },
  }),
);
