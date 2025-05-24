
import React from 'react';

interface VehicleHeaderProps {
  title: string;
  subtitle?: string;
}

const VehicleHeader: React.FC<VehicleHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="vehicle-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default VehicleHeader;
