
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import SearchSection from '@/components/index/SearchSection';
import FeaturedVehiclesSection from '@/components/index/FeaturedVehiclesSection';
import QuickActionsSection from '@/components/index/QuickActionsSection';
import { vehicles } from '@/data/vehicleData';
import FeaturesSection from '@/components/FeaturesSection';
import Hero from '@/components/hero/Hero'; // Updated import to use refactored Hero component

const Index = () => {
  const featuredVehicles = vehicles.slice(0, 3);
  
  return (
    <MainLayout>
      <Hero />
      <div className="container mx-auto px-4">
        <SearchSection />
        <FeaturedVehiclesSection featuredVehicles={featuredVehicles} />
        <QuickActionsSection />
        <FeaturesSection />
      </div>
    </MainLayout>
  );
};

export default Index;
