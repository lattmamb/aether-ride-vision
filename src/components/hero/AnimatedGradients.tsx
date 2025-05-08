
import React from "react";
import { motion } from "framer-motion";

const AnimatedGradients: React.FC = () => {
  return (
    <>
      <motion.div 
        className="absolute inset-x-20 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-blue to-transparent h-[3px] w-3/4 blur-md"
        animate={{ 
          x: [50, -50, 50],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute inset-x-20 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-blue to-transparent h-px w-3/4"
        animate={{ 
          x: [-30, 30, -30],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute inset-x-60 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-purple to-transparent h-[6px] w-1/4 blur-md"
        animate={{ 
          x: [-50, 50, -50],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      <motion.div 
        className="absolute inset-x-60 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-purple to-transparent h-px w-1/4"
        animate={{ 
          x: [30, -30, 30],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 14, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Additional crossing gradient lines */}
      <motion.div 
        className="absolute left-20 right-20 bottom-60 z-0 bg-gradient-to-r from-transparent via-tesla-blue/70 to-transparent h-[2px] w-1/2 blur-sm"
        animate={{ 
          x: [-80, 80, -80],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <motion.div 
        className="absolute left-40 right-40 bottom-40 z-0 bg-gradient-to-r from-transparent via-tesla-purple/70 to-transparent h-[4px] w-1/3 blur-lg"
        animate={{ 
          x: [60, -60, 60],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 17, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
    </>
  );
};

export default AnimatedGradients;
