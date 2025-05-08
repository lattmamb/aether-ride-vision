
import React from 'react';
import ThreeDCardDemo from '@/components/ui/3d-card-demo';

const FeaturedVehicleSection: React.FC = () => {
  return (
    <section className="py-16 bg-tesla-dark-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Vehicle</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Experience our interactive 3D showcase of Tesla's finest vehicles.
          </p>
        </div>
        <ThreeDCardDemo />
      </div>
    </section>
  );
};

export default FeaturedVehicleSection;
