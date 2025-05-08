
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
      // Fix the problematic WebGPU module with a proper string path
      // Use an empty module instead of boolean false
      "three/webgpu": path.resolve(__dirname, "./src/utils/empty-module.ts")
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // ThreeJS uses `.tsx` file extension for some reason
      loader: {
        '.tsx': 'tsx',
      },
    },
  },
  build: {
    sourcemap: mode === 'development',
    rollupOptions: {
      // Prevent bundling of these problematic imports
      external: [
        /three\/examples\/jsm\/libs\/draco\/.+\.wasm/,
        /three\/examples\/jsm\/libs\/basis\/.+\.wasm/,
        /three\/webgpu/,  // Explicitly exclude webgpu module
        /three\/tsl/,     // Also exclude tsl module that's causing an error
      ],
    },
  },
}));
