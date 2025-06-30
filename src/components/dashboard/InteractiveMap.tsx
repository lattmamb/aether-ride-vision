
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Zap, Clock, Wind, Sun, Leaf } from 'lucide-react';
import Map from '@/components/Map';

interface InteractiveMapProps {
  vehicleLocation: { lat: number; lng: number };
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ vehicleLocation }) => {
  // Illinois-specific charging stations with clean energy data
  const illinoisStations = [
    { 
      name: "Chicago Loop Solar Hub", 
      distance: "0.3 mi", 
      available: 8, 
      total: 12, 
      renewable: 95,
      type: "solar",
      city: "Chicago"
    },
    { 
      name: "Naperville Wind Station", 
      distance: "12.4 mi", 
      available: 15, 
      total: 20, 
      renewable: 100,
      type: "wind",
      city: "Naperville"
    },
    { 
      name: "Millennium Park Hub", 
      distance: "0.8 mi", 
      available: 6, 
      total: 10, 
      renewable: 78,
      type: "mixed",
      city: "Chicago"
    },
    { 
      name: "Oak Park Transit Center", 
      distance: "8.2 mi", 
      available: 11, 
      total: 15, 
      renewable: 88,
      type: "solar",
      city: "Oak Park"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'solar': return <Sun className="w-4 h-4 text-yellow-400" />;
      case 'wind': return <Wind className="w-4 h-4 text-blue-400" />;
      default: return <Zap className="w-4 h-4 text-green-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'solar': return 'border-yellow-400/30 text-yellow-400';
      case 'wind': return 'border-blue-400/30 text-blue-400';
      default: return 'border-green-400/30 text-green-400';
    }
  };

  return (
    <Card className="glass-card overflow-hidden">
      <div className="relative">
        <div className="flex items-center justify-between p-6 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-400" />
              Illinois Clean Transit Network
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70">Live tracking • Chicago Metro Area</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Plan Route
          </Button>
        </div>

        {/* Map Container */}
        <div className="h-[300px] relative">
          <Map
            vehicleLocation={vehicleLocation}
            center={{ lat: 41.8781, lng: -87.6298 }} // Chicago
            zoom={11}
            className="w-full h-full rounded-b-lg"
            showCleanEnergy={true}
          />
          
          {/* Map Overlay Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
              title="Show Transit Hubs"
            >
              <MapPin className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
              title="Clean Energy Stations"
            >
              <Leaf className="w-4 h-4" />
            </Button>
          </div>

          {/* Illinois Renewable Energy Badge */}
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm">
              <Wind className="w-3 h-3 mr-1" />
              94% Renewable Network
            </Badge>
          </div>
        </div>

        {/* Illinois Clean Energy Stations */}
        <div className="p-6 pt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Clean Energy Stations</h3>
            <Badge variant="outline" className="border-blue-400/30 text-blue-400">
              Illinois Network
            </Badge>
          </div>
          <div className="space-y-2">
            {illinoisStations.map((station, index) => (
              <motion.div
                key={station.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-3 rounded-lg flex items-center justify-between hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    {getTypeIcon(station.type)}
                  </div>
                  <div>
                    <div className="font-medium text-white flex items-center gap-2">
                      {station.name}
                      <Badge variant="outline" className={`text-xs ${getTypeColor(station.type)}`}>
                        {station.renewable}% Clean
                      </Badge>
                    </div>
                    <div className="text-sm text-white/70 flex items-center gap-2">
                      <span>{station.distance}</span>
                      <span>•</span>
                      <span>{station.city}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="border-green-400/30 text-green-400 text-xs">
                    {station.available}/{station.total} available
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Illinois Transit Info */}
          <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-1">
              <Clock className="w-4 h-4" />
              Illinois Clean Energy Goals
            </div>
            <div className="text-xs text-white/70">
              Supporting Illinois' commitment to 100% clean energy by 2050 through renewable-powered transit infrastructure.
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InteractiveMap;
