
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
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Heart, Info, CheckCircle } from 'lucide-react';
import { AdaptiveLayoutProvider, useAdaptiveLayout } from '@/contexts/AdaptiveLayoutContext';
import { useToast } from '@/hooks/use-toast';

const VehicleDetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === id);
  const { deviceType, reducedMotion } = useAdaptiveLayout();
  const { toast } = useToast();
  
  const [selectedColor, setSelectedColor] = useState(vehicle?.colors[0] || '#FFFFFF');
  const [selectedPlan, setSelectedPlan] = useState(subscriptionPlans[1]?.id || '');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAvailabilityInfo, setShowAvailabilityInfo] = useState(false);
  
  if (!vehicle) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="glass-card p-12 max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4 gradient-purple-text">Vehicle Not Found</h2>
          <p className="mb-8 text-unity-platinum/70">The requested vehicle could not be found.</p>
          <Link to="/vehicles">
            <Button className="btn-unity-primary">
              Browse Vehicles
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? 
        `${vehicle.model} has been removed from your wishlist` : 
        `${vehicle.model} has been added to your wishlist`,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Tesla ${vehicle.model}`,
          text: vehicle.tagline,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Vehicle link has been copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-unity-midnight via-unity-charcoal to-unity-midnight">
      <div className="container mx-auto px-4 py-8 mt-14 md:mt-20">
        {/* Enhanced Header with Navigation */}
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5 }}
        >
          <div className="flex items-center gap-4">
            <Link to="/vehicles">
              <Button variant="outline" size="sm" className="glass-effect border-unity-platinum/20 text-unity-platinum hover:bg-unity-platinum/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            
            {/* Breadcrumb */}
            <div className="hidden md:flex text-sm text-unity-platinum/60 items-center gap-2">
              <Link to="/" className="hover:text-unity-champagne transition-colors">Home</Link>
              <span>/</span>
              <Link to="/vehicles" className="hover:text-unity-champagne transition-colors">Vehicles</Link>
              <span>/</span>
              <span className="text-unity-platinum">{vehicle.model}</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWishlistToggle}
              className={`glass-effect border-unity-platinum/20 transition-all duration-300 ${
                isWishlisted 
                  ? 'text-unity-champagne border-unity-champagne/50 bg-unity-champagne/10' 
                  : 'text-unity-platinum hover:text-unity-champagne hover:border-unity-champagne/30'
              }`}
            >
              <Heart className={`w-4 h-4 mr-2 transition-all ${isWishlisted ? 'fill-current' : ''}`} />
              {isWishlisted ? 'Saved' : 'Save'}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
              className="glass-effect border-unity-platinum/20 text-unity-platinum hover:text-unity-signature hover:border-unity-signature/30"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Enhanced Vehicle Title Section */}
        <motion.div 
          className="mb-8 glass-card p-8 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 gradient-luxury-text">
                Tesla {vehicle.model}
              </h1>
              <p className="text-xl text-unity-platinum/80 mb-4 font-body">{vehicle.tagline}</p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="text-3xl font-display font-bold gradient-accent-text">
                  ${vehicle.price}
                  <span className="text-lg font-body font-normal text-unity-platinum/70 ml-1">
                    {vehicle.priceUnit}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  {vehicle.available ? (
                    <div className="flex items-center bg-unity-teal/20 text-unity-teal px-4 py-2 rounded-full border border-unity-teal/30">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="font-medium">Available Now</span>
                    </div>
                  ) : (
                    <div className="flex items-center bg-unity-champagne/20 text-unity-champagne px-4 py-2 rounded-full border border-unity-champagne/30">
                      <Info className="w-4 h-4 mr-2" />
                      <span className="font-medium">Coming Soon</span>
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAvailabilityInfo(!showAvailabilityInfo)}
                    className="text-unity-platinum/60 hover:text-unity-platinum"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <AnimatePresence>
                {showAvailabilityInfo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 glass-card rounded-xl"
                  >
                    <p className="text-sm text-unity-platinum/70">
                      {vehicle.available 
                        ? "This vehicle is currently available for immediate booking and delivery."
                        : "This vehicle is in development and will be available for pre-order soon. Join our waitlist to be notified."
                      }
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Key Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.2 }}
        >
          <KeyStatsDashboard vehicle={vehicle} />
        </motion.div>

        {/* Enhanced Main Content Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Vehicle Viewer and Details */}
          <div className="xl:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.3 }}
            >
              <InteractiveVehicleViewer
                vehicle={vehicle}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.4 }}
            >
              <AvailabilityTracker
                vehicleId={vehicle.id}
                vehicleModel={vehicle.model}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.5 }}
            >
              <VehicleDetailsTabs vehicle={vehicle} />
            </motion.div>
          </div>

          {/* Right Column - Enhanced Configuration Panel */}
          <motion.div 
            className="xl:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.3 }}
          >
            <ConfigurationPanel
              vehicle={vehicle}
              plans={subscriptionPlans}
              selectedPlan={selectedPlan}
              onPlanChange={setSelectedPlan}
            />
          </motion.div>
        </div>

        {/* Enhanced Related Vehicles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.5, delay: 0.6 }}
        >
          <RelatedVehicles currentVehicleId={vehicle.id} vehicles={vehicles} />
        </motion.div>
      </div>
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
