
import React from "react";
import { Battery, Gauge, Zap } from "lucide-react";

interface VehiclePerformanceStatsProps {
  performance: {
    range: number;
    topSpeed: number;
    acceleration: number;
  };
}

const VehiclePerformanceStats: React.FC<VehiclePerformanceStatsProps> = ({ performance }) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <div className="glass-effect flex flex-col items-center p-3 rounded">
        <Battery className="h-5 w-5 text-tesla-blue mb-1" />
        <span className="text-xs text-white/70">Range</span>
        <span className="text-sm font-medium text-white">{performance.range} mi</span>
      </div>
      <div className="glass-effect flex flex-col items-center p-3 rounded">
        <Gauge className="h-5 w-5 text-tesla-blue mb-1" />
        <span className="text-xs text-white/70">Top Speed</span>
        <span className="text-sm font-medium text-white">{performance.topSpeed} mph</span>
      </div>
      <div className="glass-effect flex flex-col items-center p-3 rounded">
        <Zap className="h-5 w-5 text-tesla-blue mb-1" />
        <span className="text-xs text-white/70">0-60 mph</span>
        <span className="text-sm font-medium text-white">{performance.acceleration}s</span>
      </div>
    </div>
  );
};

export default VehiclePerformanceStats;
