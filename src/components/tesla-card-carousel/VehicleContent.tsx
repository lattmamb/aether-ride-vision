
import React from "react";
import { motion } from "framer-motion";
import VehiclePerformanceStats from "./VehiclePerformanceStats";
import VehicleColorSelector from "./VehicleColorSelector";
import VehicleFeaturesList from "./VehicleFeaturesList";

interface VehicleContentProps {
  model: string; 
  features: string[]; 
  performance: { range: number; topSpeed: number; acceleration: number; };
  colors: string[];
  colorImages?: {[key: string]: string};
  onColorChange?: (color: string) => void;
  selectedColor?: string;
  id: string;
}

export const VehicleContent: React.FC<VehicleContentProps> = ({
  model,
  features,
  performance,
  colors,
  colorImages,
  onColorChange,
  selectedColor,
  id
}) => {
  return (
    <div className="bg-gradient-to-b from-[#0A0A0A]/90 to-[#111]/80 backdrop-blur-md p-8 md:p-10 rounded-3xl mb-4 border border-white/5">
      <div className="text-neutral-200 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bold text-white text-xl md:text-3xl block mb-4">
            {model} <span className="text-[#9b87f5]">Electric Excellence</span>
          </span>
        </motion.div>
        
        <VehiclePerformanceStats performance={performance} />
        
        <VehicleFeaturesList features={features} vehicleId={id} />
      </div>
    </div>
  );
};

export default VehicleContent;
