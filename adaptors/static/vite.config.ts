import { staticAdaptor } from '@builder.io/qwik-city/adaptors/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    plugins: [
      staticAdaptor({
        origin: 'https://a-emile.dedyn.io',
      }),
    ],
  };
});
