
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Car, 
  Clock, 
  MapPin, 
  Calendar, 
  Search,
  ChevronRight,
  MessageSquare,
  Battery,
  User
} from 'lucide-react';
import { vehicles } from '@/data/vehicles';
import { motion } from 'framer-motion';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredVehicles = vehicles.slice(0, 3);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        {/* Assistant Header */}
        <motion.div 
          className="mb-10 neon-card p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background glow effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-aether-blue/5 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-aether-blue/5 rounded-full blur-[100px]"></div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-aether-panel-light border border-aether-blue/30 flex items-center justify-center shadow-neon-blue">
                <div className="w-16 h-16 rounded-full bg-aether-blue/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-aether-blue" />
                </div>
              </div>
              <div className="absolute inset-0 w-20 h-20 rounded-full border border-aether-blue/50 animate-pulse-glow"></div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center text-glow mb-2">
            How can I assist you today?
          </h1>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for vehicles, locations, or assistance..."
                className="pl-10 py-6 pr-12 bg-aether-panel-light border-aether-blue/20 text-white/90 rounded-xl focus:border-aether-blue focus:ring-1 focus:ring-aether-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="h-5 w-5 text-aether-blue/70 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 neon-button">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
                Find a vehicle
              </Button>
              <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
                Charging stations
              </Button>
              <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
                Manage booking
              </Button>
              <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
                Support
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Featured Vehicles */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold gradient-blue-text">Featured Vehicles</h2>
            <Link to="/vehicles" className="text-sm text-aether-blue hover:text-aether-blue-light flex items-center gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVehicles.map((vehicle) => (
              <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id}>
                <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 overflow-hidden group">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{vehicle.model}</h3>
                    <p className="text-white/70 text-sm mb-4">{vehicle.tagline}</p>
                    
                    <div className="relative h-44 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={vehicle.image}
                        alt={vehicle.model}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 right-0 bg-aether-panel-light px-3 py-1 rounded-tl text-aether-blue font-semibold">
                        ${vehicle.price}{vehicle.priceUnit}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-aether-blue/20">
                          <Battery className="h-3.5 w-3.5 text-aether-blue" />
                        </div>
                        <span className="text-sm text-white/80">{vehicle.performance.range} mi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-aether-blue/20">
                          <Clock className="h-3.5 w-3.5 text-aether-blue" />
                        </div>
                        <span className="text-sm text-white/80">{vehicle.performance.acceleration}s 0-60</span>
                      </div>
                    </div>
                    
                    <Button className="w-full neon-button">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold gradient-blue-text mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
                <Car className="h-6 w-6 text-aether-blue" />
              </div>
              <h3 className="font-medium text-white mb-2">Browse Vehicles</h3>
              <p className="text-sm text-white/70 mb-4">Explore our premium electric fleet</p>
              <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
                View Fleet
              </Button>
            </Card>
            
            <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
                <Calendar className="h-6 w-6 text-aether-blue" />
              </div>
              <h3 className="font-medium text-white mb-2">Book a Ride</h3>
              <p className="text-sm text-white/70 mb-4">Schedule your next journey</p>
              <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
                Book Now
              </Button>
            </Card>
            
            <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
                <MapPin className="h-6 w-6 text-aether-blue" />
              </div>
              <h3 className="font-medium text-white mb-2">Find Locations</h3>
              <p className="text-sm text-white/70 mb-4">Discover pickup points nearby</p>
              <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
                View Map
              </Button>
            </Card>
            
            <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
                <MessageSquare className="h-6 w-6 text-aether-blue" />
              </div>
              <h3 className="font-medium text-white mb-2">Get Support</h3>
              <p className="text-sm text-white/70 mb-4">We're here to help you</p>
              <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
                Contact Us
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
