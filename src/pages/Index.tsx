
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
import ServicesShowcase from '@/components/ServicesShowcase';
import StickyScrollReveal from '@/components/StickyScrollReveal';
import { VehicleHeader } from '@/components/ui/vehicle-header';
import TeslaCardCarousel from '@/components/tesla-card-carousel';
import { SparklesPreviewTesla } from '@/components/ui/sparkles-demo';
import TeslaVehiclesParallax from '@/components/TeslaVehiclesParallax';
import FeaturesSection from '@/components/FeaturesSection';
import Map from '@/components/Map';
import VideoShowcase from '@/components/VideoShowcase';
import VideoHighlightReel from '@/components/VideoHighlightReel';
import AutonomousCTA from '@/components/AutonomousCTA';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <SearchFilter onSearch={(filters) => console.log(filters)} />
      <ServicesShowcase />
      <StickyScrollReveal />
      <VehicleHeader />
      <TeslaCardCarousel />
      <VideoShowcase />
      <SparklesPreviewTesla />
      <TeslaVehiclesParallax />
      <FeaturesSection />
      <VideoHighlightReel />
      <AutonomousCTA />
      <Map />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
