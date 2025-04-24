
import React from 'react';
import { motion } from 'framer-motion';

interface ColorSelectorProps {
  colors: string[];
  colorImages?: { [key: string]: string };
  onColorChange?: (color: string) => void;
}

export const VehicleColorSelector: React.FC<ColorSelectorProps> = ({ colors, colorImages, onColorChange }) => {
  if (!colorImages || Object.keys(colorImages).length === 0) return null;

  return (
    <motion.div 
      className="mt-6 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-tesla-blue text-lg mb-3">Available Colors:</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {colors.filter(color => colorImages[color]).map((color, index) => (
          <motion.div
            key={color}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-white transition-all"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onColorChange?.(color)}
          />
        ))}
      </div>
    </motion.div>
  );
};
