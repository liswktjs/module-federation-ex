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
    rollupOptions: {
      external: ["react", "react-dom", "@auth0/auth0-spa-js"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@auth0/auth0-spa-js": "Auth0",
        },
      },
    },
  },
});
