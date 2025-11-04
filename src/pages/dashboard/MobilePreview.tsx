import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSEO } from '@/hooks/useSEO';
import { 
  Smartphone, 
  Home as HomeIcon, 
  Car, 
  MapPin, 
  Calendar,
  User,
  Battery,
  Signal,
  Wifi,
  ChevronLeft
} from 'lucide-react';

type Screen = 'home' | 'vehicles' | 'map' | 'trips' | 'profile';

export default function MobilePreview() {
  useSEO({ title: 'Mobile App Preview | Unity Fleet', description: 'Preview the Unity Fleet mobile experience' });
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [deviceType, setDeviceType] = useState<'ios' | 'android'>('ios');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Good morning, Matthew!</h2>
              <p className="text-sm text-muted-foreground">Ready to experience the future of transportation?</p>
            </div>

            <Card className="p-4 bg-gradient-to-br from-unity-cyan/20 to-unity-purple/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium">Standard Take-Home Plan</p>
                  <Badge className="mt-1" variant="secondary">ACTIVE</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Miles Used</p>
                  <p className="text-2xl font-bold">847</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Miles Remaining</p>
                  <p className="text-2xl font-bold">653</p>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button className="h-24 flex-col gap-2">
                  <Car className="h-6 w-6" />
                  <span className="text-xs">Request Ride</span>
                </Button>
                <Button variant="outline" className="h-24 flex-col gap-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-xs">Schedule Trip</span>
                </Button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Available Vehicles</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <Card className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Tesla Model Y</p>
                    <p className="text-sm text-muted-foreground">Electric Crossover • Pearl White</p>
                  </div>
                  <Badge className="bg-green-500">AVAILABLE</Badge>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'vehicles':
        return (
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">Available Vehicles</h2>
              <p className="text-sm text-muted-foreground">Choose your ride</p>
            </div>
            {['Model Y', 'Model 3', 'Model S'].map((model, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">Tesla {model}</p>
                    <p className="text-sm text-muted-foreground">Electric • 5 Seater</p>
                  </div>
                  <Badge className="bg-green-500">Available</Badge>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Battery className="h-4 w-4" />
                    <span>92%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>2.3 mi away</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'map':
        return (
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Charging Hubs</h2>
              <p className="text-sm text-muted-foreground">Find nearby stations</p>
            </div>
            <div className="h-96 bg-gradient-to-br from-unity-dark-100 to-unity-dark-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-unity-cyan" />
                <p className="text-muted-foreground">Interactive Map View</p>
              </div>
            </div>
          </div>
        );

      case 'trips':
        return (
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">Recent Trips</h2>
              <p className="text-sm text-muted-foreground">Your ride history</p>
            </div>
            <Card className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Downtown Springfield</p>
                  <p className="text-sm text-muted-foreground">Jan 28, 2025 • 12:30 PM</p>
                </div>
                <p className="font-semibold">$12.50</p>
              </div>
            </Card>
          </div>
        );

      case 'profile':
        return (
          <div className="p-6 space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-unity-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-xl font-bold">Matthew Anderson</h2>
              <p className="text-sm text-muted-foreground">matthew@email.com</p>
            </div>
            <Card className="p-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Edit Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Payment Methods
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Subscription
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Settings
              </Button>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mobile App Preview</h1>
          <p className="text-muted-foreground mt-1">Experience the Unity Fleet mobile interface</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={deviceType === 'ios' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setDeviceType('ios')}
          >
            iOS
          </Button>
          <Button
            variant={deviceType === 'android' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setDeviceType('android')}
          >
            Android
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          {/* Phone Frame */}
          <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl">
            <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <Signal className="h-3 w-3" />
                  <Wifi className="h-3 w-3" />
                  <Battery className="h-3 w-3" />
                </div>
              </div>

              {/* Screen Content */}
              <div className="flex-1 overflow-y-auto">
                {renderScreen()}
              </div>

              {/* Bottom Navigation */}
              <div className="border-t border-border bg-background/95 backdrop-blur">
                <div className="flex justify-around py-3">
                  {[
                    { id: 'home' as Screen, icon: HomeIcon, label: 'Home' },
                    { id: 'vehicles' as Screen, icon: Car, label: 'Vehicles' },
                    { id: 'map' as Screen, icon: MapPin, label: 'Map' },
                    { id: 'trips' as Screen, icon: Calendar, label: 'Trips' },
                    { id: 'profile' as Screen, icon: User, label: 'Profile' },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = currentScreen === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentScreen(item.id)}
                        className={`flex flex-col items-center gap-1 ${
                          isActive ? 'text-unity-cyan' : 'text-muted-foreground'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-xs">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Phone Notch (iOS) */}
          {deviceType === 'ios' && (
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Available on iOS & Android
        </p>
      </div>
    </div>
  );
}