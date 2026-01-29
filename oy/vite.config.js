import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    // これを追加：Lightning CSSを使わずに標準のPostCSS/esbuildを使う設定
    transformer: "postcss",
    minify: "esbuild",
  },
  build: {
    // CSSの圧縮にもLightning CSSを使わないように明示
    cssMinify: "esbuild",
  },
});
