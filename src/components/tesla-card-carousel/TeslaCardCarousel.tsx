
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import VehicleContent from "./VehicleContent";
import VehiclePaginationDots from "./VehiclePaginationDots";

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
        setActiveIndex={(idx) => setActiveIndex(idx)}
      />
    );
  });

  return (
    <div className="w-full h-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#9b87f5]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6E59A5]/10 rounded-full blur-[120px]"></div>
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
        <VehiclePaginationDots totalSlides={vehicles.length} activeIndex={activeIndex} />
      </div>
    </div>
  );
}

export default TeslaCardCarousel;
