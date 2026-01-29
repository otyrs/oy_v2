import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "postcss",
    minify: "esbuild",
  },
  // --- ここから追加 ---
  preview: {
    preview: {
      allowedHosts: true,
    },
  },
  // --- ここまで ---
});
