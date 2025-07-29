import React from 'react';

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
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-lg flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <div className="text-4xl">🌍</div>
        </div>
        <p className="text-lg font-semibold">Interactive Globe</p>
        <p className="text-sm opacity-80">Global vehicle tracking coming soon</p>
      </div>
    </div>
  );
};

const Globe = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-black rounded-lg flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <div className="text-4xl">🌍</div>
        </div>
        <p className="text-lg font-semibold">Interactive Globe</p>
        <p className="text-sm opacity-80">Global vehicle tracking coming soon</p>
      </div>
    </div>
  );
};

export default Globe;