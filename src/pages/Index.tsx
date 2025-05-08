
import React, { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import { vehicles } from '@/data/index';
import TeslaVehiclesParallax from '@/components/TeslaVehiclesParallax';
import { SparklesPreviewTesla } from '@/components/ui/sparkles-demo';
import TeslaCardCarousel from '@/components/TeslaCardCarousel';
import SearchSection from '@/components/sections/SearchSection';
import VehiclesShowcaseSection from '@/components/sections/VehiclesShowcaseSection';
import FeaturedVehicleSection from '@/components/sections/FeaturedVehicleSection';
import TrackerSection from '@/components/sections/TrackerSection';
import TeslaModelsSection from '@/components/sections/TeslaModelsSection';
import { motion } from 'framer-motion';

const Index = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after assets are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-tesla-dark">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl text-white/90 font-medium">Loading Experience...</h2>
        </div>
      </div>
    );
  }

  return (
    <MainLayout>
      <Hero />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <SearchSection onFilterChange={setFilteredVehicles} />
        </motion.div>

        {/* Tesla Vehicles Parallax Showcase */}
        <motion.div variants={itemVariants}>
          <TeslaVehiclesParallax />
        </motion.div>
        
        {/* Tesla Cards Carousel */}
        <motion.div variants={itemVariants} className="bg-tesla-dark-80 py-10">
          <TeslaCardCarousel />
        </motion.div>
        
        {/* SparklesPreviewTesla Showcase */}
        <motion.div variants={itemVariants}>
          <SparklesPreviewTesla />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <VehiclesShowcaseSection vehicles={filteredVehicles} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeaturedVehicleSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeaturesSection />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <TrackerSection />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <TeslaModelsSection />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Index;
