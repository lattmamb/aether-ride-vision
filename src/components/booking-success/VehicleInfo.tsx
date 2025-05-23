
import React from 'react';
import { motion } from 'framer-motion';
import { Vehicle } from '@/types';

interface VehicleInfoProps {
  vehicle: Vehicle;
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({ vehicle }) => {
  return (
    <motion.div 
      className="flex items-center mb-6"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-shrink-0 w-24 h-16 bg-white/5 p-2 rounded-lg flex items-center justify-center">
        <div className="text-white/50 text-xs">
          [Vehicle]
        </div>
      </div>
      <div className="ml-4">
        <h3 className="font-medium text-white">Tesla {vehicle.model}</h3>
        <p className="text-sm text-white/70">{vehicle.tagline}</p>
      </div>
    </motion.div>
  );
};

export default VehicleInfo;
