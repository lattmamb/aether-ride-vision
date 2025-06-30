
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Zap, Clock } from 'lucide-react';
import Map from '@/components/Map';

interface InteractiveMapProps {
  vehicleLocation: { lat: number; lng: number };
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ vehicleLocation }) => {
  const nearbyStations = [
    { name: "Supercharger Station A", distance: "0.3 mi", available: 8 },
    { name: "Supercharger Station B", distance: "0.7 mi", available: 12 },
    { name: "Destination Charger", distance: "1.2 mi", available: 4 }
  ];

  return (
    <Card className="glass-card overflow-hidden">
      <div className="relative">
        <div className="flex items-center justify-between p-6 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Vehicle Location</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70">Live tracking • Updated 2 min ago</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Navigate
          </Button>
        </div>

        {/* Map Container */}
        <div className="h-[300px] relative">
          <Map
            vehicleLocation={vehicleLocation}
            className="w-full h-full rounded-b-lg"
          />
          
          {/* Map Overlay Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
            >
              <MapPin className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
            >
              <Zap className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Nearby Charging Stations */}
        <div className="p-6 pt-4">
          <h3 className="text-lg font-semibold text-white mb-3">Nearby Charging</h3>
          <div className="space-y-2">
            {nearbyStations.map((station, index) => (
              <motion.div
                key={station.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-3 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div>
                    <div className="font-medium text-white">{station.name}</div>
                    <div className="text-sm text-white/70">{station.distance}</div>
                  </div>
                </div>
                <Badge variant="outline" className="border-green-400/30 text-green-400">
                  {station.available} available
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InteractiveMap;
