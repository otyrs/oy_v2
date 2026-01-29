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
    allowedHosts: ["oy-v2.onrender.com"], // 自分のURLを許可する
  },
  // --- ここまで ---
});
