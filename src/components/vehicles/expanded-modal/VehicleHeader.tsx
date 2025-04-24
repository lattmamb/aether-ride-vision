
import React from "react";
import { Vehicle } from "@/types";
import { motion } from "framer-motion";

interface VehicleHeaderProps {
  vehicle: Vehicle;
  id: string;
}

export const VehicleHeader: React.FC<VehicleHeaderProps> = ({ vehicle, id }) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <motion.h3
          layoutId={`title-${vehicle.id}-${id}`}
          className="text-2xl font-bold text-white mb-1"
        >
          {vehicle.model}
        </motion.h3>
        <motion.p
          layoutId={`type-${vehicle.id}-${id}`}
          className="text-white/70"
        >
          {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)} • {vehicle.available ? "Available" : "Coming Soon"}
        </motion.p>
      </div>

      <div className="text-right">
        <motion.p
          layoutId={`price-${vehicle.id}-${id}`}
          className="text-2xl font-bold text-white"
        >
          ${vehicle.price}
        </motion.p>
        <span className="text-white/70 text-sm">{vehicle.priceUnit}</span>
      </div>
    </div>
  );
};
