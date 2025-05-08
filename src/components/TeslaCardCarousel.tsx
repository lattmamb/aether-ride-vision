
import React, { useState, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { vehicles } from "@/data/vehicles";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VehicleContent = ({ 
  model, 
  features, 
  performance,
  colors,
  colorImages,
  onColorChange,
  selectedColor,
  id
}: { 
  model: string; 
  features: string[]; 
  performance: { range: number; topSpeed: number; acceleration: number; };
  colors: string[];
  colorImages?: {[key: string]: string};
  onColorChange?: (color: string) => void;
  selectedColor?: string;
  id: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-[#0A0A0A]/90 to-[#111]/80 backdrop-blur-md p-8 md:p-10 rounded-3xl mb-4 border border-white/5">
      <div className="text-neutral-200 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bold text-white text-xl md:text-3xl block mb-4">
            {model} <span className="text-tesla-blue">Electric Excellence</span>
          </span>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-tesla-blue/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,132,255,0.2)]">
            <p className="text-tesla-blue text-sm">Range</p>
            <p className="text-white text-xl font-bold">{performance.range} mi</p>
          </div>
          <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-tesla-blue/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,132,255,0.2)]">
            <p className="text-tesla-blue text-sm">Top Speed</p>
            <p className="text-white text-xl font-bold">{performance.topSpeed} mph</p>
          </div>
          <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-tesla-blue/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,132,255,0.2)]">
            <p className="text-tesla-blue text-sm">0-60 mph</p>
            <p className="text-white text-xl font-bold">{performance.acceleration}s</p>
          </div>
        </motion.div>
        
        {/* Color selector */}
        {colorImages && Object.keys(colorImages).length > 0 && (
          <motion.div 
            className="mt-6 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-tesla-blue text-lg mb-3 flex items-center">
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
                  className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-offset-black ring-tesla-blue scale-110' : 'border border-white/10'}`}
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onColorChange && onColorChange(color)}
                />
              ))}
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-tesla-blue text-lg mb-2 flex items-center">
            <BadgeCheck className="w-4 h-4 mr-1" /> Key Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="text-neutral-300 flex items-center"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              >
                <span className="text-tesla-blue mr-2">•</span> {feature}
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-6 flex justify-center">
            <Button asChild className="bg-tesla-blue hover:bg-tesla-blue/80 text-white">
              <Link to={`/vehicles/${id}`} className="flex items-center">
                View Details <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export function TeslaCardCarousel() {
  const [selectedColors, setSelectedColors] = useState<{[key: string]: string}>({});
  const [activeIndex, setActiveIndex] = useState(0);

  const handleColorChange = (vehicleId: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [vehicleId]: color
    }));
  };

  const cards = vehicles.map((vehicle, index) => {
    const selectedColor = selectedColors[vehicle.id];
    const displayImage = vehicle.colorImages && selectedColor && vehicle.colorImages[selectedColor] 
      ? vehicle.colorImages[selectedColor] 
      : vehicle.image;

    return (
      <Card 
        key={vehicle.id} 
        card={{
          category: vehicle.type.toUpperCase(),
          title: vehicle.model,
          src: displayImage,
          content: <VehicleContent 
                    model={vehicle.model} 
                    features={vehicle.features} 
                    performance={vehicle.performance}
                    colors={vehicle.colors}
                    colorImages={vehicle.colorImages}
                    onColorChange={(color) => handleColorChange(vehicle.id, color)}
                    selectedColor={selectedColor}
                    id={vehicle.id}
                  />
        }} 
        index={index}
        // Remove the onExpand prop since it doesn't exist in CardProps
        setActiveIndex={(idx) => setActiveIndex(idx)}
      />
    );
  });

  return (
    <div className="w-full h-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-tesla-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tesla-purple/10 rounded-full blur-[120px]"></div>
      </div>
      
      <motion.div 
        className="max-w-7xl pl-4 mx-auto mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 mb-2">
          Explore Our Tesla Models
        </h2>
        <p className="text-white/70 max-w-2xl text-base md:text-lg">
          Experience extraordinary performance, range, and design. Select a vehicle to explore more details and customize your future Tesla.
        </p>
      </motion.div>
      
      <div className="relative">
        <Carousel items={cards} />
        
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4">
          <div className="flex gap-2">
            {vehicles.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-tesla-blue' : 'bg-white/30'}`}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                  backgroundColor: activeIndex === index ? 'rgb(10, 132, 255)' : 'rgba(255, 255, 255, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeslaCardCarousel;
