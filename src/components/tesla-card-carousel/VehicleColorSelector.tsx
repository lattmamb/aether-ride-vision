
import React from "react";
import { motion } from "framer-motion";

interface VehicleColorSelectorProps {
  colors: string[];
  colorImages: {[key: string]: string} | undefined;
  selectedColor?: string;
  onColorChange?: (color: string) => void;
}

export const VehicleColorSelector: React.FC<VehicleColorSelectorProps> = ({ 
  colors, 
  colorImages, 
  selectedColor, 
  onColorChange 
}) => {
  if (!colorImages || Object.keys(colorImages).length === 0) return null;
  
  return (
    <motion.div 
      className="mt-6 mb-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-[#9b87f5] text-lg mb-3 flex items-center">
        <span className="mr-2">Available Colors</span>
        {selectedColor && (
          <span className="text-sm text-white/60 ml-2">
            Selected: {selectedColor}
          </span>
        )}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {colors.filter(color => colorImages[color]).map((color) => (
          <motion.div
            key={color}
            className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-offset-black ring-[#9b87f5] scale-110' : 'border border-white/10'}`}
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onColorChange && onColorChange(color)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleColorSelector;
