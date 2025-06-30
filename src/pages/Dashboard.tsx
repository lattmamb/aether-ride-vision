
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { vehicles } from '@/data/vehicles';
import { Car, Calendar, CreditCard, Settings, MessageCircle, Zap, Leaf, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaDashboardStats from '@/components/dashboard/MediaDashboardStats';
import VehicleMediaCard from '@/components/dashboard/VehicleMediaCard';
import InteractiveMap from '@/components/dashboard/InteractiveMap';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import PremiumCard from '@/components/ui/PremiumCard';

const Dashboard = () => {
  // Illinois-focused data
  const activeVehicle = vehicles[0];
  const subscriptionProgress = 65;
  const remainingMiles = 1250;
  const totalMiles = 2000;
  const remainingDays = 22;

  // Illinois Clean Energy Stats
  const cleanEnergyStats = {
    carbonSaved: 847, // lbs CO2
    solarCharging: 78, // percentage
    windEnergy: 45, // percentage
    treesEquivalent: 12
  };

  // Illinois locations
  const illinoisLocations = [
    { name: 'Chicago Downtown Hub', address: '200 N Michigan Ave, Chicago', type: 'pickup', available: true, renewable: 85 },
    { name: 'Naperville Transit Center', address: '105 4th Ave, Naperville', type: 'pickup', available: true, renewable: 92 },
    { name: 'Springfield State Capitol', address: '401 S 2nd St, Springfield', type: 'charging', available: true, renewable: 100 },
    { name: 'Rockford Solar Station', address: '425 E State St, Rockford', type: 'charging', available: false, renewable: 100 },
  ];

  // Gallery items for Illinois clean energy
  const cleanEnergyItems = [
    {
      type: 'image' as const,
      src: vehicles[0].image,
      title: 'Solar-Powered Charging',
      description: 'Chicago Loop - 100% renewable energy'
    },
    {
      type: 'image' as const,
      src: vehicles[1].image,
      title: 'Wind Energy Transit',
      description: 'Illinois Wind Farm - Zero emissions'
    },
    {
      type: 'image' as const,
      src: vehicles[2].image,
      title: 'Corporate Fleet Program',
      description: 'State of Illinois - 500+ employees enrolled'
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
              <h1 className="text-4xl font-bold gradient-text mb-2">Illinois Clean Transit Dashboard</h1>
              <p className="text-white/70">Sustainable mobility solutions across the Prairie State.</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Transit Assistant
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Leaf className="w-4 h-4 mr-2" />
                Book Clean Ride
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Clean Energy Stats */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <PremiumCard variant="luxury" className="p-6 text-center">
              <Leaf className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.carbonSaved}</div>
              <div className="text-sm text-white/70">lbs CO₂ Saved</div>
            </PremiumCard>
            <PremiumCard variant="premium" className="p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.solarCharging}%</div>
              <div className="text-sm text-white/70">Solar Powered</div>
            </PremiumCard>
            <PremiumCard variant="luxury" className="p-6 text-center">
              <div className="w-8 h-8 text-blue-400 mx-auto mb-3 text-2xl">💨</div>
              <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.windEnergy}%</div>
              <div className="text-sm text-white/70">Wind Energy</div>
            </PremiumCard>
            <PremiumCard variant="premium" className="p-6 text-center">
              <div className="w-8 h-8 text-green-400 mx-auto mb-3 text-2xl">🌳</div>
              <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.treesEquivalent}</div>
              <div className="text-sm text-white/70">Trees Planted Equiv.</div>
            </PremiumCard>
          </div>
        </motion.div>

        {/* Main Stats */}
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
            {/* Active Transit Subscription */}
            <motion.div variants={itemVariants}>
              <VehicleMediaCard
                vehicle={activeVehicle}
                subscriptionProgress={subscriptionProgress}
                remainingMiles={remainingMiles}
                totalMiles={totalMiles}
                remainingDays={remainingDays}
              />
            </motion.div>
            
            {/* Illinois Transit Network */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="luxury" className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  Illinois Transit Network
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {illinoisLocations.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="glass-effect p-4 rounded-lg border border-glass-border"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {location.type === 'pickup' ? (
                            <Car className="w-4 h-4 text-blue-400" />
                          ) : (
                            <Zap className="w-4 h-4 text-green-400" />
                          )}
                          <h4 className="font-medium text-white">{location.name}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            location.available 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {location.available ? 'Available' : 'Full'}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                            {location.renewable}% Clean
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-white/70">{location.address}</p>
                      <p className="text-xs text-white/50 mt-1 capitalize">{location.type} Station</p>
                    </motion.div>
                  ))}
                </div>
                <InteractiveMap vehicleLocation={{ lat: 41.8781, lng: -87.6298 }} />
              </PremiumCard>
            </motion.div>
            
            {/* Clean Energy Showcase */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="luxury" className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-green-400" />
                  Clean Energy Impact
                </h2>
                <InteractiveGallery
                  items={cleanEnergyItems}
                  columns={3}
                  aspectRatio={16/10}
                />
              </PremiumCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Transit Subscription */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="premium" className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Transit Subscription
                </h2>
                
                <div className="space-y-4">
                  <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="p-3 rounded-full bg-blue-500/20">
                      <Car className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Current Plan</div>
                      <div className="font-medium text-white">Illinois Commuter Pro</div>
                    </div>
                  </div>
                  
                  <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="p-3 rounded-full bg-green-500/20">
                      <Leaf className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Clean Energy Goal</div>
                      <div className="font-medium text-white">95% Renewable</div>
                    </div>
                  </div>
                  
                  <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
                    <div className="p-3 rounded-full bg-purple-500/20">
                      <Calendar className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Next Billing</div>
                      <div className="font-medium text-white">April 15, 2025</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 glass-effect hover:bg-white/10 text-white border-white/20">
                  Manage Transit Plan
                </Button>
              </PremiumCard>
            </motion.div>
            
            {/* Illinois Incentives */}
            <motion.div variants={itemVariants}>
              <PremiumCard variant="luxury" className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Illinois Clean Energy Incentives</h2>
                
                <div className="space-y-3">
                  <div className="glass-effect p-3 rounded-lg">
                    <div className="font-medium text-white text-sm">State EV Rebate</div>
                    <div className="text-green-400 text-xs">Up to $4,000 available</div>
                  </div>
                  <div className="glass-effect p-3 rounded-lg">
                    <div className="font-medium text-white text-sm">ComEd Clean Energy</div>
                    <div className="text-blue-400 text-xs">15% discount on charging</div>
                  </div>
                  <div className="glass-effect p-3 rounded-lg">
                    <div className="font-medium text-white text-sm">Corporate Transit Tax Credit</div>
                    <div className="text-purple-400 text-xs">20% business deduction</div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4 border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm">
                  Learn About Incentives
                </Button>
              </PremiumCard>
            </motion.div>
            
            {/* Quick Transit Actions */}
            <motion.div variants={itemVariants}>
              <PremiumCard className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <MapPin className="mr-2 h-5 w-5" /> Find Charging Station
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Calendar className="mr-2 h-5 w-5" /> Schedule Commute
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Users className="mr-2 h-5 w-5" /> Corporate Program
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
                    <Leaf className="mr-2 h-5 w-5" /> Carbon Report
                  </Button>
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
