
import React from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroIcon: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-6 relative"
    >
      <motion.div
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-tesla-blue/20 rounded-full blur-lg"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="w-14 h-14 mx-auto mb-6 relative"
        animate={{ 
          rotateY: [0, 360],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <Zap size={56} className="text-tesla-blue" />
      </motion.div>
    </motion.div>
  );
};

export default HeroIcon;
