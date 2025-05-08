
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
      // Add an alias for the problematic WebGPU module
      "three/webgpu": false
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
      ],
    },
  },
}));
