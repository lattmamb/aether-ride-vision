
import React from 'react';
import { motion } from 'framer-motion';
import { VehiclePerformanceMetrics } from './VehiclePerformanceMetrics';
import { VehicleColorSelector } from './VehicleColorSelector';
import { VehicleFeaturesList } from './VehicleFeaturesList';

interface VehicleContentProps {
  model: string;
  features: string[];
  performance: {
    range: number;
    topSpeed: number;
    acceleration: number;
  };
  colors: string[];
  colorImages?: { [key: string]: string };
  onColorChange?: (color: string) => void;
}

export const VehicleContent: React.FC<VehicleContentProps> = ({
  model,
  features,
  performance,
  colors,
  colorImages,
  onColorChange
}) => {
  return (
    <motion.div 
      className="bg-[#0A0A0A]/80 backdrop-blur-md p-8 md:p-14 rounded-3xl mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <motion.span 
          className="font-bold text-white text-xl md:text-3xl block mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {model} - Experience Electric Excellence
        </motion.span>
        
        <VehiclePerformanceMetrics performance={performance} />
        <VehicleColorSelector 
          colors={colors} 
          colorImages={colorImages} 
          onColorChange={onColorChange} 
        />
        <VehicleFeaturesList features={features} />
      </div>
    </motion.div>
  );
};
