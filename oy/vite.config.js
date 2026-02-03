import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    transformer: "postcss",
    minify: "esbuild",
  },
  server: {
    historyApiFallback: true,
  },
  preview: {
    allowedHosts: ["oy-v2.onrender.com"],
    historyApiFallback: true,
  },
});
