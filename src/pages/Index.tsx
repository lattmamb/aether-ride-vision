
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import NewHero from '@/components/landing/NewHero';
import NewFeatures from '@/components/landing/NewFeatures';
import NewVehicleGallery from '@/components/landing/NewVehicleGallery';

const Index = () => {
  return (
    <MainLayout>
      <NewHero />
      <NewFeatures />
      <NewVehicleGallery />
    </MainLayout>
  );
};

export default Index;
