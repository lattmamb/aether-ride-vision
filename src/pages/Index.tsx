
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
import IntelligentDashboard from '@/components/ui/IntelligentDashboard';
import InteractiveGallery from '@/components/ui/InteractiveGallery';
import MediaGrid from '@/components/ui/MediaGrid';
import VehicleVideoPlayer from '@/components/ui/VehicleVideoPlayer';
import { AdaptiveLayoutProvider } from '@/contexts/AdaptiveLayoutContext';

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

  return (
    <AdaptiveLayoutProvider>
      <MainLayout>
        <div className="container mx-auto px-4 pt-8">
          <SearchFilter onSearch={handleSearch} />
        </div>

        {/* Intelligent Dashboard Section */}
        <section className="py-16 bg-tesla-dark-50">
          <div className="container mx-auto px-4">
            <IntelligentDashboard />
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-16 bg-gradient-to-br from-unity-midnight via-unity-charcoal to-unity-midnight">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience Tesla</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Watch our vehicles in action and discover the future of electric mobility
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <VehicleVideoPlayer
                src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Tesla-Fleet-Showcase.mp4"
                poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png"
                title="Tesla Fleet Showcase"
                autoPlay={false}
                muted={true}
                controls={true}
              />
            </div>
          </div>
        </section>

        {/* Interactive Vehicle Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Vehicle Gallery</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Explore our Tesla collection through immersive imagery and videos
              </p>
            </div>
            
            <InteractiveGallery
              items={featuredVideoItems}
              columns={2}
              aspectRatio={16/9}
            />
          </div>
        </section>

        {/* Tesla Vehicles Parallax Showcase */}
        <TeslaVehiclesParallax />
        
        {/* Tesla Cards Carousel */}
        <div className="bg-tesla-dark-80 py-10">
          <TeslaCardCarousel />
        </div>
        
        {/* SparklesPreviewTesla Showcase */}
        <SparklesPreviewTesla />
        
        {/* Media Grid Showcase */}
        <section className="py-16 bg-gradient-to-br from-unity-midnight via-unity-charcoal/50 to-unity-midnight">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Tesla Highlights</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Discover the innovation, performance, and luxury that defines Tesla
              </p>
            </div>
            
            <MediaGrid
              items={vehicleGalleryItems}
              masonry={false}
            />
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">Available Now</h2>
              <p className="text-xl text-white/70 mb-8 text-center max-w-3xl mx-auto">
                Browse our current inventory of Tesla vehicles ready for immediate rental.
                Select your perfect electric ride and experience the future today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-tesla-dark-50">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Vehicle</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Experience our interactive 3D showcase of Tesla's finest vehicles.
              </p>
            </div>
            <ThreeDCardDemo />
          </div>
        </section>

        <FeaturesSection />
        
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Tesla Models</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Explore our lineup of premium electric vehicles. Click on any model to learn more.
              </p>
            </div>
            <ExpandableCardDemoStandard />
          </div>
        </section>
      </MainLayout>
    </AdaptiveLayoutProvider>
  );
};

export default Index;
