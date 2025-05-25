import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, Zap, Timer } from "lucide-react";
import { Vehicle3DCard } from "@/components/ui/3d-vehicle-card";
import { vehicles } from "@/data/vehicles";

const VehicleCard: React.FC<{
  model: string;
  type: string;
  price: string;
  range: string;
  acceleration: string;
  topSpeed: string;
  link: string;
}> = ({ model, type, price, range, acceleration, topSpeed, link }) => {
  return (
    <div className="glass-card p-6 rounded-xl hover:bg-glass-highlight/20 transition-all duration-300 group">
      <div className="h-48 bg-gradient-to-br from-tesla-blue/10 to-[#9b87f5]/10 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-white/50 text-center">
          <div className="text-2xl mb-2">[{model}]</div>
          <div className="text-sm">Vehicle Image</div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-1">{model}</h3>
      <p className="text-white/70 mb-4">{type}</p>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <Battery className="h-5 w-5 text-tesla-blue mx-auto mb-1" />
          <p className="text-xs text-white/60">Range</p>
          <p className="text-sm font-semibold text-white">{range}</p>
        </div>
        <div className="text-center">
          <Zap className="h-5 w-5 text-[#9b87f5] mx-auto mb-1" />
          <p className="text-xs text-white/60">0-60 mph</p>
          <p className="text-sm font-semibold text-white">{acceleration}</p>
        </div>
        <div className="text-center">
          <Timer className="h-5 w-5 text-green-400 mx-auto mb-1" />
          <p className="text-xs text-white/60">Top Speed</p>
          <p className="text-sm font-semibold text-white">{topSpeed}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-white">{price}</span>
        <span className="text-white/70 text-sm">per day</span>
      </div>
      
      <Link to={link} className="futuristic-button w-full block">
        <div className="blob1"></div>
        <div className="inner flex items-center justify-center">
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </div>
  );
};

const NewVehicleGallery: React.FC<{ use3D?: boolean }> = ({ use3D = false }) => {
  const displayVehicles = vehicles.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Premium Electric Fleet
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Choose from our collection of cutting-edge electric vehicles. 
            Each model offers unmatched performance, luxury, and sustainability.
          </p>
          <Link to="/vehicles" className="futuristic-button">
            <div className="blob1"></div>
            <div className="inner">
              View All Vehicles
              <ArrowRight className="inline-block h-5 w-5 ml-2" />
            </div>
          </Link>
        </div>
        
        {use3D ? (
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {displayVehicles.map((vehicle) => (
              <Vehicle3DCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VehicleCard
              model="Model S"
              type="Luxury Sedan"
              price="$150"
              range="405 mi"
              acceleration="1.99s"
              topSpeed="200 mph"
              link="/vehicles/model-s"
            />
            <VehicleCard
              model="Model 3"
              type="Performance Sedan"
              price="$120"
              range="358 mi"
              acceleration="3.1s"
              topSpeed="162 mph"
              link="/vehicles/model-3"
            />
            <VehicleCard
              model="Model X"
              type="Luxury SUV"
              price="$180"
              range="348 mi"
              acceleration="2.5s"
              topSpeed="163 mph"
              link="/vehicles/model-x"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default NewVehicleGallery;
