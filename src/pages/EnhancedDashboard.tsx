
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import SmartCard from '@/components/enhanced/SmartCard';
import StatusIndicator from '@/components/enhanced/StatusIndicator';
import AnimatedStats from '@/components/enhanced/AnimatedStats';
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
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedDashboard = () => {
  const activeVehicle = vehicles[0];
  const subscriptionProgress = 40;
  const remainingMiles = 750;
  const totalMiles = 1500;
  const remainingDays = 18;
  
  const upcomingReservation = {
    id: 'res-123',
    vehicleId: 'model-y',
    vehicle: vehicles.find(v => v.id === 'model-y'),
    startDate: '2025-04-15T10:00:00',
    endDate: '2025-04-22T18:00:00',
    pickupLocation: 'San Francisco Downtown',
  };

  const dashboardStats = [
    {
      label: 'Total Miles',
      value: 2847,
      unit: ' mi',
      icon: <Gauge className="h-6 w-6" />,
      color: 'text-blue-400'
    },
    {
      label: 'Active Days',
      value: 127,
      unit: ' days',
      icon: <Calendar className="h-6 w-6" />,
      color: 'text-green-400'
    },
    {
      label: 'Savings',
      value: 3240,
      prefix: '$',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'text-yellow-400'
    },
    {
      label: 'Eco Score',
      value: 92,
      unit: '/100',
      icon: <Award className="h-6 w-6" />,
      color: 'text-purple-400'
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-3">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-white/70 text-lg">
            Your Tesla subscription is performing excellently. Here's your overview.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <AnimatedStats stats={dashboardStats} />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="xl:col-span-2 space-y-8">
            {/* Enhanced Active Vehicle */}
            <SmartCard variant="premium" glow tilt>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Current Vehicle</h2>
                    <StatusIndicator status="success" label="Active & Ready" />
                  </div>
                  <Button variant="outline" className="bg-glass border-glass-border hover:bg-glass-highlight text-white">
                    Vehicle Controls
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <motion.div 
                      className="relative h-48 lg:h-56 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={activeVehicle.image}
                        alt={activeVehicle.model}
                        className="h-full object-contain filter drop-shadow-2xl"
                      />
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#9b87f5]/20 to-transparent rounded-2xl"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeVehicle.model}</h3>
                      <p className="text-white/70 text-lg">{activeVehicle.tagline}</p>
                    </div>

                    {/* Enhanced Progress Bars */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 font-medium">Subscription Progress</span>
                          <span className="font-bold text-white">{remainingDays} days remaining</span>
                        </div>
                        <div className="relative">
                          <Progress value={subscriptionProgress} className="h-3 bg-glass" />
                          <motion.div
                            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${subscriptionProgress}%` }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 font-medium">Mileage Usage</span>
                          <span className="font-bold text-white">{remainingMiles} / {totalMiles} miles</span>
                        </div>
                        <div className="relative">
                          <Progress value={(remainingMiles / totalMiles) * 100} className="h-3 bg-glass" />
                          <motion.div
                            className="absolute top-0 left-0 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(remainingMiles / totalMiles) * 100}%` }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Performance Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Battery, label: 'Range', value: activeVehicle.performance.range + ' mi', color: 'text-green-400' },
                        { icon: Gauge, label: 'Top Speed', value: activeVehicle.performance.topSpeed + ' mph', color: 'text-blue-400' },
                        { icon: Zap, label: '0-60 mph', value: activeVehicle.performance.acceleration + 's', color: 'text-purple-400' }
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                          className="glass-effect p-4 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300"
                        >
                          <stat.icon className={`h-5 w-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                          <div className="text-xs text-white/70 mb-1">{stat.label}</div>
                          <div className="text-sm font-bold text-white">{stat.value}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SmartCard>
            
            {/* Enhanced Vehicle Location */}
            <SmartCard variant="interactive">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Vehicle Location</h2>
                  <div className="flex items-center gap-3">
                    <StatusIndicator status="success" label="Live Tracking" size="sm" />
                    <span className="text-sm text-white/70">Updated 2 min ago</span>
                  </div>
                </div>
                
                <Map 
                  vehicleLocation={{ lat: 37.7749, lng: -122.4194 }}
                  className="w-full h-[350px] rounded-2xl overflow-hidden"
                />
              </div>
            </SmartCard>
            
            {/* Enhanced Reservations */}
            <SmartCard variant="elevated">
              <div className="p-8">
                <Tabs defaultValue="upcoming">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Your Reservations</h2>
                    <TabsList className="glass-effect">
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past">History</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="upcoming">
                    {upcomingReservation.vehicle && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-effect p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-1">
                            <div className="h-28 flex items-center justify-center">
                              <img
                                src={upcomingReservation.vehicle.image}
                                alt={upcomingReservation.vehicle.model}
                                className="h-full object-contain filter drop-shadow-lg"
                              />
                            </div>
                          </div>
                          
                          <div className="lg:col-span-3 space-y-4">
                            <div>
                              <h3 className="font-bold text-white text-xl mb-2">{upcomingReservation.vehicle.model}</h3>
                              <StatusIndicator status="pending" label="Confirmed Reservation" size="sm" />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-blue-400" />
                                <div>
                                  <div className="text-sm text-white/70">Duration</div>
                                  <div className="font-medium text-white">
                                    {new Date(upcomingReservation.startDate).toLocaleDateString()} - 
                                    {new Date(upcomingReservation.endDate).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-green-400" />
                                <div>
                                  <div className="text-sm text-white/70">Pickup Location</div>
                                  <div className="font-medium text-white">{upcomingReservation.pickupLocation}</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#9b87f5] text-white">
                                Manage Booking
                              </Button>
                              <Button variant="outline" className="border-glass-border bg-glass hover:bg-glass-highlight text-white">
                                Contact Support
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="past">
                    <div className="text-center py-12 text-white/70">
                      <Car className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No past reservations found</p>
                      <p className="text-sm">Your booking history will appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </SmartCard>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-8">
            {/* Subscription Details */}
            <SmartCard variant="premium" glow>
              <div className="p-8">
                <h2 className="text-xl font-bold text-white mb-6">Subscription Overview</h2>
                
                <div className="space-y-6">
                  {[
                    { icon: Car, label: 'Current Plan', value: 'Premium 6-Month', color: 'text-purple-400' },
                    { icon: Calendar, label: 'Renewal Date', value: 'May 21, 2025', color: 'text-blue-400' },
                    { icon: CreditCard, label: 'Payment Method', value: '•••• •••• •••• 4242', color: 'text-green-400' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-effect p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className={`p-3 rounded-xl bg-white/5 ${item.color}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-white/70">{item.label}</div>
                        <div className="font-semibold text-white">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#9b87f5] text-white">
                  Manage Subscription
                </Button>
              </div>
            </SmartCard>
            
            {/* Quick Actions */}
            <SmartCard>
              <div className="p-8">
                <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                
                <div className="space-y-3">
                  {[
                    { icon: Car, label: 'Switch Vehicle', color: 'text-blue-400' },
                    { icon: Calendar, label: 'Schedule Pickup', color: 'text-green-400' },
                    { icon: MapPin, label: 'Find Charging Stations', color: 'text-yellow-400' },
                    { icon: TrendingUp, label: 'Usage Analytics', color: 'text-purple-400' }
                  ].map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full neumorphic-button rounded-xl p-4 flex items-center gap-4 text-white/90 hover:text-white transition-all duration-300"
                    >
                      <action.icon className={`h-5 w-5 ${action.color}`} />
                      <span className="font-medium">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </SmartCard>
            
            {/* Recommendations */}
            <SmartCard variant="interactive">
              <div className="p-8">
                <h2 className="text-xl font-bold text-white mb-6">Recommended for You</h2>
                
                <div className="space-y-4">
                  {vehicles.slice(1, 3).map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-effect p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all duration-300 group"
                    >
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.model} 
                        className="w-20 h-14 object-contain group-hover:scale-105 transition-transform" 
                      />
                      <div className="flex-1">
                        <div className="font-medium text-white">{vehicle.model}</div>
                        <div className="text-sm text-white/70 mb-2">From ${vehicle.price}{vehicle.priceUnit}</div>
                        <Button size="sm" className="h-7 text-xs bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#9b87f5] text-white">
                          View Deal
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SmartCard>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EnhancedDashboard;
