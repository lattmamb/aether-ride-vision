
import React from 'react';
import { motion } from 'framer-motion';
import ThreeDCardDemo from '@/components/ui/3d-card-demo';

const ThreeDShowcaseComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-6">3D Vehicle Showcase</h3>
      <p className="text-white/70 mb-6">
        Explore our vehicles in stunning 3D detail. Rotate, zoom, and discover every premium feature.
      </p>
      <ThreeDCardDemo />
    </motion.div>
  );
};

export default ThreeDShowcaseComponent;
