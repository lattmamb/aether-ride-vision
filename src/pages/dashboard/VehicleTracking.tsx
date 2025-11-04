import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSEO } from '@/hooks/useSEO';
import { 
  Search, 
  Filter, 
  Download, 
  MapPin, 
  Navigation2, 
  Battery, 
  Zap,
  AlertCircle,
  CheckCircle,
  Wrench
} from 'lucide-react';
import { VehicleLocation } from '@/types';

const mockVehicleLocations: VehicleLocation[] = [
  {
    vehicleId: 'model-y-001',
    vehicleName: 'Model Y #001',
    latitude: 39.8403,
    longitude: -88.9548,
    heading: 45,
    speed: 35,
    batteryLevel: 78,
    status: 'active',
    lastUpdate: new Date(),
    driverId: 'driver-123'
  },
  {
    vehicleId: 'model-3-002',
    vehicleName: 'Model 3 #002',
    latitude: 39.7817,
    longitude: -89.6501,
    heading: 180,
    speed: 0,
    batteryLevel: 92,
    status: 'charging',
    lastUpdate: new Date(),
  },
  {
    vehicleId: 'model-s-003',
    vehicleName: 'Model S #003',
    latitude: 40.1164,
    longitude: -88.2434,
    heading: 270,
    speed: 0,
    batteryLevel: 100,
    status: 'available',
    lastUpdate: new Date(),
  },
  {
    vehicleId: 'model-x-004',
    vehicleName: 'Model X #004',
    latitude: 39.8403,
    longitude: -88.8000,
    heading: 90,
    speed: 0,
    batteryLevel: 45,
    status: 'maintenance',
    lastUpdate: new Date(),
  },
];

const statusConfig = {
  active: { color: 'bg-unity-cyan', icon: Navigation2, label: 'Active' },
  available: { color: 'bg-green-500', icon: CheckCircle, label: 'Available' },
  charging: { color: 'bg-yellow-500', icon: Zap, label: 'Charging' },
  maintenance: { color: 'bg-orange-500', icon: Wrench, label: 'Maintenance' }
};

export default function VehicleTracking() {
  useSEO({ title: 'Vehicle Tracking | Unity Fleet', description: 'Real-time vehicle tracking and fleet monitoring' });
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicles, setVehicles] = useState(mockVehicleLocations);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleLocation | null>(null);
  const [showLayers, setShowLayers] = useState({
    routes: true,
    hubs: true,
    traffic: false,
    serviceAreas: true
  });

  const filteredVehicles = vehicles.filter(v => {
    const matchesStatus = selectedStatus === 'all' || v.status === selectedStatus;
    const matchesSearch = v.vehicleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.vehicleId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusCounts = {
    all: vehicles.length,
    active: vehicles.filter(v => v.status === 'active').length,
    available: vehicles.filter(v => v.status === 'available').length,
    charging: vehicles.filter(v => v.status === 'charging').length,
    maintenance: vehicles.filter(v => v.status === 'maintenance').length,
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Real-Time Vehicle Tracking</h1>
          <p className="text-muted-foreground mt-1">Monitor fleet location and status in real-time</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Status Filter Badges */}
      <div className="flex gap-2 flex-wrap">
        {['all', 'active', 'available', 'charging', 'maintenance'].map((status) => (
          <Badge
            key={status}
            variant={selectedStatus === status ? "default" : "outline"}
            className="cursor-pointer capitalize px-4 py-2"
            onClick={() => setSelectedStatus(status)}
          >
            {status} ({statusCounts[status as keyof typeof statusCounts]})
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map View */}
        <div className="lg:col-span-2">
          <Card className="p-6 h-[600px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Fleet Map</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Center Map</Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Layers
                </Button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-unity-dark-100 to-unity-dark-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-unity-cyan" />
                <p className="text-muted-foreground">Interactive map view</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Showing {filteredVehicles.length} vehicles
                </p>
              </div>
              
              {/* Simulated vehicle markers */}
              {filteredVehicles.slice(0, 4).map((vehicle, idx) => (
                <div
                  key={vehicle.vehicleId}
                  className="absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  style={{
                    left: `${20 + idx * 20}%`,
                    top: `${30 + idx * 15}%`,
                    backgroundColor: statusConfig[vehicle.status].color.replace('bg-', 'rgb(var(--') + '))'
                  }}
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <Navigation2 className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Vehicle List & Details */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Vehicle List */}
          <div className="space-y-2 max-h-[540px] overflow-y-auto">
            {filteredVehicles.map((vehicle) => {
              const StatusIcon = statusConfig[vehicle.status].icon;
              const isSelected = selectedVehicle?.vehicleId === vehicle.vehicleId;
              
              return (
                <Card
                  key={vehicle.vehicleId}
                  className={`p-4 cursor-pointer transition-all hover:border-unity-cyan ${
                    isSelected ? 'border-unity-cyan bg-unity-cyan/5' : ''
                  }`}
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <StatusIcon className="h-4 w-4" />
                      <h4 className="font-semibold">{vehicle.vehicleName}</h4>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {statusConfig[vehicle.status].label}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Battery className="h-3 w-3" />
                      <span>{vehicle.batteryLevel}%</span>
                    </div>
                    {vehicle.speed > 0 && (
                      <div className="flex items-center gap-2">
                        <Navigation2 className="h-3 w-3" />
                        <span>{vehicle.speed} mph</span>
                      </div>
                    )}
                    <div className="text-xs">
                      Updated: {vehicle.lastUpdate.toLocaleTimeString()}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Vehicle Details */}
      {selectedVehicle && (
        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">{selectedVehicle.vehicleName}</h3>
              <p className="text-sm text-muted-foreground">ID: {selectedVehicle.vehicleId}</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setSelectedVehicle(null)}>
              Close
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-semibold capitalize">{selectedVehicle.status}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Battery</p>
              <p className="font-semibold">{selectedVehicle.batteryLevel}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Speed</p>
              <p className="font-semibold">{selectedVehicle.speed} mph</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Heading</p>
              <p className="font-semibold">{selectedVehicle.heading}°</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}