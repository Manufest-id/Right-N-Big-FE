import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true, // 👈 allows access from external hosts (e.g. ngrok)
    allowedHosts: [
      "camel-sweet-lionfish.ngrok-free.app", // 👈 your ngrok domain
    ],
  },
});
