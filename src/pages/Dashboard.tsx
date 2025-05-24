
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import AnimatedStats from '@/components/dashboard/AnimatedStats';
import HolographicVehicleShowcase from '@/components/dashboard/HolographicVehicleShowcase';
import TestimonialsCarousel from '@/components/dashboard/TestimonialsCarousel';
import TechnologyPreview from '@/components/dashboard/TechnologyPreview';
import { vehicles } from '@/data/vehicles';

const Dashboard: React.FC = () => {
  // Transform vehicle data to match HolographicVehicleShowcase requirements
  const featuredVehicle = vehicles[0] ? {
    id: vehicles[0].id,
    model: vehicles[0].model,
    image: vehicles[0].image,
    tagline: vehicles[0].description || `Experience the future with ${vehicles[0].model}`,
    performance: {
      range: `${vehicles[0].performance.range} miles`,
      topSpeed: `${vehicles[0].performance.topSpeed} mph`,
      acceleration: `${vehicles[0].performance.acceleration}`
    }
  } : null;

  return (
    <MainLayout>
      <div className="min-h-screen bg-tesla-dark text-white">
        {/* Dashboard Header */}
        <section className="py-12 bg-gradient-to-br from-tesla-dark via-tesla-dark-80 to-tesla-dark-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Your Electric Journey
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Track your impact, manage your fleet, and experience the future of mobility.
            </p>
          </div>
        </section>

        {/* Animated Stats */}
        <section className="py-16 bg-tesla-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
              Your Impact Dashboard
            </h2>
            <AnimatedStats />
          </div>
        </section>

        {/* Holographic Vehicle Showcase */}
        {featuredVehicle && (
          <section className="py-16 bg-gradient-to-b from-tesla-dark to-tesla-dark-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
                Current Vehicle
              </h2>
              <HolographicVehicleShowcase vehicle={featuredVehicle} />
            </div>
          </section>
        )}

        {/* Technology Preview */}
        <section className="py-16">
          <TechnologyPreview />
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-tesla-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
              What Our Customers Say
            </h2>
            <TestimonialsCarousel />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
