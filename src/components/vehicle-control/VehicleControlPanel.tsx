
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Car, 
  Lock, 
  Unlock, 
  Thermometer, 
  Battery, 
  MapPin, 
  Zap,
  Volume2,
  Lightbulb,
  Settings
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface VehicleStatus {
  locked: boolean;
  temperature: number;
  batteryLevel: number;
  range: number;
  location: string;
  charging: boolean;
}

const VehicleControlPanel: React.FC = () => {
  const [vehicleStatus, setVehicleStatus] = useState<VehicleStatus>({
    locked: true,
    temperature: 72,
    batteryLevel: 87,
    range: 298,
    location: 'Downtown SF',
    charging: false
  });

  const [temperature, setTemperature] = useState([72]);
  const [volume, setVolume] = useState([50]);

  const toggleLock = () => {
    setVehicleStatus(prev => ({ ...prev, locked: !prev.locked }));
  };

  const toggleCharging = () => {
    setVehicleStatus(prev => ({ ...prev, charging: !prev.charging }));
  };

  const controlButtons = [
    {
      icon: vehicleStatus.locked ? Lock : Unlock,
      label: vehicleStatus.locked ? 'Locked' : 'Unlocked',
      action: toggleLock,
      color: vehicleStatus.locked ? 'text-red-400' : 'text-green-400'
    },
    {
      icon: Zap,
      label: vehicleStatus.charging ? 'Charging' : 'Start Charge',
      action: toggleCharging,
      color: vehicleStatus.charging ? 'text-blue-400' : 'text-white'
    },
    {
      icon: Lightbulb,
      label: 'Flash Lights',
      action: () => console.log('Flash lights'),
      color: 'text-yellow-400'
    },
    {
      icon: Volume2,
      label: 'Honk Horn',
      action: () => console.log('Honk horn'),
      color: 'text-purple-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card gradient-border-flow p-6 rounded-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-purple-text">Vehicle Control</h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Connected</span>
          </div>
        </div>

        {/* Vehicle Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="glass-card p-4 text-center">
            <Battery className="w-6 h-6 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold gradient-accent-text">{vehicleStatus.batteryLevel}%</div>
            <div className="text-xs text-white/60">Battery</div>
          </Card>
          
          <Card className="glass-card p-4 text-center">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold gradient-accent-text">{vehicleStatus.range}</div>
            <div className="text-xs text-white/60">Miles Range</div>
          </Card>
          
          <Card className="glass-card p-4 text-center">
            <Thermometer className="w-6 h-6 mx-auto mb-2 text-orange-400" />
            <div className="text-2xl font-bold gradient-accent-text">{vehicleStatus.temperature}°F</div>
            <div className="text-xs text-white/60">Interior</div>
          </Card>
          
          <Card className="glass-card p-4 text-center">
            <Car className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <div className="text-sm font-bold gradient-accent-text">{vehicleStatus.location}</div>
            <div className="text-xs text-white/60">Location</div>
          </Card>
        </div>

        {/* Quick Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {controlButtons.map((button, index) => (
            <motion.div
              key={button.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={button.action}
                className="w-full h-20 flex flex-col items-center gap-2 glass-card hover:bg-glass-highlight border-glass-border"
              >
                <button.icon className={`w-6 h-6 ${button.color}`} />
                <span className="text-xs">{button.label}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Climate Controls */}
        <div className="glass-card p-4 rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-4">Climate Control</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-white/70 mb-2 block">Temperature: {temperature[0]}°F</label>
              <Slider
                value={temperature}
                onValueChange={setTemperature}
                max={85}
                min={60}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm text-white/70 mb-2 block">Fan Speed: {volume[0]}%</label>
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                min={0}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Service Integration */}
        <div className="glass-card p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Service Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button className="glass-card hover:bg-glass-highlight border border-green-500/30">
              <Car className="w-4 h-4 mr-2" />
              Uber Mode
            </Button>
            <Button className="glass-card hover:bg-glass-highlight border border-red-500/30">
              <MapPin className="w-4 h-4 mr-2" />
              DoorDash Mode
            </Button>
            <Button className="glass-card hover:bg-glass-highlight border border-purple-500/30">
              <Settings className="w-4 h-4 mr-2" />
              Service Settings
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleControlPanel;
