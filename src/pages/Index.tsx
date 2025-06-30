
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
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  return (
    <AdaptiveLayoutProvider>
      <MainLayout>
        <PageTransition>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants}>
              <Hero />
            </motion.div>

            {/* Tesla-style spacer */}
            <div className="h-20 md:h-32 bg-gradient-to-b from-black to-unity-midnight" />

            {/* Search Section with Tesla-style minimal design */}
            <motion.section 
              className="py-16 md:py-24 bg-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <SearchFilter onSearch={handleSearch} />
                </div>
              </div>
            </motion.section>

            {/* Tesla Vehicles Parallax Showcase */}
            <motion.div variants={itemVariants}>
              <TeslaVehiclesParallax />
            </motion.div>
            
            {/* Tesla-style minimal section divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Available Vehicles Section with Tesla-inspired layout */}
            <motion.section 
              className="py-24 md:py-32 bg-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Available Now
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Browse our current inventory of premium electric vehicles ready for immediate rental.
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {filteredVehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        damping: 25,
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="transform transition-all duration-500 hover:scale-105">
                        <VehicleCard vehicle={vehicle} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Tesla Cards Carousel with enhanced styling */}
            <motion.section 
              className="py-24 bg-gradient-to-b from-unity-midnight to-unity-charcoal"
              variants={itemVariants}
            >
              <TeslaCardCarousel />
            </motion.section>
            
            {/* SparklesPreviewTesla Showcase */}
            <motion.div variants={itemVariants}>
              <SparklesPreviewTesla />
            </motion.div>

            {/* Interactive Gallery with Tesla-style presentation */}
            <motion.section 
              className="py-24 md:py-32 bg-unity-charcoal"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Gallery
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Experience our collection through immersive imagery showcasing design and innovation.
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <InteractiveGallery
                    items={showcaseItems}
                    columns={2}
                    aspectRatio={16/9}
                  />
                </motion.div>
              </div>
            </motion.section>
            
            {/* Featured 3D Vehicle with Tesla-style minimal approach */}
            <motion.section 
              className="py-24 md:py-32 bg-gradient-to-b from-unity-charcoal to-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Experience
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Interactive showcase with immersive details.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <ThreeDCardDemo />
                </motion.div>
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.div variants={itemVariants}>
              <FeaturesSection />
            </motion.div>
            
            {/* Map Section with Tesla-style minimal design */}
            <motion.section 
              className="py-24 md:py-32 bg-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Find Nearby
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Track available vehicles and charging stations in real-time.
                  </motion.p>
                </div>
                
                <motion.div 
                  className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Map className="w-full h-[600px] rounded-2xl" />
                </motion.div>
              </div>
            </motion.section>
            
            {/* Tesla Models Section */}
            <motion.section 
              className="py-24 md:py-32 bg-gradient-to-b from-unity-midnight to-black"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Our Fleet
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Explore our complete lineup of premium electric vehicles.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <ExpandableCardDemoStandard />
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
        </PageTransition>
      </MainLayout>
    </AdaptiveLayoutProvider>
  );
};

export default Index;
