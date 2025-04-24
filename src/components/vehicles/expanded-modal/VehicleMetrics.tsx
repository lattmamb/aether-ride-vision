
import React from "react";
import { Vehicle } from "@/types";
import { Battery, Gauge, Zap } from "lucide-react";

interface VehicleMetricsProps {
  vehicle: Vehicle;
}

export const VehicleMetrics: React.FC<VehicleMetricsProps> = ({ vehicle }) => {
  return (
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
  );
};
