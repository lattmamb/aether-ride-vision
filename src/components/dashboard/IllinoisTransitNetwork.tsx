
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Zap } from 'lucide-react';
import PremiumCard from '@/components/ui/PremiumCard';
import InteractiveMap from './InteractiveMap';

interface IllinoisLocation {
  name: string;
  address: string;
  type: 'pickup' | 'charging';
  available: boolean;
  renewable: number;
}

interface IllinoisTransitNetworkProps {
  illinoisLocations: IllinoisLocation[];
  variants: any;
}

const IllinoisTransitNetwork: React.FC<IllinoisTransitNetworkProps> = ({ illinoisLocations, variants }) => {
  return (
    <motion.div variants={variants}>
      <PremiumCard variant="luxury" className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <MapPin className="w-6 h-6 text-blue-400" />
          Illinois Transit Network
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {illinoisLocations.map((location, index) => (
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
                    <Car className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Zap className="w-4 h-4 text-green-400" />
                  )}
                  <h4 className="font-medium text-white">{location.name}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    location.available 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {location.available ? 'Available' : 'Full'}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                    {location.renewable}% Clean
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/70">{location.address}</p>
              <p className="text-xs text-white/50 mt-1 capitalize">{location.type} Station</p>
            </motion.div>
          ))}
        </div>
        <InteractiveMap vehicleLocation={{ lat: 41.8781, lng: -87.6298 }} />
      </PremiumCard>
    </motion.div>
  );
};

export default IllinoisTransitNetwork;
