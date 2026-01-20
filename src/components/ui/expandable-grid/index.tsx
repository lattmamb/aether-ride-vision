import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Vehicle } from "@/types";
import VehicleCard from "./VehicleCard";
import VehicleDetailOverlay from "./VehicleDetailOverlay";

interface ExpandableVehiclesGridProps {
  vehicles: Vehicle[];
}

export default function ExpandableVehiclesGrid({ vehicles }: ExpandableVehiclesGridProps) {
  const [active, setActive] = useState<Vehicle | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-[90]"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>
      
      {/* Vehicle detail overlay */}
      <AnimatePresence>
        {active ? (
          <VehicleDetailOverlay 
            active={active} 
            id={id} 
            onClose={() => setActive(null)} 
            ref={ref}
          />
        ) : null}
      </AnimatePresence>
      
      {/* Vehicle grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard 
            key={vehicle.id}
            vehicle={vehicle}
            id={id}
            onClick={setActive}
          />
        ))}
      </div>
    </>
  );
}
