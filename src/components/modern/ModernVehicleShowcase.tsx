
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Zap, Timer } from 'lucide-react';
import { useCursorTracker } from '@/hooks/useCursorTracker';

interface VehicleCardProps {
  model: string;
  type: string;
  price: string;
  range: string;
  acceleration: string;
  topSpeed: string;
  link: string;
  index: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ 
  model, type, price, range, acceleration, topSpeed, link, index 
}) => {
  const { smoothPosition } = useCursorTracker();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      cardRef.current.style.setProperty('--mouse-x', `${x}%`);
      cardRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition]);

  return (
    <div 
      ref={cardRef}
      className="modern-vehicle-card"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="modern-vehicle-image">
        <div className="text-white/30 text-center">
          <div className="text-3xl mb-2 font-light">{model}</div>
          <div className="text-sm opacity-60">Preview</div>
        </div>
      </div>
      
      <div className="modern-vehicle-content">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-1">{model}</h3>
          <p className="text-white/60 text-sm uppercase tracking-wide">{type}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { icon: Battery, label: "Range", value: range, color: "#0A84FF" },
            { icon: Zap, label: "0-60 mph", value: acceleration, color: "#9b87f5" },
            { icon: Timer, label: "Top Speed", value: topSpeed, color: "#34C759" }
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="text-center">
              <Icon className="h-5 w-5 mx-auto mb-2" style={{ color }} />
              <p className="text-xs text-white/50 mb-1">{label}</p>
              <p className="text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-white/60 text-sm ml-1">per day</span>
          </div>
        </div>
        
        <Link to={link} className="modern-button modern-button-primary w-full">
          <div className="modern-button-content">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const ModernVehicleShowcase: React.FC = () => {
  const vehicles = [
    {
      model: "Model S",
      type: "Luxury Sedan",
      price: "$150",
      range: "405 mi",
      acceleration: "1.99s",
      topSpeed: "200 mph",
      link: "/vehicles/model-s"
    },
    {
      model: "Model 3",
      type: "Performance Sedan", 
      price: "$120",
      range: "358 mi",
      acceleration: "3.1s", 
      topSpeed: "162 mph",
      link: "/vehicles/model-3"
    },
    {
      model: "Model X",
      type: "Luxury SUV",
      price: "$180", 
      range: "348 mi",
      acceleration: "2.5s",
      topSpeed: "163 mph",
      link: "/vehicles/model-x"
    }
  ];

  return (
    <section className="py-32 modern-section bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Premium Fleet
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Choose from our collection of cutting-edge electric vehicles. 
            Each model offers unmatched performance and luxury.
          </p>
          <Link to="/vehicles" className="modern-button modern-button-secondary">
            <div className="modern-button-content">
              View All Vehicles
              <ArrowRight className="inline-block h-5 w-5 ml-2" />
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.model}
              {...vehicle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernVehicleShowcase;
