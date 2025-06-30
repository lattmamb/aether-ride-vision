
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroScrollIndicator: React.FC = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 mb-2">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
        </div>
        <ArrowDown className="h-4 w-4 text-white/50" />
      </div>
    </motion.div>
  );
};

export default HeroScrollIndicator;
