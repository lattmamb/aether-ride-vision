
import React from 'react';
import { motion } from 'framer-motion';
import Map from '@/components/Map';
import { MapPin, Zap } from 'lucide-react';

const LocationsMapComponent: React.FC = () => {
  const locations = [
    { name: 'Downtown Hub', address: '123 Market St, San Francisco', type: 'pickup', available: true },
    { name: 'Airport Location', address: 'SFO Terminal 1', type: 'pickup', available: true },
    { name: 'North Beach Station', address: '456 Bay St', type: 'charging', available: true },
    { name: 'Mission District', address: '789 Valencia St', type: 'charging', available: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-6">Locations & Charging Stations</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-effect p-4 rounded-lg border border-glass-border"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {location.type === 'pickup' ? (
                    <MapPin className="w-4 h-4 text-[#9b87f5]" />
                  ) : (
                    <Zap className="w-4 h-4 text-tesla-green" />
                  )}
                  <h4 className="font-medium text-white">{location.name}</h4>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  location.available 
                    ? 'bg-tesla-green/20 text-tesla-green' 
                    : 'bg-tesla-red/20 text-tesla-red'
                }`}>
                  {location.available ? 'Available' : 'Full'}
                </span>
              </div>
              <p className="text-sm text-white/70">{location.address}</p>
              <p className="text-xs text-white/50 mt-1 capitalize">{location.type} Location</p>
            </motion.div>
          ))}
        </div>
        
        <div className="h-64 lg:h-auto">
          <Map className="w-full h-full rounded-lg" />
        </div>
      </div>
    </motion.div>
  );
};

export default LocationsMapComponent;
