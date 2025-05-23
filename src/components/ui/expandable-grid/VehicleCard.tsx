
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
      className="glass-card p-5 relative overflow-hidden cursor-pointer hover:bg-glass-highlight transition-all duration-300"
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

      <motion.div layoutId={`image-${vehicle.id}-${id}`} className="h-40 flex items-center justify-center mb-4">
        <div className="text-white/50 text-center">
          [Vehicle Image]
        </div>
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
