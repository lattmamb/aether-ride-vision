import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import SearchFilter from '@/components/SearchFilter';
import VehicleCard from '@/components/VehicleCard';
import FeaturesSection from '@/components/FeaturesSection';
import Map from '@/components/Map';
import { vehicles } from '@/data/vehicles';
import TeslaVehiclesParallax from '@/components/TeslaVehiclesParallax';
import ThreeDCardDemo from '@/components/ui/3d-card-demo';
import ExpandableCardDemoStandard from '@/components/ui/expandable-card-demo-standard';
import { SparklesPreviewTesla } from '@/components/ui/sparkles-demo';
import TeslaCardCarousel from '@/components/TeslaCardCarousel';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import MediaGrid from '@/components/ui/MediaGrid';
import VehicleVideoPlayer from '@/components/ui/VehicleVideoPlayer';
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

    // Filter by query (model name)
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(
        (vehicle) => vehicle.model.toLowerCase().includes(query)
      );
    }

    // Filter by vehicle type
    if (filters.vehicleType !== 'all') {
      results = results.filter(
        (vehicle) => vehicle.type === filters.vehicleType
      );
    }

    setFilteredVehicles(results);
  };

  // Sample media gallery items showcasing Tesla vehicles
  const vehicleGalleryItems = [
    {
      type: 'video' as const,
      src: 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Performance-Desktop.mp4',
      title: 'Tesla Model S Performance',
      description: 'Experience the ultimate in electric luxury performance',
      category: 'performance'
    },
    {
      type: 'image' as const,
      src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.png',
      title: 'Tesla Model 3 Interior',
      description: 'Minimalist design meets advanced technology',
      category: 'interior'
    },
    {
      type: 'video' as const,
      src: 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-X-Falcon-Wing-Doors.mp4',
      title: 'Model X Falcon Wing Doors',
      description: 'Revolutionary design for ultimate accessibility',
      category: 'features',
      featured: true
    },
    {
      type: 'image' as const,
      src: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Hero-Desktop.png',
      title: 'Cybertruck Design',
      description: 'The future of electric trucks',
      category: 'exterior'
    }
  ];

  const featuredVideoItems = [
    {
      type: 'image' as const,
      src: '/lovable-uploads/011215ed-22f9-4462-8492-3cdff3c58719.png',
      title: 'Tesla Model S',
      description: 'Premium electric sedan'
    },
    {
      type: 'image' as const,
      src: '/lovable-uploads/87310600-2a51-4edd-a0b3-4ae26fc44398.png',
      title: 'Tesla Interior',
      description: 'Luxury redefined'
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
            {/* Enhanced Search Section */}
            <motion.div 
              className="container mx-auto px-4 pt-8"
              variants={itemVariants}
            >
              <SearchFilter onSearch={handleSearch} />
            </motion.div>

            {/* Featured Video Section with Enhanced Styling */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-unity-midnight via-unity-charcoal to-unity-midnight relative overflow-hidden"
              variants={itemVariants}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-unity-purple/5 to-unity-teal/5 opacity-20" />
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="mb-12 text-center">
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Experience Tesla
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Watch our vehicles in action and discover the future of electric mobility through immersive experiences
                  </motion.p>
                </div>
                
                <motion.div 
                  className="max-w-5xl mx-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <VehicleVideoPlayer
                    src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Tesla-Fleet-Showcase.mp4"
                    poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png"
                    title="Tesla Fleet Showcase"
                    autoPlay={false}
                    muted={true}
                    controls={true}
                  />
                </motion.div>
              </div>
            </motion.section>

            {/* Enhanced Interactive Vehicle Gallery */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-unity-charcoal/30 to-unity-midnight"
              variants={itemVariants}
            >
              <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Vehicle Gallery</h2>
                  <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
                    Explore our Tesla collection through immersive imagery and videos showcasing every detail
                  </p>
                </div>
                
                <InteractiveGallery
                  items={featuredVideoItems}
                  columns={2}
                  aspectRatio={16/9}
                />
              </div>
            </motion.section>

            {/* Tesla Vehicles Parallax Showcase */}
            <motion.div variants={itemVariants}>
              <TeslaVehiclesParallax />
            </motion.div>
            
            {/* Tesla Cards Carousel with Enhanced Styling */}
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
            
            {/* Media Grid Showcase with Enhanced Design */}
            <motion.section 
              className="py-20 bg-gradient-to-br from-unity-midnight via-unity-charcoal/50 to-unity-midnight relative"
              variants={itemVariants}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-unity-purple rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-unity-teal rounded-full blur-[100px]" />
              </div>
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Tesla Highlights</h2>
                  <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10 leading-relaxed">
                    Discover the innovation, performance, and luxury that defines Tesla through curated content
                  </p>
                </div>
                
                <MediaGrid
                  items={vehicleGalleryItems}
                  masonry={false}
                />
              </div>
            </motion.section>
            
            {/* Available Vehicles Section with Enhanced Cards */}
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

            {/* Enhanced Featured Vehicle Section */}
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

            <motion.div variants={itemVariants}>
              <FeaturesSection />
            </motion.div>
            
            {/* Enhanced Map Section */}
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
            
            {/* Enhanced Tesla Models Section */}
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
