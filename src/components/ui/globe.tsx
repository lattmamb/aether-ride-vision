
import React, { useRef, useEffect } from 'react';

const Globe = () => {
  const globeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    // Simple sphere visualization without ThreeGlobe
    const createGlobeVisualization = () => {
      const container = globeEl.current;
      if (!container) return;

      // Create a simple CSS-based globe representation
      const globe = document.createElement('div');
      globe.className = 'globe-sphere';
      globe.style.cssText = `
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, #4a90e2, #1a365d);
        position: relative;
        margin: 0 auto;
        box-shadow: 
          inset -40px -40px 80px rgba(0,0,0,0.4),
          0 0 80px rgba(74, 144, 226, 0.3);
        animation: rotate 20s linear infinite;
      `;

      // Add CSS animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .globe-sphere::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent);
        }
      `;
      document.head.appendChild(style);

      container.appendChild(globe);

      return () => {
        if (container.contains(globe)) {
          container.removeChild(globe);
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    };

    const cleanup = createGlobeVisualization();
    return cleanup;
  }, []);

  return <div ref={globeEl} className="w-full h-full flex items-center justify-center" />;
};

interface WorldProps {
  data: any[];
  globeConfig: {
    pointSize: number;
    globeColor: string;
    showAtmosphere: boolean;
    atmosphereColor: string;
    atmosphereAltitude: number;
    emissive: string;
    emissiveIntensity: number;
    shininess: number;
    polygonColor: string;
    ambientLight: string;
    directionalLeftLight: string;
    directionalTopLight: string;
    pointLight: string;
    arcTime: number;
    arcLength: number;
    rings: number;
    maxRings: number;
    initialPosition: { lat: number; lng: number };
    autoRotate: boolean;
    autoRotateSpeed: number;
  };
}

export const World: React.FC<WorldProps> = ({ data, globeConfig }) => {
  return <Globe />;
};

export default Globe;
