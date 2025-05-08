
import React from 'react';
import Map from '@/components/Map';

const TrackerSection: React.FC = () => {
  return (
    <section className="py-16 bg-tesla-dark-80">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Live Vehicle Tracking</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Track available vehicles and charging stations in real-time on our interactive map.
          </p>
        </div>
        
        <Map className="w-full h-[500px]" />
      </div>
    </section>
  );
};

export default TrackerSection;
