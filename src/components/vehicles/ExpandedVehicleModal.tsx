
import React from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import { Link } from "react-router-dom";
import { Battery, Gauge, Zap, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpandedVehicleModalProps {
  vehicle: Vehicle;
  id: string;
  onClose: () => void;
}

export const ExpandedVehicleModal: React.FC<ExpandedVehicleModalProps> = ({
  vehicle,
  id,
  onClose,
}) => {
  return (
    <>
      <motion.button
        key={`button-${vehicle.model}-${id}`}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex absolute top-4 right-4 items-center justify-center glass-effect rounded-full h-8 w-8"
        onClick={onClose}
      >
        <X className="h-4 w-4 text-white" />
      </motion.button>
      <motion.div
        layoutId={`card-${vehicle.id}-${id}`}
        className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col glass-card overflow-hidden"
      >
        <motion.div layoutId={`image-${vehicle.id}-${id}`}>
          <img
            src={vehicle.image}
            alt={vehicle.model}
            className="w-full h-80 object-contain p-4"
          />
        </motion.div>

        <div className="p-6">
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

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="glass-effect flex flex-col items-center p-3 rounded">
              <Battery className="h-5 w-5 text-tesla-blue mb-1" />
              <span className="text-xs text-white/70">Range</span>
              <span className="text-sm font-medium text-white">{vehicle.performance.range} mi</span>
            </div>
            <div className="glass-effect flex flex-col items-center p-3 rounded">
              <Gauge className="h-5 w-5 text-tesla-blue mb-1" />
              <span className="text-xs text-white/70">Top Speed</span>
              <span className="text-sm font-medium text-white">{vehicle.performance.topSpeed} mph</span>
            </div>
            <div className="glass-effect flex flex-col items-center p-3 rounded">
              <Zap className="h-5 w-5 text-tesla-blue mb-1" />
              <span className="text-xs text-white/70">0-60 mph</span>
              <span className="text-sm font-medium text-white">{vehicle.performance.acceleration}s</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium text-white mb-3">Key Features</h4>
            <ul className="space-y-2">
              {vehicle.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-tesla-blue/20 text-tesla-blue">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 border-glass-border bg-glass hover:bg-glass-highlight text-white"
            >
              <Link to={`/vehicles/${vehicle.id}`}>
                View Details
              </Link>
            </Button>
            
            <Button 
              asChild 
              className="flex-1 bg-tesla-blue hover:bg-tesla-blue/90 text-white"
              disabled={!vehicle.available}
            >
              <Link to={`/book/${vehicle.id}`}>
                {vehicle.available ? "Rent Now" : "Coming Soon"}
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
