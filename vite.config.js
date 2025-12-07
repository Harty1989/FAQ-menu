import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
   base: "/Harty1989/",
  plugins: [
    tailwindcss(), // ← ONLY THIS, NOT "tailwindcss" or postcss plugins
    react(),
  ],
});
