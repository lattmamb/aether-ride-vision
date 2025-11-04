import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useSEO } from '@/hooks/useSEO';
import { 
  Zap, 
  MapPin, 
  Battery, 
  Clock,
  DollarSign,
  TrendingUp,
  Activity,
  Sun,
  Wind
} from 'lucide-react';
import { ChargingHub, ChargingSession } from '@/types';

const mockHubs: ChargingHub[] = [
  {
    id: 'hub-1',
    name: 'Decatur Hub',
    address: '2457 E Eldorado St, Decatur, IL 62521',
    coordinates: { lat: 39.8403, lng: -88.9548 },
    totalStations: 16,
    availableStations: 8,
    powerOutput: 350,
    amenities: ['Lounge', 'Co-working Space', 'Café', 'EV Shop'],
    operatingHours: '24/7',
    energyDeliveredToday: 2847,
    revenueToday: 5644,
    utilization: 87
  },
  {
    id: 'hub-2',
    name: 'Springfield Hub',
    address: 'Springfield, IL',
    coordinates: { lat: 39.7817, lng: -89.6501 },
    totalStations: 12,
    availableStations: 5,
    powerOutput: 250,
    amenities: ['Lounge', 'Restaurant'],
    operatingHours: '6 AM - 10 PM',
    energyDeliveredToday: 1892,
    revenueToday: 3780,
    utilization: 75
  },
  {
    id: 'hub-3',
    name: 'Champaign Hub',
    address: 'Champaign, IL',
    coordinates: { lat: 40.1164, lng: -88.2434 },
    totalStations: 12,
    availableStations: 9,
    powerOutput: 250,
    amenities: ['Lounge', 'Wi-Fi'],
    operatingHours: '24/7',
    energyDeliveredToday: 1345,
    revenueToday: 2690,
    utilization: 62
  }
];

const mockSessions: ChargingSession[] = [
  {
    id: 'session-1',
    hubId: 'hub-1',
    stationNumber: 3,
    vehicleId: 'model-y-001',
    startTime: new Date(Date.now() - 1800000),
    energyDelivered: 45.2,
    cost: 22.60,
    status: 'active'
  },
  {
    id: 'session-2',
    hubId: 'hub-1',
    stationNumber: 7,
    vehicleId: 'model-3-002',
    startTime: new Date(Date.now() - 3600000),
    energyDelivered: 62.8,
    cost: 31.40,
    status: 'active'
  }
];

export default function ChargingHubs() {
  useSEO({ title: 'Charging Hubs | Unity Fleet', description: 'Manage charging infrastructure and monitor station performance' });
  const [selectedHub, setSelectedHub] = useState<ChargingHub>(mockHubs[0]);

  const totalEnergy = mockHubs.reduce((sum, hub) => sum + hub.energyDeliveredToday, 0);
  const totalRevenue = mockHubs.reduce((sum, hub) => sum + hub.revenueToday, 0);
  const avgUtilization = Math.round(mockHubs.reduce((sum, hub) => sum + hub.utilization, 0) / mockHubs.length);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Charging Hub Management</h1>
          <p className="text-muted-foreground mt-1">Monitor and manage charging infrastructure</p>
        </div>
        <Button className="liquid-glass-hover">
          <Zap className="h-4 w-4 mr-2" />
          Add New Hub
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-unity-cyan/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-unity-cyan" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Sessions</p>
              <p className="text-2xl font-bold">
                {mockSessions.filter(s => s.status === 'active').length}/{mockHubs.reduce((sum, h) => sum + h.totalStations, 0)}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Battery className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Energy Today</p>
              <p className="text-2xl font-bold">{totalEnergy.toLocaleString()} kWh</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Revenue Today</p>
              <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-unity-purple/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-unity-purple" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Utilization</p>
              <p className="text-2xl font-bold">{avgUtilization}%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hub List */}
        <div className="space-y-4">
          <h3 className="font-semibold">Hub Locations</h3>
          {mockHubs.map((hub) => (
            <Card
              key={hub.id}
              className={`p-4 cursor-pointer transition-all hover:border-unity-cyan ${
                selectedHub.id === hub.id ? 'border-unity-cyan bg-unity-cyan/5' : ''
              }`}
              onClick={() => setSelectedHub(hub)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold">{hub.name}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {hub.address}
                  </p>
                </div>
                <Badge variant={hub.utilization > 80 ? "default" : "secondary"}>
                  {hub.utilization}%
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Stations</span>
                  <span className="font-medium">
                    {hub.availableStations}/{hub.totalStations} available
                  </span>
                </div>
                <Progress value={(hub.availableStations / hub.totalStations) * 100} />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Energy Today</p>
                  <p className="font-semibold text-sm">{hub.energyDeliveredToday} kWh</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="font-semibold text-sm">${hub.revenueToday}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Hub Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold">{selectedHub.name}</h3>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" />
                  {selectedHub.address}
                </p>
              </div>
              <Badge className="bg-green-500">Operational</Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Total Stations</p>
                <p className="text-2xl font-bold">{selectedHub.totalStations}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-green-500">{selectedHub.availableStations}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Max Power</p>
                <p className="text-2xl font-bold">{selectedHub.powerOutput} kW</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Utilization Rate</p>
                <Progress value={selectedHub.utilization} className="h-3" />
                <p className="text-right text-sm text-muted-foreground mt-1">
                  {selectedHub.utilization}%
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.amenities.map((amenity, idx) => (
                    <Badge key={idx} variant="secondary">{amenity}</Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-unity-cyan" />
                  <div>
                    <p className="text-xs text-muted-foreground">Operating Hours</p>
                    <p className="font-semibold">{selectedHub.operatingHours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Wind className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Renewable Energy</p>
                    <p className="font-semibold">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Active Charging Sessions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Active Charging Sessions</h3>
            <div className="space-y-3">
              {mockSessions
                .filter(session => session.hubId === selectedHub.id)
                .map((session) => {
                  const duration = Math.floor((Date.now() - session.startTime.getTime()) / 60000);
                  return (
                    <div key={session.id} className="p-4 rounded-lg bg-muted/50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">Station #{session.stationNumber}</p>
                          <p className="text-sm text-muted-foreground">Vehicle: {session.vehicleId}</p>
                        </div>
                        <Badge className="bg-unity-cyan">Active</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Energy</p>
                          <p className="font-semibold">{session.energyDelivered} kWh</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-semibold">{duration} min</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Cost</p>
                          <p className="font-semibold">${session.cost.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {mockSessions.filter(s => s.hubId === selectedHub.id).length === 0 && (
                <p className="text-center text-muted-foreground py-8">No active sessions</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}