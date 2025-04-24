
import React from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VehicleHeader } from "./expanded-modal/VehicleHeader";
import { VehicleMetrics } from "./expanded-modal/VehicleMetrics";
import { VehicleFeatures } from "./expanded-modal/VehicleFeatures";

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
          <VehicleHeader vehicle={vehicle} id={id} />
          <VehicleMetrics vehicle={vehicle} />
          <VehicleFeatures features={vehicle.features} />

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
