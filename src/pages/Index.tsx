
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ModernHero from '@/components/modern/ModernHero';
import ModernFeatures from '@/components/modern/ModernFeatures';
import ModernVehicleShowcase from '@/components/modern/ModernVehicleShowcase';
import ModernCTA from '@/components/modern/ModernCTA';

const Index = () => {
  return (
    <MainLayout>
      <div className="modern-landing">
        <ModernHero />
        <ModernFeatures />
        <ModernVehicleShowcase />
        <ModernCTA />
      </div>
    </MainLayout>
  );
};

export default Index;
