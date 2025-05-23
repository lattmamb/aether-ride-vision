
import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface VehicleFeaturesListProps {
  features: string[];
  vehicleId: string;
}

export const VehicleFeaturesList: React.FC<VehicleFeaturesListProps> = ({ features, vehicleId }) => {
  return (
    <motion.div 
      className="mt-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-[#9b87f5] text-lg mb-2 flex items-center">
        <BadgeCheck className="w-4 h-4 mr-1" /> Key Features
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-2">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="text-neutral-300 flex items-center"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
          >
            <span className="text-[#9b87f5] mr-2">•</span> {feature}
          </motion.li>
        ))}
      </ul>
      
      <div className="mt-6 flex justify-center">
        <Button asChild className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
          <Link to={`/vehicles/${vehicleId}`} className="flex items-center">
            View Details <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default VehicleFeaturesList;
