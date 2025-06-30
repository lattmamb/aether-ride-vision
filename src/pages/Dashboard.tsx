
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { vehicles } from '@/data/vehicles';
import { Car, Calendar, CreditCard, Settings, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaDashboardStats from '@/components/dashboard/MediaDashboardStats';
import VehicleMediaCard from '@/components/dashboard/VehicleMediaCard';
import InteractiveMap from '@/components/dashboard/InteractiveMap';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import PremiumCard from '@/components/ui/PremiumCard';

const Dashboard = () => {
  // Mock data - in real app this would come from state/API
  const activeVehicle = vehicles[0]; // Model S
  const subscriptionProgress = 40;
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

  // Gallery items for recent activity
  const recentActivityItems = [
    {
      type: 'image' as const,
      src: vehicles[0].image,
      title: 'Last Drive Session',
      description: 'San Francisco to Palo Alto - 45 miles'
    },
    {
      type: 'image' as const,
      src: vehicles[1].image,
      title: 'Charging Complete',
      description: 'Supercharger Station - 100% charged'
    },
    {
      type: 'image' as const,
      src: vehicles[2].image,
      title: 'Weekly Summary',
      description: 'Total miles: 247 • Efficiency: 4.2 mi/kWh'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <MainLayout>
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-10" variants={itemVariants}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">Dashboard</h1>
              <p className="text-white/70">Welcome back! Your Unity Fleet experience awaits.</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                AI Assistant
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Quick Start
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div className="mb-8" variants={itemVariants}>
          <MediaDashboardStats
            activeVehicle={activeVehicle}
            subscriptionProgress={subscriptionProgress}
            remainingMiles={remainingMiles}
            totalMiles={totalMiles}
            remainingDays={remainingDays}
          />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="xl:col-span-2 space-y-8">
            {/* Active Vehicle */}
            <motion.div variants={itemVariants}>
              <VehicleMediaCard
                vehicle={activeVehicle}
                subscriptionProgress={subscriptionProgress}
                remainingMiles={remainingMiles}
                totalMiles={totalMiles}
                remainingDays={remainingDays}
              />
            </motion.div>
            
            {/* Vehicle Location */}
            <motion.div variants={itemVariants}>
              <InteractiveMap vehicleLocation={{ lat: 37.7749, lng: -122.4194 }} />
            </motion.div>
            
            {/* Recent Activity */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="luxury" className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
                <InteractiveGallery
                  items={recentActivityItems}
                  columns={3}
                  aspectRatio={16/10}
                />
              </PremiumCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Info */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="premium" className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Subscription Details</h2>
                
                <div className="space-y-4">
                  <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="p-3 rounded-full bg-blue-500/20">
                      <Car className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Current Plan</div>
                      <div className="font-medium text-white">Premium 6-Month</div>
                    </div>
                  </div>
                  
                  <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="p-3 rounded-full bg-green-500/20">
                      <Calendar className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Renewal Date</div>
                      <div className="font-medium text-white">May 21, 2025</div>
                    </div>
                  </div>
                  
                  <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="p-3 rounded-full bg-purple-500/20">
                      <CreditCard className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Payment Method</div>
                      <div className="font-medium text-white">•••• •••• •••• 4242</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 glass-effect hover:bg-white/10 text-white border-white/20">
                  Manage Subscription
                </Button>
              </PremiumCard>
            </motion.div>
            
            {/* Quick Actions */}
            <motion.div variants={itemVariants}>
              <PremiumCard className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Car className="mr-2 h-5 w-5" /> Switch Vehicle
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Calendar className="mr-2 h-5 w-5" /> Schedule Pickup
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Settings className="mr-2 h-5 w-5" /> Vehicle Settings
                  </Button>
                </div>
              </PremiumCard>
            </motion.div>
            
            {/* Recommended Vehicles */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="luxury" className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recommended For You</h2>
                
                <div className="space-y-4">
                  {vehicles.slice(1, 3).map(vehicle => (
                    <div key={vehicle.id} className="glass-effect p-4 rounded-xl flex items-center gap-3">
                      <img src={vehicle.image} alt={vehicle.model} className="w-20 h-14 object-contain rounded-lg" />
                      <div className="flex-1">
                        <div className="font-medium text-white">{vehicle.model}</div>
                        <div className="text-sm text-white/70 mb-2">Starting at ${vehicle.price}{vehicle.priceUnit}</div>
                        <Button size="sm" className="h-7 text-xs bg-blue-500 hover:bg-blue-600 text-white">
                          View Deal
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Dashboard;
