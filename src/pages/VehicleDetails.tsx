
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { vehicles, subscriptionPlans } from '@/data/vehicles';
import InteractiveVehicleViewer from '@/components/vehicle-details/InteractiveVehicleViewer';
import ConfigurationPanel from '@/components/vehicle-details/ConfigurationPanel';
import KeyStatsDashboard from '@/components/vehicle-details/KeyStatsDashboard';
import AvailabilityTracker from '@/components/vehicle-details/AvailabilityTracker';
import VehicleDetailsTabs from '@/components/vehicle-details/VehicleDetailsTabs';
import RelatedVehicles from '@/components/vehicle-details/RelatedVehicles';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Heart } from 'lucide-react';
import { AdaptiveLayoutProvider, useAdaptiveLayout } from '@/contexts/AdaptiveLayoutContext';

const VehicleDetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === id);
  const { deviceType, reducedMotion } = useAdaptiveLayout();
  
  const [selectedColor, setSelectedColor] = useState(vehicle?.colors[0] || '#FFFFFF');
  const [selectedPlan, setSelectedPlan] = useState(subscriptionPlans[1]?.id || '');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-16 mt-14 md:mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Vehicle Not Found</h2>
        <p className="mb-8 text-white/70">The requested vehicle could not be found.</p>
        <Link to="/vehicles">
          <Button className="bg-tesla-blue hover:bg-tesla-blue/90 text-white">
            Browse Vehicles
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-14 md:mt-20">
      {/* Header with Navigation */}
      <motion.div 
        className={`flex ${deviceType === 'mobile' ? 'flex-col gap-4' : 'justify-between items-center'} mb-8`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.5 }}
      >
        <div className={`flex ${deviceType === 'mobile' ? 'flex-col' : 'items-center'} gap-4`}>
          <Link to="/vehicles">
            <Button variant="outline" size="sm" className="border-glass-border text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Vehicles
            </Button>
          </Link>
          {deviceType !== 'mobile' && (
            <div className="text-sm text-white/60">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/vehicles" className="hover:text-white">Vehicles</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{vehicle.model}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`border-glass-border ${isWishlisted ? 'text-red-400' : 'text-white'}`}
          >
            <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
            {isWishlisted ? 'Saved' : 'Save'}
          </Button>
          <Button variant="outline" size="sm" className="border-glass-border text-white">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </motion.div>

      {/* Vehicle Title */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.1 }}
      >
        <h1 className={`${deviceType === 'mobile' ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-[#9b87f5]/80 bg-clip-text text-transparent`}>
          Tesla {vehicle.model}
        </h1>
        <p className="text-xl text-white/80 mb-4">{vehicle.tagline}</p>
        <div className={`flex ${deviceType === 'mobile' ? 'flex-col gap-2' : 'items-center gap-4'}`}>
          <div className="text-3xl font-bold text-white">
            ${vehicle.price}<span className="text-lg font-normal text-white/70">{vehicle.priceUnit}</span>
          </div>
          {vehicle.available ? (
            <div className="bg-tesla-green text-white text-sm font-medium px-3 py-1 rounded-full w-fit">
              Available Now
            </div>
          ) : (
            <div className="bg-tesla-red/90 text-white text-sm font-medium px-3 py-1 rounded-full w-fit">
              Coming Soon
            </div>
          )}
        </div>
      </motion.div>

      {/* Key Stats Dashboard */}
      <KeyStatsDashboard vehicle={vehicle} />

      {/* Main Content Layout */}
      <div className={`grid ${deviceType === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-3'} gap-8 mb-12`}>
        {/* Left Column - Vehicle Viewer and Details */}
        <div className={`${deviceType === 'mobile' ? '' : 'xl:col-span-2'} space-y-8`}>
          {/* Interactive Vehicle Viewer */}
          <InteractiveVehicleViewer
            vehicle={vehicle}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />

          {/* Availability Tracker */}
          <AvailabilityTracker
            vehicleId={vehicle.id}
            vehicleModel={vehicle.model}
          />

          {/* Vehicle Details Tabs */}
          <VehicleDetailsTabs vehicle={vehicle} />
        </div>

        {/* Right Column - Configuration Panel */}
        <div className={`${deviceType === 'mobile' ? '' : 'xl:col-span-1'}`}>
          <ConfigurationPanel
            vehicle={vehicle}
            plans={subscriptionPlans}
            selectedPlan={selectedPlan}
            onPlanChange={setSelectedPlan}
          />
        </div>
      </div>

      {/* Related Vehicles */}
      <RelatedVehicles currentVehicleId={vehicle.id} vehicles={vehicles} />
    </div>
  );
};

const VehicleDetails = () => {
  return (
    <AdaptiveLayoutProvider>
      <MainLayout>
        <VehicleDetailsContent />
      </MainLayout>
    </AdaptiveLayoutProvider>
  );
};

export default VehicleDetails;
