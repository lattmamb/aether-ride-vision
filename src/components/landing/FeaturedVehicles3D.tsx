
import React from 'react';
import { Vehicle3DCard } from '@/components/ui/3d-vehicle-card';
import { vehicles } from '@/data/vehicles';

const FeaturedVehicles3D: React.FC = () => {
  // Get the first 3 vehicles as featured
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our premium 3D vehicle showcase. Each model offers cutting-edge technology 
            and unmatched performance in an immersive display.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {featuredVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Vehicle3DCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles3D;
