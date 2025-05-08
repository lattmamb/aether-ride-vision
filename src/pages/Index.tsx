
import React, { useState } from 'react';
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

const Index = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  return (
    <MainLayout>
      <Hero />
      
      <SearchSection onFilterChange={setFilteredVehicles} />

      {/* Tesla Vehicles Parallax Showcase */}
      <TeslaVehiclesParallax />
      
      {/* Tesla Cards Carousel */}
      <div className="bg-tesla-dark-80 py-10">
        <TeslaCardCarousel />
      </div>
      
      {/* SparklesPreviewTesla Showcase */}
      <SparklesPreviewTesla />
      
      <VehiclesShowcaseSection vehicles={filteredVehicles} />
      
      <FeaturedVehicleSection />

      <FeaturesSection />
      
      <TrackerSection />
      
      <TeslaModelsSection />
    </MainLayout>
  );
};

export default Index;
