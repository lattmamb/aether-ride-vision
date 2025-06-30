import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Battery, Zap, Gauge, Check } from 'lucide-react';
import { Vehicle } from '@/types';
import { motion } from 'framer-motion';

interface VehicleDetailsHeroProps {
  vehicle: Vehicle;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const VehicleDetailsHero: React.FC<VehicleDetailsHeroProps> = ({ 
  vehicle, 
  selectedColor, 
  setSelectedColor 
}) => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate(`/book/${vehicle.id}`);
  };

  // This component is now simplified since we have the InteractiveVehicleViewer
  // We'll keep just the essential information display
  return (
    <motion.div 
      className="mb-8 p-6 glass-card rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-purple-text">Key Features</h2>
          <ul className="space-y-3">
            {vehicle.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="p-1 rounded-full bg-[#9b87f5]/20 text-[#9b87f5]">
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-purple-text">Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div className="flex items-center">
                <Battery className="h-5 w-5 text-[#9b87f5] mr-2" />
                <span>Range</span>
              </div>
              <span className="font-bold">{vehicle.performance.range} miles</span>
            </div>
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-[#9b87f5] mr-2" />
                <span>0-60 mph</span>
              </div>
              <span className="font-bold">{vehicle.performance.acceleration}s</span>
            </div>
            <div className="flex items-center justify-between p-3 glass-card rounded-lg">
              <div className="flex items-center">
                <Gauge className="h-5 w-5 text-[#9b87f5] mr-2" />
                <span>Top Speed</span>
              </div>
              <span className="font-bold">{vehicle.performance.topSpeed} mph</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleDetailsHero;
