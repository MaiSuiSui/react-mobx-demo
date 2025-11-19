// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // 如果你想更细一点，也可以加：
      // "@components": path.resolve(__dirname, "src/components"),
      // "@stores": path.resolve(__dirname, "src/stores"),
    },
  },
});

