import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(), // ← ONLY THIS, NOT "tailwindcss" or postcss plugins
    react(),
  ],
});
