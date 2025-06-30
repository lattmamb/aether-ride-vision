
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle, AlertCircle, Car } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AvailabilityTrackerProps {
  vehicleId: string;
  vehicleModel: string;
}

const AvailabilityTracker: React.FC<AvailabilityTrackerProps> = ({ vehicleId, vehicleModel }) => {
  const [selectedLocation, setSelectedLocation] = useState('downtown');
  const [realTimeData, setRealTimeData] = useState({
    lastUpdated: new Date(),
    totalAvailable: 8,
    reserved: 3
  });

  const locations = [
    {
      id: 'downtown',
      name: 'Downtown Hub',
      address: '123 Main St, Downtown',
      available: 3,
      total: 5,
      distance: '2.1 mi',
      estimatedPickup: '15 min',
      status: 'available'
    },
    {
      id: 'airport',
      name: 'Airport Terminal',
      address: '456 Airport Blvd, Terminal A',
      available: 2,
      total: 4,
      distance: '8.5 mi',
      estimatedPickup: '35 min',
      status: 'available'
    },
    {
      id: 'westside',
      name: 'Westside Center',
      address: '789 West Ave, Westside',
      available: 0,
      total: 3,
      distance: '4.2 mi',
      estimatedPickup: 'N/A',
      status: 'full'
    },
    {
      id: 'marina',
      name: 'Marina District',
      address: '321 Marina Dr, Marina',
      available: 3,
      total: 4,
      distance: '3.8 mi',
      estimatedPickup: '20 min',
      status: 'available'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        lastUpdated: new Date(),
        totalAvailable: Math.max(5, Math.floor(Math.random() * 12) + 5),
        reserved: Math.floor(Math.random() * 5) + 1
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation);

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Real-Time Availability</h3>
          <p className="text-white/70 text-sm">
            Last updated: {realTimeData.lastUpdated.toLocaleTimeString()}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-tesla-green">
            {realTimeData.totalAvailable}
          </div>
          <div className="text-sm text-white/70">Available Now</div>
        </div>
      </div>

      {/* Location Selector */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-white">Select Location</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {locations.map(location => (
            <motion.div
              key={location.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedLocation === location.id
                  ? 'border-[#9b87f5] bg-[#9b87f5]/10'
                  : 'border-glass-border hover:border-white/30'
              }`}
              onClick={() => setSelectedLocation(location.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#9b87f5] mr-2" />
                  <span className="font-medium text-white">{location.name}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    location.status === 'available'
                      ? 'text-tesla-green border-tesla-green'
                      : 'text-tesla-red border-tesla-red'
                  }`}
                >
                  {location.status === 'available' ? (
                    <CheckCircle className="w-3 h-3 mr-1" />
                  ) : (
                    <AlertCircle className="w-3 h-3 mr-1" />
                  )}
                  {location.available}/{location.total} Available
                </Badge>
              </div>
              <p className="text-sm text-white/70 mb-2">{location.address}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">{location.distance}</span>
                <span className="text-white/70">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {location.estimatedPickup}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Location Details */}
      {selectedLocationData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 rounded-lg mb-6"
        >
          <h4 className="font-semibold mb-3 text-white flex items-center">
            <Car className="w-4 h-4 mr-2" />
            {selectedLocationData.name} Details
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white/70">Available Units:</span>
              <span className="text-white font-medium ml-2">
                {selectedLocationData.available} {vehicleModel}
              </span>
            </div>
            <div>
              <span className="text-white/70">Est. Pickup:</span>
              <span className="text-white font-medium ml-2">
                {selectedLocationData.estimatedPickup}
              </span>
            </div>
            <div>
              <span className="text-white/70">Distance:</span>
              <span className="text-white font-medium ml-2">
                {selectedLocationData.distance}
              </span>
            </div>
            <div>
              <span className="text-white/70">Status:</span>
              <Badge
                variant="outline"
                className={`ml-2 ${
                  selectedLocationData.status === 'available'
                    ? 'text-tesla-green border-tesla-green'
                    : 'text-tesla-red border-tesla-red'
                }`}
              >
                {selectedLocationData.status}
              </Badge>
            </div>
          </div>
        </motion.div>
      )}

      {/* Alert Setup */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 border-glass-border text-white hover:bg-white/10"
        >
          Set Availability Alert
        </Button>
        <Button
          className="flex-1 bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
          disabled={!selectedLocationData || selectedLocationData.available === 0}
        >
          Reserve at {selectedLocationData?.name}
        </Button>
      </div>
    </div>
  );
};

export default AvailabilityTracker;
