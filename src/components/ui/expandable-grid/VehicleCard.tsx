import React from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import { Button } from "@/components/ui/button";

interface VehicleCardProps {
  vehicle: Vehicle;
  id: string;
  onClick: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, id, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${vehicle.id}-${id}`}
      onClick={() => onClick(vehicle)}
      className="glass-card p-5 relative overflow-hidden cursor-pointer hover:bg-glass-highlight transition-all duration-300 group"
    >
      {vehicle.available ? (
        <div className="absolute top-4 right-4 z-10 bg-emerald-500/90 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          Available
        </div>
      ) : (
        <div className="absolute top-4 right-4 z-10 bg-amber-500/90 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          Coming Soon
        </div>
      )}

      <motion.div 
        layoutId={`image-${vehicle.id}-${id}`} 
        className="h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-card/50 to-card-dark/50"
      >
        {vehicle.image ? (
          <img 
            src={vehicle.image} 
            alt={vehicle.model}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="text-muted-foreground text-lg font-medium">
            {vehicle.model}
          </div>
        )}
      </motion.div>

      <motion.h3
        layoutId={`title-${vehicle.id}-${id}`}
        className="text-xl font-bold mb-1 text-foreground"
      >
        {vehicle.model}
      </motion.h3>
      
      <motion.p
        layoutId={`type-${vehicle.id}-${id}`}
        className="mb-2 text-muted-foreground text-sm capitalize"
      >
        {vehicle.type}
      </motion.p>
      
      <motion.p
        layoutId={`price-${vehicle.id}-${id}`}
        className="text-2xl font-bold text-foreground"
      >
        ${vehicle.price}<span className="text-muted-foreground text-sm">{vehicle.priceUnit}</span>
      </motion.p>
      
      <p className="text-muted-foreground/80 text-sm mt-2 mb-4 line-clamp-2">{vehicle.tagline}</p>
      
      <div className="flex justify-center mt-2">
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-all"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
