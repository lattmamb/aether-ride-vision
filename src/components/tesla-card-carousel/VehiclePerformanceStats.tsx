
import React from "react";
import { motion } from "framer-motion";

interface VehiclePerformanceProps {
  performance: {
    range: number;
    topSpeed: number;
    acceleration: number;
  };
}

export const VehiclePerformanceStats: React.FC<VehiclePerformanceProps> = ({ performance }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-[#9b87f5]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.2)]">
        <p className="text-[#9b87f5] text-sm">Range</p>
        <p className="text-white text-xl font-bold">{performance.range} mi</p>
      </div>
      <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-[#9b87f5]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.2)]">
        <p className="text-[#9b87f5] text-sm">Top Speed</p>
        <p className="text-white text-xl font-bold">{performance.topSpeed} mph</p>
      </div>
      <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-[#9b87f5]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.2)]">
        <p className="text-[#9b87f5] text-sm">0-60 mph</p>
        <p className="text-white text-xl font-bold">{performance.acceleration}s</p>
      </div>
    </motion.div>
  );
};

export default VehiclePerformanceStats;
