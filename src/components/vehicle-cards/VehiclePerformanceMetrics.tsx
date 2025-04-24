
import React from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetricsProps {
  performance: {
    range: number;
    topSpeed: number;
    acceleration: number;
  };
}

export const VehiclePerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ performance }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center">
      <motion.div 
        className="bg-black/30 p-4 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-center mb-2">
          <div className="h-10 w-10 rounded-full bg-tesla-blue/20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="h-6 w-6 rounded-full bg-tesla-blue/40 flex items-center justify-center"
            >
              <div className="h-3 w-3 rounded-full bg-tesla-blue"></div>
            </motion.div>
          </div>
        </div>
        <p className="text-tesla-blue text-sm">Range</p>
        <p className="text-white text-xl font-bold">{performance.range} mi</p>
      </motion.div>
      
      <motion.div 
        className="bg-black/30 p-4 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-center mb-2">
          <div className="h-10 w-10 rounded-full bg-tesla-purple/20 flex items-center justify-center">
            <motion.svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              animate={{ 
                rotateY: [0, 180, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut" 
              }}
            >
              <path d="M12 4V2M12 20v2M6.34 7.34L4.93 5.93M17.66 18.66l1.41 1.41M4 12H2M20 12h2M7.34 17.66l-1.41 1.41M18.66 7.34l1.41-1.41M12 17a5 5 0 100-10 5 5 0 000 10z" 
                stroke="#5E5CE6" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>
        <p className="text-tesla-purple text-sm">Top Speed</p>
        <p className="text-white text-xl font-bold">{performance.topSpeed} mph</p>
      </motion.div>
      
      <motion.div 
        className="bg-black/30 p-4 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-center mb-2">
          <motion.div 
            className="h-10 w-10 rounded-full bg-tesla-red/20 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeInOut" 
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9l7 7 7-7" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V4" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
        <p className="text-tesla-red text-sm">0-60 mph</p>
        <p className="text-white text-xl font-bold">{performance.acceleration}s</p>
      </motion.div>
    </div>
  );
};
