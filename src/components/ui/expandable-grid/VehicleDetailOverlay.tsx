
import React from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VehiclePerformanceStats from "./VehiclePerformanceStats";
import VehicleFeatures from "./VehicleFeatures";

interface VehicleDetailOverlayProps {
  active: Vehicle | null;
  id: string;
  onClose: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

const VehicleDetailOverlay: React.FC<VehicleDetailOverlayProps> = ({ 
  active, 
  id, 
  onClose,
  ref 
}) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 grid place-items-center z-[100]">
      <motion.button
        key={`button-${active.model}-${id}`}
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
        layoutId={`card-${active.id}-${id}`}
        ref={ref}
        className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col glass-card overflow-hidden"
      >
        <motion.div layoutId={`image-${active.id}-${id}`}>
          <div className="w-full h-80 flex items-center justify-center p-4 bg-glass-highlight/20">
            <div className="text-white/50 text-lg">
              [Vehicle Image]
            </div>
          </div>
        </motion.div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <motion.h3
                layoutId={`title-${active.id}-${id}`}
                className="text-2xl font-bold text-white mb-1"
              >
                {active.model}
              </motion.h3>
              <motion.p
                layoutId={`type-${active.id}-${id}`}
                className="text-white/70"
              >
                {active.type.charAt(0).toUpperCase() + active.type.slice(1)} • {active.available ? "Available" : "Coming Soon"}
              </motion.p>
            </div>

            <div className="text-right">
              <motion.p
                layoutId={`price-${active.id}-${id}`}
                className="text-2xl font-bold text-white"
              >
                ${active.price}
              </motion.p>
              <span className="text-white/70 text-sm">{active.priceUnit}</span>
            </div>
          </div>

          <VehiclePerformanceStats performance={active.performance} />
          <VehicleFeatures features={active.features} />

          <div className="flex gap-3">
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 border-glass-border bg-glass hover:bg-glass-highlight text-white"
            >
              <Link to={`/vehicles/${active.id}`}>
                View Details
              </Link>
            </Button>
            
            <Button 
              asChild 
              className="flex-1 bg-tesla-blue hover:bg-tesla-blue/90 text-white"
              disabled={!active.available}
            >
              <Link to={`/book/${active.id}`}>
                {active.available ? "Rent Now" : "Coming Soon"}
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleDetailOverlay;
