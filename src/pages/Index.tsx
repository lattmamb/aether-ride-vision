
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
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
import SectionHeader from '@/components/sections/SectionHeader';
import VehicleShowcaseSection from '@/components/sections/VehicleShowcaseSection';
import IllinoisHero from '@/components/illinois/IllinoisHero';
import IllinoisTransitBadge from '@/components/ui/IllinoisTransitBadge';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (filters: {
    query: string;
    vehicleType: string;
    location: string;
    dateRange: string;
  }) => {
    setIsLoading(true);
    
    setTimeout(() => {
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
      setIsLoading(false);
    }, 800);
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
      <Helmet>
        <title>Unity Fleet - Premium Electric Vehicle Rentals in Illinois | Clean Energy Transit</title>
        <meta name="description" content="Experience premium electric vehicle rentals across Illinois. Unity Fleet offers clean energy transportation in Chicago, Naperville, Springfield, and throughout Illinois. 100% renewable energy powered." />
        <meta name="keywords" content="electric vehicle rental, Illinois, Chicago, clean energy, sustainable transportation, EV rental, Tesla rental, Unity Fleet, renewable energy, Illinois transit" />
        <link rel="canonical" href="https://unityfleet.com/" />
      </Helmet>
      
      <MainLayout>
        <PageTransition>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            {/* Enhanced Illinois-focused Hero Section */}
            <motion.div variants={itemVariants}>
              <IllinoisHero />
            </motion.div>

            {/* Illinois Transit Network Badge Section */}
            <motion.section 
              className="py-8 bg-unity-charcoal"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6 text-center">
                <IllinoisTransitBadge 
                  location="Chicago Metro Area"
                  renewable={94}
                  type="mixed"
                  variant="default"
                />
              </div>
            </motion.section>

            {/* Search Section with Illinois-specific enhancements */}
            <motion.section 
              className="py-16 md:py-24 bg-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <SectionHeader 
                    title="Find Your Ride"
                    subtitle="Search across Illinois' largest premium electric vehicle network"
                  />
                  <SearchFilter onSearch={handleSearch} />
                  
                  {/* Loading State */}
                  {isLoading && (
                    <div className="mt-8 flex justify-center">
                      <LoadingSpinner 
                        variant="car" 
                        text="Searching Illinois network..."
                        size="lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.section>

            {/* Tesla Vehicles Parallax Showcase */}
            <motion.div variants={itemVariants}>
              <TeslaVehiclesParallax />
            </motion.div>
            
            {/* Available Vehicles Section with Illinois context */}
            <VehicleShowcaseSection vehicles={filteredVehicles} variants={itemVariants} />

            {/* Illinois-enhanced Tesla Cards Carousel */}
            <motion.section 
              className="py-24 bg-gradient-to-b from-unity-midnight to-unity-charcoal"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6 mb-8">
                <SectionHeader 
                  title="Illinois Locations"
                  subtitle="Premium electric vehicle access across the Prairie State"
                />
              </div>
              <TeslaCardCarousel />
            </motion.section>
            
            {/* SparklesPreviewTesla Showcase */}
            <motion.div variants={itemVariants}>
              <SparklesPreviewTesla />
            </motion.div>

            {/* Interactive Gallery with Illinois focus */}
            <motion.section 
              className="py-24 md:py-32 bg-unity-charcoal"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <SectionHeader 
                  title="Gallery"
                  subtitle="Experience our collection through immersive imagery showcasing design and innovation across Illinois."
                />
                
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
            
            {/* Featured 3D Vehicle with Illinois context */}
            <motion.section 
              className="py-24 md:py-32 bg-gradient-to-b from-unity-charcoal to-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <SectionHeader 
                  title="Experience"
                  subtitle="Interactive showcase of Illinois' premier electric vehicle fleet."
                />
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

            {/* Enhanced Features Section */}
            <motion.div variants={itemVariants}>
              <FeaturesSection />
            </motion.div>
            
            {/* Illinois-focused Map Section */}
            <motion.section 
              className="py-24 md:py-32 bg-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <SectionHeader 
                  title="Illinois Network"
                  subtitle="Track available vehicles and charging stations across Illinois in real-time. From Chicago to Springfield, our network covers the entire state."
                />
                
                <motion.div 
                  className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Map 
                    className="w-full h-[600px] rounded-2xl" 
                    center={{ lat: 40.6331, lng: -89.3985 }} 
                    zoom={7}
                    showCleanEnergy={true}
                  />
                </motion.div>
              </div>
            </motion.section>
            
            {/* Illinois Fleet Section */}
            <motion.section 
              className="py-24 md:py-32 bg-gradient-to-b from-unity-midnight to-black"
              variants={itemVariants}
            >
              <div className="container mx-auto px-6">
                <SectionHeader 
                  title="Our Illinois Fleet"
                  subtitle="Explore our complete lineup of premium electric vehicles available throughout the Land of Lincoln."
                />
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
            
            {/* Available Vehicles Section */}
            <VehicleShowcaseSection vehicles={filteredVehicles} variants={itemVariants} />

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
                <SectionHeader 
                  title="Gallery"
                  subtitle="Experience our collection through immersive imagery showcasing design and innovation."
                />
                
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
                <SectionHeader 
                  title="Experience"
                  subtitle="Interactive showcase with immersive details."
                />
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
                <SectionHeader 
                  title="Find Nearby"
                  subtitle="Track available vehicles and charging stations in real-time."
                />
                
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
                <SectionHeader 
                  title="Our Fleet"
                  subtitle="Explore our complete lineup of premium electric vehicles."
                />
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
