
import React from "react";
import { motion } from "framer-motion";

interface VehiclePaginationDotsProps {
  totalSlides: number;
  activeIndex: number;
}

export const VehiclePaginationDots: React.FC<VehiclePaginationDotsProps> = ({ 
  totalSlides, 
  activeIndex 
}) => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4">
      <div className="flex gap-2">
        {[...Array(totalSlides)].map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-[#9b87f5]' : 'bg-white/30'}`}
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
              backgroundColor: activeIndex === index ? 'rgb(155, 135, 245)' : 'rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default VehiclePaginationDots;
