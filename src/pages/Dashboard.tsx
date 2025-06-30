
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { vehicles } from '@/data/vehicles';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import MediaDashboardStats from '@/components/dashboard/MediaDashboardStats';
import VehicleMediaCard from '@/components/dashboard/VehicleMediaCard';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import PremiumCard from '@/components/ui/PremiumCard';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import CleanEnergyStatsGrid from '@/components/dashboard/CleanEnergyStatsGrid';
import IllinoisTransitNetwork from '@/components/dashboard/IllinoisTransitNetwork';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

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
    { name: 'Chicago Downtown Hub', address: '200 N Michigan Ave, Chicago', type: 'pickup' as const, available: true, renewable: 85 },
    { name: 'Naperville Transit Center', address: '105 4th Ave, Naperville', type: 'pickup' as const, available: true, renewable: 92 },
    { name: 'Springfield State Capitol', address: '401 S 2nd St, Springfield', type: 'charging' as const, available: true, renewable: 100 },
    { name: 'Rockford Solar Station', address: '425 E State St, Rockford', type: 'charging' as const, available: false, renewable: 100 },
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
        <DashboardHeader variants={itemVariants} />

        {/* Clean Energy Stats */}
        <CleanEnergyStatsGrid cleanEnergyStats={cleanEnergyStats} variants={itemVariants} />

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
            <IllinoisTransitNetwork illinoisLocations={illinoisLocations} variants={itemVariants} />
            
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
          <DashboardSidebar variants={itemVariants} />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Dashboard;
