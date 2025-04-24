
import React from "react";
import { Check } from "lucide-react";

interface VehicleFeaturesProps {
  features: string[];
}

export const VehicleFeatures: React.FC<VehicleFeaturesProps> = ({ features }) => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium text-white mb-3">Key Features</h4>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-tesla-blue/20 text-tesla-blue">
              <Check className="h-3 w-3" />
            </div>
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
