
import React from 'react';
import VehicleCard from '@/components/VehicleCard';
import { Vehicle } from '@/types';

interface VehiclesShowcaseSectionProps {
  vehicles: Vehicle[];
}

const VehiclesShowcaseSection: React.FC<VehiclesShowcaseSectionProps> = ({ vehicles }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">Available Now</h2>
          <p className="text-xl text-white/70 mb-8 text-center max-w-3xl mx-auto">
            Browse our current inventory of Tesla vehicles ready for immediate rental.
            Select your perfect electric ride and experience the future today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehiclesShowcaseSection;
