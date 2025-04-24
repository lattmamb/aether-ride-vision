
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
}

export const VehicleFeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <motion.div 
      className="mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <h3 className="text-tesla-blue text-lg mb-2">Key Features:</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mt-4">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-neutral-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
          >
            <Check size={16} className="text-tesla-green mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.div 
        className="mt-6 p-4 border border-tesla-blue/20 rounded-xl bg-tesla-blue/5 flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <Shield size={24} className="text-tesla-blue mr-3 flex-shrink-0" />
        <p className="text-sm text-neutral-300">
          <span className="font-medium text-white">Premium Protection Plan</span> included with every rental. Includes insurance coverage and 24/7 roadside assistance.
        </p>
      </motion.div>
    </motion.div>
  );
};
