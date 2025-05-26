
import { useState, useEffect } from 'react';

interface WebGLCapabilities {
  isWebGLSupported: boolean;
  isWebGL2Supported: boolean;
  maxTextureSize: number;
  maxCombinedTextureImageUnits: number;
  maxVertexAttribs: number;
  maxFragmentUniforms: number;
  vendor: string;
  renderer: string;
  version: string;
  performanceLevel: 'high' | 'medium' | 'low';
}

export const useWebGLCapabilities = (): WebGLCapabilities => {
  const [capabilities, setCapabilities] = useState<WebGLCapabilities>({
    isWebGLSupported: false,
    isWebGL2Supported: false,
    maxTextureSize: 0,
    maxCombinedTextureImageUnits: 0,
    maxVertexAttribs: 0,
    maxFragmentUniforms: 0,
    vendor: '',
    renderer: '',
    version: '',
    performanceLevel: 'low'
  });

  useEffect(() => {
    const detectCapabilities = () => {
      const canvas = document.createElement('canvas');
      
      // Check WebGL support
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const gl2 = canvas.getContext('webgl2');
      
      if (!gl) {
        setCapabilities(prev => ({ ...prev, isWebGLSupported: false }));
        return;
      }

      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown';
      const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';
      
      const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      const maxCombinedTextureImageUnits = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
      const maxVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
      const maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
      
      // Determine performance level based on capabilities
      let performanceLevel: 'high' | 'medium' | 'low' = 'low';
      
      if (maxTextureSize >= 4096 && maxCombinedTextureImageUnits >= 32) {
        performanceLevel = 'high';
      } else if (maxTextureSize >= 2048 && maxCombinedTextureImageUnits >= 16) {
        performanceLevel = 'medium';
      }
      
      // Additional performance hints from GPU vendor/renderer
      const rendererLower = renderer.toLowerCase();
      if (rendererLower.includes('nvidia') || rendererLower.includes('amd') || rendererLower.includes('radeon')) {
        if (performanceLevel === 'medium') performanceLevel = 'high';
      }
      
      setCapabilities({
        isWebGLSupported: true,
        isWebGL2Supported: !!gl2,
        maxTextureSize,
        maxCombinedTextureImageUnits,
        maxVertexAttribs,
        maxFragmentUniforms,
        vendor,
        renderer,
        version: gl.getParameter(gl.VERSION),
        performanceLevel
      });
    };

    detectCapabilities();
  }, []);

  return capabilities;
};
