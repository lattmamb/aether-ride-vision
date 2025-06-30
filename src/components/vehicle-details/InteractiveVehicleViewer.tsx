
import React from 'react';
import EnhancedVehicleViewer from './EnhancedVehicleViewer';
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
    <EnhancedVehicleViewer
      vehicle={vehicle}
      selectedColor={selectedColor}
      onColorChange={onColorChange}
      className="mb-8"
    />
  );
};

export default InteractiveVehicleViewer;
