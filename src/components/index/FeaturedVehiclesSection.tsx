
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Battery, Clock } from 'lucide-react';
import { Vehicle } from '@/types';

interface FeaturedVehiclesSectionProps {
  featuredVehicles: Vehicle[];
}

const FeaturedVehiclesSection: React.FC<FeaturedVehiclesSectionProps> = ({ featuredVehicles }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold gradient-blue-text">Featured Vehicles</h2>
        <Link to="/vehicles" className="text-sm text-aether-blue hover:text-aether-blue-light flex items-center gap-1">
          View all <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredVehicles.map((vehicle) => (
          <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id}>
            <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 overflow-hidden group">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">{vehicle.model}</h3>
                <p className="text-white/70 text-sm mb-4">{vehicle.tagline}</p>
                
                <div className="relative h-44 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 right-0 bg-aether-panel-light px-3 py-1 rounded-tl text-aether-blue font-semibold">
                    ${vehicle.price}{vehicle.priceUnit}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-aether-blue/20">
                      <Battery className="h-3.5 w-3.5 text-aether-blue" />
                    </div>
                    <span className="text-sm text-white/80">{vehicle.performance.range} mi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-aether-blue/20">
                      <Clock className="h-3.5 w-3.5 text-aether-blue" />
                    </div>
                    <span className="text-sm text-white/80">{vehicle.performance.acceleration}s 0-60</span>
                  </div>
                </div>
                
                <Button className="w-full neon-button">
                  View Details
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedVehiclesSection;
