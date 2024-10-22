import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "@federation/shared",
      fileName: "index",
    },
  },
});
