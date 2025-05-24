
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import VehicleCard from '@/components/VehicleCard';
import Map from '@/components/Map';
import { vehicles } from '@/data/vehicles';
import ExpandableCardDemoStandard from '@/components/ui/expandable-card-demo-standard';
import { SparklesPreviewTesla } from '@/components/ui/sparkles-demo';
import ToggleSwitchDemo from '@/components/ui/toggle-switch-demo';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      
      <Features />
      
      {/* SparklesPreviewTesla Showcase */}
      <SparklesPreviewTesla />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">Available Vehicles</h2>
            <p className="text-xl text-white/70 mb-8 text-center max-w-3xl mx-auto">
              Browse our current inventory of electric vehicles ready for immediate rental.
              Select your perfect electric ride and experience the future today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Toggle Switch Demo Section */}
      <section className="py-16 bg-tesla-dark-80">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Customize Your Experience</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Choose premium add-ons and advanced features to enhance your vehicle.
            </p>
          </div>
          <ToggleSwitchDemo />
        </div>
      </section>
      
      <section className="py-16 bg-tesla-dark-80">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Live Vehicle Tracking</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Track available vehicles and charging stations in real-time on our interactive map.
            </p>
          </div>
          
          <Map className="w-full h-[500px]" />
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Electric Models</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Explore our lineup of premium electric vehicles. Click on any model to learn more.
            </p>
          </div>
          <ExpandableCardDemoStandard />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
