
import React, { useEffect, useRef } from 'react';
import { ChargingStation } from '../types';

interface MapProps {
  stations?: ChargingStation[];
  vehicleLocation?: { lat: number; lng: number };
  center?: { lat: number; lng: number };
  zoom?: number;
  style?: React.CSSProperties;
  className?: string;
  showCleanEnergy?: boolean;
}

const Map: React.FC<MapProps> = ({ 
  stations = [],
  vehicleLocation,
  center = { lat: 41.8781, lng: -87.6298 }, // Chicago default
  zoom = 10,
  style,
  className = '',
  showCleanEnergy = true
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real app, we would initialize a map library like Mapbox or Google Maps here
    console.log('Illinois Transit Map initializing with:', { center, zoom, stations, vehicleLocation });
  }, [center, zoom, stations, vehicleLocation]);

  // Illinois-specific locations
  const illinoisStations = [
    { name: 'Chicago Downtown Hub', type: 'hybrid', renewable: 85, coordinates: '41.8858, -87.6229' },
    { name: 'Naperville Solar Station', type: 'solar', renewable: 92, coordinates: '41.7508, -88.1535' },
    { name: 'Springfield Wind Farm', type: 'wind', renewable: 100, coordinates: '39.6981, -89.6501' },
    { name: 'Rockford Solar Farm', type: 'solar', renewable: 100, coordinates: '42.2711, -89.0940' },
  ];

  return (
    <div 
      ref={mapRef} 
      className={`glass-card relative overflow-hidden ${className}`} 
      style={{ minHeight: '400px', ...style }}
    >
      {/* Illinois Transit Map */}
      <div className="absolute inset-0 bg-tesla-dark-50 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            <span className="text-2xl">🗺️</span>
            Illinois Clean Transit Network
          </h3>
          <p className="text-white/70 mb-4">
            Interactive map showing clean energy transit hubs across Illinois with real-time renewable energy data.
          </p>
          
          <div className="border border-glass-border rounded-lg p-4 text-left mb-4">
            <div className="text-sm font-medium mb-2 text-green-400">Illinois Network Data:</div>
            <div className="text-xs text-white/70 space-y-1">
              <div><span className="text-blue-400">Center:</span> Chicago, IL ({center.lat.toFixed(4)}, {center.lng.toFixed(4)})</div>
              <div><span className="text-blue-400">Zoom Level:</span> {zoom}</div>
              <div><span className="text-blue-400">Transit Hubs:</span> {illinoisStations.length} stations</div>
              <div><span className="text-blue-400">Avg. Renewable:</span> 94.25%</div>
              {vehicleLocation && (
                <div><span className="text-green-400">Active Vehicle:</span> {vehicleLocation.lat.toFixed(4)}, {vehicleLocation.lng.toFixed(4)}</div>
              )}
            </div>
          </div>

          {showCleanEnergy && (
            <div className="space-y-2">
              <div className="text-sm font-medium text-white mb-2">Clean Energy Stations:</div>
              {illinoisStations.map((station, index) => (
                <div key={index} className="glass-effect p-2 rounded text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      station.type === 'solar' ? 'bg-yellow-400' :
                      station.type === 'wind' ? 'bg-blue-400' : 'bg-green-400'
                    }`} />
                    <span className="text-white">{station.name}</span>
                  </div>
                  <span className="text-green-400">{station.renewable}%</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="glass-effect p-2 rounded text-sm mt-4 bg-blue-500/10 border border-blue-500/20">
            <div className="text-blue-400 font-medium">🌿 Illinois Clean Energy Goal</div>
            <div className="text-xs text-white/70">100% renewable by 2050</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
