import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useSEO } from '@/hooks/useSEO';
import { 
  Maximize2, 
  RotateCcw, 
  Sun, 
  Moon,
  Zap,
  TrendingUp,
  DollarSign,
  Activity,
  Leaf,
  Coins
} from 'lucide-react';

export default function Hub3DDemo() {
  useSEO({ title: '3D Hub Demo | Unity Fleet', description: 'Interactive 3D visualization of charging hub ecosystem' });
  const [autoOrbit, setAutoOrbit] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [dayMode, setDayMode] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const hubStats = {
    activeSessions: 12,
    totalStations: 16,
    energyToday: 2812,
    carbonOffset: 1.4,
    utilization: 95,
    communityRevenue: 5566,
    uluTokenValue: 129.20
  };

  const hubFeatures = [
    '⚡ 16 Level 3 DC Fast Charging Stations',
    '⚡ Circular Traffic Optimization',
    '⚡ Premium Lounge & Co-working Space',
    '⚡ Integrated Renewable Energy',
    '⚡ Vision AI Analytics Platform',
    '⚡ Autonomous Vehicle Ready',
    '⚡ Community Garden Rooftop',
    '⚡ UnityLink Token Integration'
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Interactive 3D Hub Visualization</h1>
          <p className="text-muted-foreground mt-1">Revolutionary circular charging ecosystem</p>
        </div>
        <Badge className="bg-unity-cyan text-white px-4 py-2">
          <Activity className="h-4 w-4 mr-2" />
          Live Demo
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 3D Viewport */}
        <div className="lg:col-span-3">
          <Card className="p-6 h-[700px] relative overflow-hidden">
            {/* 3D Canvas Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-unity-dark-100 via-unity-dark-200 to-black rounded-lg flex items-center justify-center relative">
              {/* Simulated 3D Scene */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Circular Hub Structure */}
                  <div className={`w-96 h-96 rounded-full border-4 ${dayMode ? 'border-unity-cyan' : 'border-unity-purple'} relative transition-all duration-1000 ${autoOrbit ? 'animate-spin-slow' : ''}`}>
                    {/* Charging Stations */}
                    {[...Array(16)].map((_, i) => {
                      const angle = (i * 360) / 16;
                      const x = Math.cos((angle * Math.PI) / 180) * 180;
                      const y = Math.sin((angle * Math.PI) / 180) * 180;
                      const isActive = i < hubStats.activeSessions;
                      
                      return (
                        <div
                          key={i}
                          className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${
                            isActive ? 'bg-unity-cyan shadow-glow-cyan' : 'bg-gray-600'
                          } ${animations ? 'animate-pulse' : ''}`}
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                          }}
                        />
                      );
                    })}
                    
                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-24 h-24 rounded-full ${dayMode ? 'bg-gradient-to-br from-unity-cyan to-unity-purple' : 'bg-gradient-to-br from-unity-purple to-black'} flex items-center justify-center shadow-2xl`}>
                        <Zap className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Energy Flow Visualization */}
                  {animations && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-unity-cyan opacity-50 animate-ping"
                          style={{
                            left: `${50 + Math.random() * 20 - 10}%`,
                            top: `${50 + Math.random() * 20 - 10}%`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Controls Overlay */}
              <div className="absolute top-4 right-4 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setDayMode(!dayMode)}
                >
                  {dayMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="p-4 bg-background/80 backdrop-blur">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Sessions</p>
                      <p className="text-xl font-bold text-unity-cyan">
                        {hubStats.activeSessions}/{hubStats.totalStations}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Utilization</p>
                      <p className="text-xl font-bold text-green-500">{hubStats.utilization}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Energy Today</p>
                      <p className="text-xl font-bold text-unity-purple">{hubStats.energyToday} kWh</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar Controls & Info */}
        <div className="space-y-6">
          {/* Camera Controls */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Camera Controls</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Auto Orbit</span>
                <Switch checked={autoOrbit} onCheckedChange={setAutoOrbit} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Animations</span>
                <Switch checked={animations} onCheckedChange={setAnimations} />
              </div>
              <Button variant="outline" className="w-full" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset View
              </Button>
              <Button variant="outline" className="w-full" size="sm" onClick={() => setDayMode(!dayMode)}>
                {dayMode ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                {dayMode ? 'Night Mode' : 'Day Mode'}
              </Button>
            </div>
          </Card>

          {/* Real-Time Analytics */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Real-Time Analytics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Energy Delivered</span>
                <span className="font-semibold">{hubStats.energyToday} kWh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Carbon Offset</span>
                <span className="font-semibold text-green-500">{hubStats.carbonOffset} tons CO₂</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Community Revenue</span>
                <span className="font-semibold text-unity-cyan">${hubStats.communityRevenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">ULU Token Value</span>
                <span className="font-semibold text-unity-purple">${hubStats.uluTokenValue}</span>
              </div>
            </div>
          </Card>

          {/* Hub Features */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Hub Features</h3>
            <div className="space-y-2">
              {hubFeatures.map((feature, idx) => (
                <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                  {feature}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Additional Info */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-unity-cyan/20 flex items-center justify-center">
              <Zap className="h-6 w-6 text-unity-cyan" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Stations</p>
              <p className="text-xl font-bold">{hubStats.totalStations}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Leaf className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Renewable Energy</p>
              <p className="text-xl font-bold">100%</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-unity-purple/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-unity-purple" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Peak Efficiency</p>
              <p className="text-xl font-bold">{hubStats.utilization}%</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <Coins className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">UnityLink Integration</p>
              <p className="text-xl font-bold">Active</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}