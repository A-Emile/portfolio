import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { join } from "path";
import { fileURLToPath } from "url";

export default defineConfig(() => {
  return {
    build: {
      outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  };
});
