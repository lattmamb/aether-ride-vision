import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Map from '@/components/Map';
import HolographicVehicleShowcase from '@/components/dashboard/HolographicVehicleShowcase';
import TestimonialsCarousel from '@/components/dashboard/TestimonialsCarousel';
import TechnologyPreview from '@/components/dashboard/TechnologyPreview';
import AnimatedStats from '@/components/dashboard/AnimatedStats';
import { vehicles } from '@/data/vehicles';
import { Car, Calendar, Gauge, Battery, MapPin, CreditCard, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  // This would be actual user data in a real application
  const activeVehicle = vehicles[0];
  const subscriptionProgress = 40; // 40% of current subscription period
  const remainingMiles = 750;
  const totalMiles = 1500;
  const remainingDays = 18;
  
  // Mock upcoming reservation
  const upcomingReservation = {
    id: 'res-123',
    vehicleId: 'model-y',
    vehicle: vehicles.find(v => v.id === 'model-y'),
    startDate: '2025-04-15T10:00:00',
    endDate: '2025-04-22T18:00:00',
    pickupLocation: 'San Francisco Downtown',
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 mt-14 md:mt-20">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-white/70 text-xl">Welcome to the future of electric mobility</p>
        </motion.div>

        {/* Animated Stats Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedStats />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Holographic Vehicle Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass-card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold gradient-text">Current Vehicle</h2>
                  <Button variant="outline" className="bg-glass border-glass-border hover:bg-glass-highlight text-white">
                    View Details
                  </Button>
                </div>

                <HolographicVehicleShowcase vehicle={activeVehicle} />

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Subscription</span>
                      <span className="font-medium">{remainingDays} days left</span>
                    </div>
                    <Progress value={subscriptionProgress} className="h-2 bg-glass" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70">Mileage</span>
                      <span className="font-medium">{remainingMiles} / {totalMiles} miles</span>
                    </div>
                    <Progress value={(remainingMiles / totalMiles) * 100} className="h-2 bg-glass" />
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Testimonials Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass-card p-6">
                <h2 className="text-3xl font-bold gradient-text mb-6">What Our Drivers Say</h2>
                <TestimonialsCarousel />
              </Card>
            </motion.div>
            
            {/* Vehicle Location */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Vehicle Location</h2>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-tesla-green"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-white/70">Updated 5 minutes ago</span>
                  </div>
                </div>
                
                <Map 
                  vehicleLocation={{ lat: 37.7749, lng: -122.4194 }}
                  className="w-full h-[300px]"
                />
              </Card>
            </motion.div>
            
            {/* Activity & Trips */}
            <Card className="glass-card p-6">
              <Tabs defaultValue="upcoming">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Reservations</h2>
                  <TabsList className="glass-effect">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="upcoming">
                  {upcomingReservation.vehicle && (
                    <div className="glass-effect p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-1">
                          <div className="h-24 flex items-center justify-center">
                            <img
                              src={upcomingReservation.vehicle.image}
                              alt={upcomingReservation.vehicle.model}
                              className="h-full object-contain"
                            />
                          </div>
                        </div>
                        
                        <div className="md:col-span-3 flex flex-col justify-center">
                          <h3 className="font-bold mb-2">{upcomingReservation.vehicle.model}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-tesla-blue" />
                              <span>
                                {new Date(upcomingReservation.startDate).toLocaleDateString()} - 
                                {new Date(upcomingReservation.endDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-tesla-blue" />
                              <span>{upcomingReservation.pickupLocation}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-tesla-blue hover:bg-tesla-blue/90 text-white text-xs h-8">
                                Manage
                              </Button>
                              <Button size="sm" variant="outline" className="border-glass-border bg-glass hover:bg-glass-highlight text-xs h-8 text-white">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-3 text-center text-white/70 text-sm">
                    No other upcoming reservations
                  </div>
                </TabsContent>
                
                <TabsContent value="past">
                  <div className="text-center py-8 text-white/70">
                    No past reservations found
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Subscription Info */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Subscription Details</h2>
              
              <div className="space-y-4">
                <div className="glass-effect p-3 rounded-lg flex items-center gap-3">
                  <div className="p-2 rounded-full bg-tesla-blue/20">
                    <Car className="h-5 w-5 text-tesla-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Current Plan</div>
                    <div className="font-medium">Premium 6-Month</div>
                  </div>
                </div>
                
                <div className="glass-effect p-3 rounded-lg flex items-center gap-3">
                  <div className="p-2 rounded-full bg-tesla-blue/20">
                    <Calendar className="h-5 w-5 text-tesla-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Renewal Date</div>
                    <div className="font-medium">May 21, 2025</div>
                  </div>
                </div>
                
                <div className="glass-effect p-3 rounded-lg flex items-center gap-3">
                  <div className="p-2 rounded-full bg-tesla-blue/20">
                    <CreditCard className="h-5 w-5 text-tesla-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Payment Method</div>
                    <div className="font-medium">•••• •••• •••• 4242</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full glass-effect hover:bg-glass-highlight text-white">
                  Manage Subscription
                </Button>
              </div>
            </Card>
            
            {/* Quick Actions */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-glass-border bg-glass hover:bg-glass-highlight text-white">
                  <Car className="mr-2 h-5 w-5" /> Switch Vehicle
                </Button>
                <Button variant="outline" className="w-full justify-start border-glass-border bg-glass hover:bg-glass-highlight text-white">
                  <Calendar className="mr-2 h-5 w-5" /> Schedule Pickup
                </Button>
                <Button variant="outline" className="w-full justify-start border-glass-border bg-glass hover:bg-glass-highlight text-white">
                  <MapPin className="mr-2 h-5 w-5" /> Find Charging Stations
                </Button>
              </div>
            </Card>
            
            {/* Recommendations */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
              
              <div className="space-y-4">
                {vehicles.slice(1, 3).map(vehicle => (
                  <div key={vehicle.id} className="glass-effect p-3 rounded-lg flex items-center gap-3">
                    <img src={vehicle.image} alt={vehicle.model} className="w-20 h-14 object-contain" />
                    <div>
                      <div className="font-medium">{vehicle.model}</div>
                      <div className="text-sm text-white/70 mb-1">Starting at ${vehicle.price}{vehicle.priceUnit}</div>
                      <Button size="sm" className="h-7 text-xs bg-tesla-blue hover:bg-tesla-blue/90 text-white">View Deal</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Technology Preview Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <TechnologyPreview />
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
