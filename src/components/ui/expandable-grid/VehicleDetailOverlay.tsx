
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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex absolute top-4 right-4 items-center justify-center bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full h-10 w-10 z-20 border border-white/30 transition-all"
        onClick={onClose}
        aria-label="Close details"
      >
        <X className="h-5 w-5 text-white drop-shadow-lg" />
      </motion.button>
      <motion.div
        layoutId={`card-${active.id}-${id}`}
        ref={ref}
        className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col glass-card overflow-hidden"
      >
        <motion.div layoutId={`image-${active.id}-${id}`} className="relative">
          <div className="w-full h-80 flex items-center justify-center p-8 bg-gradient-to-br from-card via-card-dark to-card">
            {active.image ? (
              <img 
                src={active.image} 
                alt={active.model}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="text-muted-foreground text-lg">
                {active.model}
              </div>
            )}
          </div>
          {active.available && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-4 status-success px-3 py-1.5 rounded-full backdrop-blur-sm"
            >
              Available Now
            </motion.div>
          )}
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

          <div className="flex gap-3 mt-6">
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 border-primary/30 bg-card hover:bg-primary/10 text-foreground hover:text-primary transition-all hover:border-primary/50"
            >
              <Link to={`/vehicles/${active.id}`} className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                View Details
              </Link>
            </Button>
            
            <Button 
              asChild 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all"
              disabled={!active.available}
            >
              <Link to={`/vehicles/${active.id}/plan`} className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                {active.available ? "Book Now" : "Coming Soon"}
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleDetailOverlay;
