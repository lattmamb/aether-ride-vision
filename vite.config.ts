
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "three": path.resolve(__dirname, "./node_modules/three"),
    },
  },
  optimizeDeps: {
    exclude: ['three-globe'],
    esbuildOptions: {
      // This is needed to fix the WebGPU import issue
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    commonjsOptions: {
      // Fix TypeScript error by setting this to true instead of an array
      ignoreDynamicRequires: true,
    },
    rollupOptions: {
      // Add an override to handle the missing WebGPU module
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || 
            warning.message?.includes('three/webgpu') ||
            warning.message?.includes('WebGPU')) {
          return;
        }
        warn(warning);
      },
      // Ensure three/webgpu is properly external
      external: [
        'three/webgpu',
      ]
    }
  },
}));
