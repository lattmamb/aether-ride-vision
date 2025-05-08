
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import SearchSection from '@/components/index/SearchSection';
import FeaturedVehiclesSection from '@/components/index/FeaturedVehiclesSection';
import QuickActionsSection from '@/components/index/QuickActionsSection';
import { vehicles } from '@/data/vehicles';

const Index = () => {
  const featuredVehicles = vehicles.slice(0, 3);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <SearchSection />
        <FeaturedVehiclesSection featuredVehicles={featuredVehicles} />
        <QuickActionsSection />
      </div>
    </MainLayout>
  );
};

export default Index;
