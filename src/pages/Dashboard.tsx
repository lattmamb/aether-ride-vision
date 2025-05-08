
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Map from '@/components/Map';
import { vehicles } from '@/data/vehicles';
import { 
  Car, 
  Calendar, 
  Gauge, 
  Battery, 
  MapPin, 
  CreditCard, 
  Clock,
  User,
  ChevronRight
} from 'lucide-react';
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
  
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="container mx-auto">
        <motion.div 
          className="mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUpVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-blue-text">Dashboard</h1>
              <p className="text-white/70">Welcome back! Manage your electric vehicle subscriptions.</p>
            </div>
            
            <Button className="neon-button">
              <Calendar className="mr-2 h-4 w-4" />
              Book New Ride
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Vehicle */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariants}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="neon-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Current Vehicle</h2>
                  <Button variant="outline" className="bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
                    View Details
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2">
                    <div className="relative h-40 md:h-48 flex items-center justify-center">
                      <img
                        src={activeVehicle.image}
                        alt={activeVehicle.model}
                        className="h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{activeVehicle.model}</h3>
                      <p className="text-white/70 text-sm">{activeVehicle.tagline}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/70">Subscription</span>
                        <span className="font-medium text-white">{remainingDays} days left</span>
                      </div>
                      <Progress value={subscriptionProgress} className="h-2 bg-aether-panel-light">
                        <div className="h-full bg-aether-blue rounded-full" />
                      </Progress>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/70">Mileage</span>
                        <span className="font-medium text-white">{remainingMiles} / {totalMiles} miles</span>
                      </div>
                      <Progress value={(remainingMiles / totalMiles) * 100} className="h-2 bg-aether-panel-light">
                        <div className="h-full bg-aether-blue rounded-full" />
                      </Progress>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-aether-panel-light border border-aether-blue/10 flex flex-col items-center p-3 rounded">
                        <Battery className="h-4 w-4 text-aether-blue mb-1" />
                        <span className="text-xs text-white/70">Range</span>
                        <span className="text-sm font-medium text-white">{activeVehicle.performance.range} mi</span>
                      </div>
                      <div className="bg-aether-panel-light border border-aether-blue/10 flex flex-col items-center p-3 rounded">
                        <Gauge className="h-4 w-4 text-aether-blue mb-1" />
                        <span className="text-xs text-white/70">Top Speed</span>
                        <span className="text-sm font-medium text-white">{activeVehicle.performance.topSpeed} mph</span>
                      </div>
                      <div className="bg-aether-panel-light border border-aether-blue/10 flex flex-col items-center p-3 rounded">
                        <Clock className="h-4 w-4 text-aether-blue mb-1" />
                        <span className="text-xs text-white/70">0-60 mph</span>
                        <span className="text-sm font-medium text-white">{activeVehicle.performance.acceleration}s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Vehicle Location */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariants}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="neon-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Vehicle Location</h2>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-aether-blue"></div>
                    <span className="text-sm text-white/70">Updated 5 minutes ago</span>
                  </div>
                </div>
                
                <Map 
                  vehicleLocation={{ lat: 37.7749, lng: -122.4194 }}
                  className="w-full h-[300px] rounded-lg overflow-hidden"
                />
              </Card>
            </motion.div>
            
            {/* Activity & Trips */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariants}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="neon-card p-6">
                <Tabs defaultValue="upcoming">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Reservations</h2>
                    <TabsList className="bg-aether-panel-light border border-aether-blue/10">
                      <TabsTrigger 
                        value="upcoming" 
                        className="data-[state=active]:bg-aether-blue/20 data-[state=active]:text-white"
                      >
                        Upcoming
                      </TabsTrigger>
                      <TabsTrigger 
                        value="past"
                        className="data-[state=active]:bg-aether-blue/20 data-[state=active]:text-white"
                      >
                        Past
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="upcoming">
                    {upcomingReservation.vehicle && (
                      <div className="bg-aether-panel-light border border-aether-blue/10 p-4 rounded-lg">
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
                            <h3 className="font-bold mb-2 text-white">{upcomingReservation.vehicle.model}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-aether-blue" />
                                <span className="text-white/80">
                                  {new Date(upcomingReservation.startDate).toLocaleDateString()} - 
                                  {new Date(upcomingReservation.endDate).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-aether-blue" />
                                <span className="text-white/80">{upcomingReservation.pickupLocation}</span>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" className="neon-button text-xs h-8">
                                  Manage
                                </Button>
                                <Button size="sm" variant="outline" className="bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10 text-xs h-8">
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
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Info */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariants}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="neon-card p-6">
                <h2 className="text-lg font-bold mb-4 text-white">Subscription Details</h2>
                
                <div className="space-y-4">
                  <div className="bg-aether-panel-light border border-aether-blue/10 p-3 rounded-lg flex items-center gap-3">
                    <div className="p-2 rounded-full bg-aether-blue/20">
                      <Car className="h-5 w-5 text-aether-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Current Plan</div>
                      <div className="font-medium text-white">Premium 6-Month</div>
                    </div>
                  </div>
                  
                  <div className="bg-aether-panel-light border border-aether-blue/10 p-3 rounded-lg flex items-center gap-3">
                    <div className="p-2 rounded-full bg-aether-blue/20">
                      <Calendar className="h-5 w-5 text-aether-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Renewal Date</div>
                      <div className="font-medium text-white">May 21, 2025</div>
                    </div>
                  </div>
                  
                  <div className="bg-aether-panel-light border border-aether-blue/10 p-3 rounded-lg flex items-center gap-3">
                    <div className="p-2 rounded-full bg-aether-blue/20">
                      <CreditCard className="h-5 w-5 text-aether-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Payment Method</div>
                      <div className="font-medium text-white">•••• •••• •••• 4242</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full neon-button">
                    Manage Subscription
                  </Button>
                </div>
              </Card>
            </motion.div>
            
            {/* Quick Actions */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariants}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="neon-card p-6">
                <h2 className="text-lg font-bold mb-4 text-white">Quick Actions</h2>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-aether-blue/30 bg-aether-panel-light hover:bg-aether-blue/10 text-white">
                    <Car className="mr-2 h-5 w-5 text-aether-blue" /> Switch Vehicle
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-aether-blue/30 bg-aether-panel-light hover:bg-aether-blue/10 text-white">
                    <Calendar className="mr-2 h-5 w-5 text-aether-blue" /> Schedule Pickup
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-aether-blue/30 bg-aether-panel-light hover:bg-aether-blue/10 text-white">
                    <MapPin className="mr-2 h-5 w-5 text-aether-blue" /> Find Charging Stations
                  </Button>
                </div>
              </Card>
            </motion.div>
            
            {/* Recommendations */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUpVariants}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card className="neon-card p-6">
                <h2 className="text-lg font-bold mb-4 text-white">Recommended For You</h2>
                
                <div className="space-y-4">
                  {vehicles.slice(1, 3).map(vehicle => (
                    <div key={vehicle.id} className="bg-aether-panel-light border border-aether-blue/10 p-3 rounded-lg flex items-center gap-3 hover:border-aether-blue/30 transition-colors">
                      <img src={vehicle.image} alt={vehicle.model} className="w-20 h-14 object-contain" />
                      <div>
                        <div className="font-medium text-white">{vehicle.model}</div>
                        <div className="text-sm text-white/70 mb-1">Starting at ${vehicle.price}{vehicle.priceUnit}</div>
                        <Button size="sm" className="h-7 text-xs neon-button">View Deal</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
