
import React from 'react';
import { motion } from 'framer-motion';
import ThreeDCardDemo from '@/components/ui/3d-card-demo';

const ThreeDShowcaseComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="glass-card gradient-border-animated p-6 rounded-xl relative overflow-hidden interactive-card group"
    >
      {/* Background enhancement */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #9b87f5, #33C3F0, #D946EF)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-[#9b87f5]/10 rounded-full blur-xl floating"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#33C3F0]/10 rounded-full blur-xl floating-delayed"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10"
      >
        <motion.h3 
          className="text-xl font-bold gradient-purple-text mb-6 text-glow"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          3D Vehicle Showcase
        </motion.h3>
        
        <motion.p 
          className="text-white/70 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Explore our vehicles in stunning 3D detail. Rotate, zoom, and discover every premium feature with our interactive showcase.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl overflow-hidden"
        >
          <ThreeDCardDemo />
        </motion.div>
      </motion.div>
      
      {/* Subtle animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent, rgba(155, 135, 245, 0.1), transparent)',
        }}
        animate={{
          background: [
            'linear-gradient(0deg, transparent, rgba(155, 135, 245, 0.1), transparent)',
            'linear-gradient(90deg, transparent, rgba(155, 135, 245, 0.1), transparent)',
            'linear-gradient(180deg, transparent, rgba(155, 135, 245, 0.1), transparent)',
            'linear-gradient(270deg, transparent, rgba(155, 135, 245, 0.1), transparent)',
            'linear-gradient(360deg, transparent, rgba(155, 135, 245, 0.1), transparent)',
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default ThreeDShowcaseComponent;
