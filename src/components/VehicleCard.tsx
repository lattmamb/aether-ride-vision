
import React from "react";
import { Vehicle } from "../types";
import EnhancedVehicleCard from "@/components/ui/enhanced-vehicle-card";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return <EnhancedVehicleCard vehicle={vehicle} />;
};

export default VehicleCard;
