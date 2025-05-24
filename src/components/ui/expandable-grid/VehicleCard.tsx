
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle;
  id: string;
  onClick: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, id, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate 360-degree view frames for vehicle
  const generate360Frames = (vehicleId: string) => {
    const baseImages = [
      `https://images.unsplash.com/photo-1549399148-0c32a42d8b6e?w=800&h=600&fit=crop&crop=center`, // Front view
      `https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center`, // Front-right
      `https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&crop=center`, // Right side
      `https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop&crop=center`, // Back-right
      `https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center`, // Back view
      `https://images.unsplash.com/photo-1549399148-0c32a42d8b6e?w=800&h=600&fit=crop&crop=center`, // Back-left
      `https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&crop=center`, // Left side
      `https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop&crop=center`, // Front-left
    ];
    return baseImages;
  };

  const frames360 = generate360Frames(vehicle.id);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frames360.length);
      }, 200);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentFrame(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, frames360.length]);

  return (
    <motion.div
      layoutId={`card-${vehicle.id}-${id}`}
      onClick={() => onClick(vehicle)}
      className={cn(
        "glass-card p-5 relative overflow-hidden cursor-pointer transition-all duration-300",
        "hover:bg-glass-highlight hover:shadow-[0_8px_32px_rgba(155,135,245,0.3)]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {vehicle.available ? (
        <div className="absolute top-4 right-4 z-10 bg-tesla-green text-white text-xs font-medium px-2 py-1 rounded-full">
          Available
        </div>
      ) : (
        <div className="absolute top-4 right-4 z-10 bg-tesla-red/90 text-white text-xs font-medium px-2 py-1 rounded-full">
          Coming Soon
        </div>
      )}

      {/* 360° Indicator */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 left-4 z-10 bg-[#9b87f5]/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full"
        >
          360° View
        </motion.div>
      )}

      <motion.div 
        layoutId={`image-${vehicle.id}-${id}`} 
        className="h-40 flex items-center justify-center mb-4 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${isHovered ? frames360[currentFrame] : (vehicle.image || frames360[0])})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!vehicle.image && (
          <div className="text-white/50 text-center">
            [Vehicle Image]
          </div>
        )}
      </motion.div>

      <motion.h3
        layoutId={`title-${vehicle.id}-${id}`}
        className="text-xl font-bold mb-1 text-white"
      >
        {vehicle.model}
      </motion.h3>
      
      <motion.p
        layoutId={`type-${vehicle.id}-${id}`}
        className="mb-2 text-white/70 text-sm"
      >
        {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}
      </motion.p>
      
      <motion.p
        layoutId={`price-${vehicle.id}-${id}`}
        className="text-2xl font-bold text-white"
      >
        ${vehicle.price}<span className="text-white/70 text-sm">{vehicle.priceUnit}</span>
      </motion.p>
      
      <p className="text-white/60 text-sm mt-2 mb-4">{vehicle.tagline}</p>
      
      <div className="flex justify-center mt-2">
        <Button 
          variant="ghost" 
          className="text-tesla-blue hover:text-white hover:bg-tesla-blue/20 text-sm"
        >
          Tap to view details
        </Button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
