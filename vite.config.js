import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      include: ["**/*.svg"],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    host: true, // 외부 디바이스에서도 접근할 수 있도록 설정
    port: 5173,
  },
});
