
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
import VehicleCard from '@/components/VehicleCard';
import FeaturesSection from '@/components/FeaturesSection';
import Map from '@/components/Map';
import { vehicles } from '@/data/vehicles';
import TeslaVehiclesParallax from '@/components/TeslaVehiclesParallax';
import { SparklesPreviewTesla } from '@/components/ui/sparkles-demo';
import TeslaCardCarousel from '@/components/TeslaCardCarousel';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import ThreeDCardDemo from '@/components/ui/3d-card-demo';
import ExpandableCardDemoStandard from '@/components/ui/expandable-card-demo-standard';
import { AdaptiveLayoutProvider } from '@/contexts/AdaptiveLayoutContext';
import PageTransition from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';

const Index = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleSearch = (filters: {
    query: string;
    vehicleType: string;
    location: string;
    dateRange: string;
  }) => {
    let results = [...vehicles];

    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(
        (vehicle) => vehicle.model.toLowerCase().includes(query)
      );
    }

    if (filters.vehicleType !== 'all') {
      results = results.filter(
        (vehicle) => vehicle.type === filters.vehicleType
      );
    }

    setFilteredVehicles(results);
  };

  // Sample gallery items for interactive showcase
  const showcaseItems = [
    {
      type: 'image' as const,
      src: '/lovable-uploads/011215ed-22f9-4462-8492-3cdff3c58719.png',
      title: 'Tesla Model S',
      description: 'Premium electric sedan with cutting-edge technology'
    },
    {
      type: 'image' as const,
      src: '/lovable-uploads/87310600-2a51-4edd-a0b3-4ae26fc44398.png',
      title: 'Tesla Interior',
      description: 'Luxury redefined with minimalist design'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <AdaptiveLayoutProvider>
      <MainLayout>
        <PageTransition>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants}>
              <Hero />
            </motion.div>

            {/* Search Section */}
            <motion.div 
              className="container mx-auto px-4 pt-8"
              variants={itemVariants}
            >
              <SearchFilter onSearch={handleSearch} />
            </motion.div>

            {/* Tesla Vehicles Parallax Showcase */}
            <motion.div variants={itemVariants}>
              <TeslaVehiclesParallax />
            </motion.div>
            
            {/* Tesla Cards Carousel */}
            <motion.div 
              className="bg-gradient-to-br from-tesla-dark-80 to-unity-charcoal py-16"
              variants={itemVariants}
            >
              <TeslaCardCarousel />
            </motion.div>
            
            {/* SparklesPreviewTesla Showcase */}
            <motion.div variants={itemVariants}>
              <SparklesPreviewTesla />
            </motion.div>

            {/* Interactive Gallery */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-unity-charcoal/30 to-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Tesla Gallery</h2>
                  <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
                    Experience our Tesla collection through immersive imagery showcasing design and innovation
                  </p>
                </div>
                
                <InteractiveGallery
                  items={showcaseItems}
                  columns={2}
                  aspectRatio={16/9}
                />
              </div>
            </motion.section>
            
            {/* Available Vehicles Section */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-unity-charcoal/20 to-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Available Now</h2>
                  <p className="text-xl text-white/80 mb-10 text-center max-w-4xl mx-auto leading-relaxed">
                    Browse our current inventory of Tesla vehicles ready for immediate rental.
                    Select your perfect electric ride and experience the future today.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredVehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card-enhanced"
                    >
                      <VehicleCard vehicle={vehicle} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Featured 3D Vehicle */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-tesla-dark-50 to-unity-charcoal"
              variants={itemVariants}
            >
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Vehicle</h2>
                  <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
                    Experience our interactive 3D showcase of Tesla's finest vehicles with immersive details.
                  </p>
                </div>
                <ThreeDCardDemo />
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.div variants={itemVariants}>
              <FeaturesSection />
            </motion.div>
            
            {/* Map Section */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-tesla-dark-80 to-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Live Vehicle Tracking</h2>
                  <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                    Track available vehicles and charging stations in real-time on our interactive map with live updates.
                  </p>
                </div>
                
                <div className="glass-card p-2 rounded-2xl">
                  <Map className="w-full h-[600px] rounded-xl" />
                </div>
              </div>
            </motion.section>
            
            {/* Tesla Models Section */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-unity-midnight to-unity-charcoal"
              variants={itemVariants}
            >
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Tesla Models</h2>
                  <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
                    Explore our complete lineup of premium electric vehicles. Click on any model to discover detailed specifications and features.
                  </p>
                </div>
                <ExpandableCardDemoStandard />
              </div>
            </motion.section>
          </motion.div>
        </PageTransition>
      </MainLayout>
    </AdaptiveLayoutProvider>
  );
};

export default Index;
