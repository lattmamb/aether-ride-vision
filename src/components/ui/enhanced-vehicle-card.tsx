
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@/types";
import { ArrowRight, Battery, Gauge, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedVehicleCardProps {
  vehicle: Vehicle;
  className?: string;
}

const EnhancedVehicleCard: React.FC<EnhancedVehicleCardProps> = ({ 
  vehicle, 
  className 
}) => {
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
      }, 200); // 200ms per frame for smooth rotation
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
      className={cn("max-w-xs w-full", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-xl shadow-xl mx-auto flex flex-col justify-end p-4",
          "glass-card border border-glass-border",
          "transition-all duration-500",
          "hover:shadow-[0_8px_32px_rgba(155,135,245,0.3)]",
          "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:via-transparent before:to-transparent before:z-10",
          "hover:before:from-black/60"
        )}
        style={{
          backgroundImage: `url(${isHovered ? frames360[currentFrame] : (vehicle.image || frames360[0])})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Availability Badge */}
        {vehicle.available ? (
          <div className="absolute top-4 right-4 z-20 bg-tesla-green text-white text-xs font-medium px-2 py-1 rounded-full">
            Available
          </div>
        ) : (
          <div className="absolute top-4 right-4 z-20 bg-tesla-red/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            Coming Soon
          </div>
        )}

        {/* 360° Indicator */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 left-4 z-20 bg-[#9b87f5]/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full"
          >
            360° View
          </motion.div>
        )}

        {/* Content */}
        <div className="text relative z-20">
          <motion.h1 
            className="font-bold text-xl md:text-2xl text-white relative mb-2 gradient-text"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {vehicle.model}
          </motion.h1>
          
          <p className="font-normal text-sm text-white/80 relative mb-3">
            {vehicle.tagline}
          </p>

          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-2xl font-bold text-white">${vehicle.price}</span>
              <span className="text-white/70 text-sm">{vehicle.priceUnit}</span>
            </div>
            <div className="glass-effect px-2 py-1 rounded text-xs font-medium text-white/80">
              {vehicle.type.toUpperCase()}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="glass-effect flex flex-col items-center p-2 rounded hover:bg-white/5 transition-colors">
              <Battery className="h-4 w-4 text-[#9b87f5] mb-1" />
              <span className="text-xs text-white/70">Range</span>
              <span className="text-sm font-medium text-white">{vehicle.performance.range} mi</span>
            </div>
            <div className="glass-effect flex flex-col items-center p-2 rounded hover:bg-white/5 transition-colors">
              <Gauge className="h-4 w-4 text-[#9b87f5] mb-1" />
              <span className="text-xs text-white/70">Top Speed</span>
              <span className="text-sm font-medium text-white">{vehicle.performance.topSpeed} mph</span>
            </div>
            <div className="glass-effect flex flex-col items-center p-2 rounded hover:bg-white/5 transition-colors">
              <Zap className="h-4 w-4 text-[#9b87f5] mb-1" />
              <span className="text-xs text-white/70">0-60 mph</span>
              <span className="text-sm font-medium text-white">{vehicle.performance.acceleration}s</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-2">
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 border-glass-border bg-glass hover:bg-white/10 text-white button-glow"
              size="sm"
            >
              <Link to={`/vehicles/${vehicle.id}`}>
                View Details
              </Link>
            </Button>
            
            <Button 
              asChild 
              className="flex-1 bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              size="sm"
            >
              <Link to={`/book/${vehicle.id}`} className="flex items-center">
                Rent Now <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedVehicleCard;
