
import React from 'react';
import GlobeDemo from '@/components/ui/globe-demo';
import { chargingStations } from '@/data';

const TrackerSection: React.FC = () => {
  return (
    <section className="py-16 bg-tesla-dark-80">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Global Network Visualization</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Visualize our worldwide charging network and vehicle distribution in real-time.
          </p>
        </div>
        
        <GlobeDemo stations={chargingStations} className="w-full h-[500px]" />
      </div>
    </section>
  );
};

export default TrackerSection;
