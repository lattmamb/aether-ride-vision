
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
import { VehicleHeader } from '@/components/ui/vehicle-header';
import TeslaCardCarousel from '@/components/tesla-card-carousel';
import { SparklesPreviewTesla } from '@/components/ui/sparkles-demo';
import TeslaVehiclesParallax from '@/components/TeslaVehiclesParallax';
import FeaturesSection from '@/components/FeaturesSection';
import Map from '@/components/Map';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <SearchFilter onSearch={(filters) => console.log(filters)} />
      <VehicleHeader />
      <TeslaCardCarousel />
      <SparklesPreviewTesla />
      <TeslaVehiclesParallax />
      <FeaturesSection />
      <Map />
    </MainLayout>
  );
};

export default Index;
