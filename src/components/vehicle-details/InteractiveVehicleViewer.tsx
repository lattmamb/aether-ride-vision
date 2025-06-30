
import React from 'react';
import SmartVehicleViewer from '@/components/ui/SmartVehicleViewer';
import { Vehicle } from '@/types';

interface InteractiveVehicleViewerProps {
  vehicle: Vehicle;
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const InteractiveVehicleViewer: React.FC<InteractiveVehicleViewerProps> = ({
  vehicle,
  selectedColor,
  onColorChange
}) => {
  return (
    <SmartVehicleViewer
      vehicle={vehicle}
      selectedColor={selectedColor}
      onColorChange={onColorChange}
      className="mb-8"
    />
  );
};

export default InteractiveVehicleViewer;
