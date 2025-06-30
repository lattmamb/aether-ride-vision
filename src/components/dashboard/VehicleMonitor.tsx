
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Battery, MapPin, Thermometer, Zap, AlertTriangle, Car, Settings } from 'lucide-react';

const VehicleMonitor: React.FC = () => {
  const [vehicleData, setVehicleData] = useState({
    batteryLevel: 87,
    range: 298,
    temperature: 72,
    location: 'Downtown SF',
    charging: false,
    locked: true,
    mileage: 12543,
    status: 'active',
    alerts: [
      { id: 1, type: 'maintenance', message: 'Tire rotation due in 500 miles', severity: 'low' },
      { id: 2, type: 'charging', message: 'Charging session completed', severity: 'info' }
    ]
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleData(prev => ({
        ...prev,
        batteryLevel: Math.max(0, Math.min(100, prev.batteryLevel + (Math.random() - 0.5) * 2)),
        range: Math.floor(Math.random() * 20) + 290,
        temperature: Math.floor(Math.random() * 10) + 68
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'maintenance':
        return <Settings className="w-4 h-4" />;
      case 'charging':
        return <Zap className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'info':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card gradient-border-flow p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full gradient-bg-primary flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Vehicle Monitor</h3>
            <p className="text-white/70">Real-time status and alerts</p>
          </div>
        </div>
        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
          Online
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="glass-card p-4 text-center">
          <Battery className={`w-6 h-6 mx-auto mb-2 ${vehicleData.batteryLevel > 20 ? 'text-green-400' : 'text-red-400'}`} />
          <div className="text-2xl font-bold gradient-accent-text">{vehicleData.batteryLevel}%</div>
          <div className="text-xs text-white/60">Battery</div>
        </Card>
        
        <Card className="glass-card p-4 text-center">
          <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-400" />
          <div className="text-2xl font-bold gradient-accent-text">{vehicleData.range}</div>
          <div className="text-xs text-white/60">Miles Range</div>
        </Card>
        
        <Card className="glass-card p-4 text-center">
          <Thermometer className="w-6 h-6 mx-auto mb-2 text-orange-400" />
          <div className="text-2xl font-bold gradient-accent-text">{vehicleData.temperature}°F</div>
          <div className="text-xs text-white/60">Interior</div>
        </Card>
        
        <Card className="glass-card p-4 text-center">
          <Car className="w-6 h-6 mx-auto mb-2 text-purple-400" />
          <div className="text-sm font-bold gradient-accent-text">{vehicleData.location}</div>
          <div className="text-xs text-white/60">Location</div>
        </Card>
      </div>

      {/* Status Overview */}
      <div className="glass-card p-4 mb-6">
        <h4 className="font-medium mb-3">Vehicle Status</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${vehicleData.locked ? 'bg-red-400' : 'bg-green-400'}`}></div>
            <span className="text-sm">{vehicleData.locked ? 'Locked' : 'Unlocked'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${vehicleData.charging ? 'bg-blue-400 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm">{vehicleData.charging ? 'Charging' : 'Not Charging'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm">Engine: {vehicleData.status}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-sm">{vehicleData.mileage.toLocaleString()} miles</span>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {vehicleData.alerts.length > 0 && (
        <div className="space-y-3 mb-6">
          <h4 className="font-medium">Recent Alerts</h4>
          {vehicleData.alerts.map(alert => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`glass-card p-3 flex items-center gap-3 border ${getAlertColor(alert.severity)}`}
            >
              {getAlertIcon(alert.type)}
              <span className="flex-1 text-sm">{alert.message}</span>
              <Badge className={getAlertColor(alert.severity)}>
                {alert.severity}
              </Badge>
            </motion.div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          size="sm"
          className="glass-card hover:bg-glass-highlight border border-blue-500/30"
        >
          <Zap className="w-4 h-4 mr-2" />
          Start Charge
        </Button>
        <Button
          size="sm"
          className="glass-card hover:bg-glass-highlight border border-green-500/30"
        >
          <Car className="w-4 h-4 mr-2" />
          Locate Vehicle
        </Button>
        <Button
          size="sm"
          className="glass-card hover:bg-glass-highlight border border-orange-500/30"
        >
          <Thermometer className="w-4 h-4 mr-2" />
          Climate Control
        </Button>
        <Button
          size="sm"
          className="glass-card hover:bg-glass-highlight border border-purple-500/30"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </motion.div>
  );
};

export default VehicleMonitor;
