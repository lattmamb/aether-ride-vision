
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import InteractiveHero from '@/components/landing/InteractiveHero';
import Features from '@/components/landing/Features';
import HeroParallax from '@/components/ui/hero-parallax';
import ExpandableVehiclesGrid from '@/components/ui/expandable-grid';
import { vehicles as vehicleData } from '@/data/vehicles';

// Transform vehicle data for HeroParallax
const vehicleProducts = vehicleData.slice(0, 5).map(vehicle => ({
  id: vehicle.id,
  title: vehicle.model,
  link: `/vehicles/${vehicle.id}`,
  thumbnail: vehicle.image || '/placeholder.svg',
  price: vehicle.price,
  priceUnit: vehicle.priceUnit,
  available: vehicle.available
}));

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Interactive Hero Section */}
        <InteractiveHero />
        
        {/* Features Section */}
        <Features />
        
        {/* Hero Parallax Vehicle Showcase */}
        <HeroParallax vehicles={vehicleProducts} />
        
        {/* Expandable Vehicle Grid */}
        <section className="py-20 bg-tesla-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Explore Our Fleet
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover our premium collection of electric vehicles. Each model offers cutting-edge technology and unmatched performance.
              </p>
            </div>
            <ExpandableVehiclesGrid vehicles={vehicleData} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
