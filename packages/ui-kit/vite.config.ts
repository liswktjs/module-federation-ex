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
      name: "@federation/ui-kit",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || "";

          if (fileName.endsWith(".css")) {
            return "index.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
