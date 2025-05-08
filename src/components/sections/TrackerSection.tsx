
import React, { useState, useEffect } from 'react';
import GlobeDemo from '@/components/ui/globe-demo';
import { chargingStations } from '@/data';
import { AlertTriangle } from 'lucide-react';

const TrackerSection: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasError(true);
      }
    } catch (e) {
      setHasError(true);
    }
  }, []);

  return (
    <section className="py-16 bg-tesla-dark-80">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Global Network Visualization</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Visualize our worldwide charging network and vehicle distribution in real-time.
          </p>
        </div>
        
        {hasError ? (
          <div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center h-[500px]">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">3D Visualization Unavailable</h3>
            <p className="text-white/70 text-center max-w-lg">
              Your browser doesn't support WebGL, which is required for our 3D globe visualization.
              Please try using a modern browser like Chrome, Firefox, or Edge.
            </p>
          </div>
        ) : (
          <GlobeDemo stations={chargingStations} className="w-full h-[500px]" />
        )}
      </div>
    </section>
  );
};

export default TrackerSection;
