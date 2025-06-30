import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Palette, RotateCcw, Maximize2, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Vehicle } from '@/types';
import { useAdaptiveLayout } from '@/contexts/AdaptiveLayoutContext';

interface EnhancedVehicleViewerProps {
  vehicle: Vehicle;
  selectedColor: string;
  onColorChange: (color: string) => void;
  className?: string;
}

const EnhancedVehicleViewer: React.FC<EnhancedVehicleViewerProps> = ({
  vehicle,
  selectedColor,
  onColorChange,
  className = ''
}) => {
  const { deviceType, reducedMotion } = useAdaptiveLayout();
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedView, setSelectedView] = useState<'exterior' | 'interior'>('exterior');
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  // Enhanced image selection with Tesla authentic images
  const getCurrentImage = () => {
    if (selectedView === 'interior' && vehicle.interiorImages) {
      return vehicle.interiorImages[currentAngle] || vehicle.interiorImages[0] || vehicle.image;
    }
    
    if (selectedView === 'exterior' && vehicle.angleImages && vehicle.angleImages[currentAngle]) {
      const angleSet = vehicle.angleImages[currentAngle];
      if (angleSet[selectedColor]) {
        return angleSet[selectedColor];
      }
    }
    
    // Fallback to color-specific image
    if (vehicle.colorImages && vehicle.colorImages[selectedColor]) {
      return vehicle.colorImages[selectedColor];
    }
    
    return vehicle.image;
  };

  // Preload images for smooth transitions
  useEffect(() => {
    const preloadImages = () => {
      angles.forEach(angle => {
        if (vehicle.angleImages && vehicle.angleImages[angle] && vehicle.angleImages[angle][selectedColor]) {
          const img = new Image();
          img.src = vehicle.angleImages[angle][selectedColor];
        }
        if (vehicle.interiorImages && vehicle.interiorImages[angle]) {
          const img = new Image();
          img.src = vehicle.interiorImages[angle];
        }
      });
    };
    preloadImages();
  }, [selectedColor, vehicle]);

  // Auto-rotation functionality
  useEffect(() => {
    if (isRotating && !reducedMotion) {
      const interval = setInterval(() => {
        setCurrentAngle(prev => (prev + 45) % 360);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isRotating, reducedMotion]);

  const handleAngleChange = (newAngle: number) => {
    setIsLoading(true);
    setCurrentAngle(newAngle);
    setTimeout(() => setIsLoading(false), 200);
  };

  const nextAngle = () => handleAngleChange((currentAngle + 45) % 360);
  const prevAngle = () => handleAngleChange((currentAngle - 45 + 360) % 360);

  const resetView = () => {
    setCurrentAngle(0);
    setIsRotating(false);
  };

  const handleViewChange = (view: 'exterior' | 'interior') => {
    setIsLoading(true);
    setSelectedView(view);
    setTimeout(() => setIsLoading(false), 150);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Main Viewer Container */}
      <div className={`
        glass-card rounded-3xl overflow-hidden backdrop-blur-luxury
        ${isFullscreen ? 'fixed inset-4 z-50' : 'aspect-[16/10]'}
        border border-unity-platinum/20 shadow-unity-premium
      `}>
        {/* Enhanced Header Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
          {/* View Toggle */}
          <div className="flex gap-2">
            <Button
              variant={selectedView === 'exterior' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleViewChange('exterior')}
              className={`glass-effect font-display transition-all duration-300 ${
                selectedView === 'exterior' 
                  ? 'bg-unity-purple text-white border-unity-purple' 
                  : 'text-unity-platinum border-unity-platinum/30 hover:border-unity-purple/50'
              }`}
            >
              <Eye className="w-4 h-4 mr-2" />
              Exterior
            </Button>
            <Button
              variant={selectedView === 'interior' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleViewChange('interior')}
              className={`glass-effect font-display transition-all duration-300 ${
                selectedView === 'interior' 
                  ? 'bg-unity-purple text-white border-unity-purple' 
                  : 'text-unity-platinum border-unity-platinum/30 hover:border-unity-purple/50'
              }`}
            >
              <Zap className="w-4 h-4 mr-2" />
              Interior
            </Button>
          </div>

          {/* Action Controls */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRotating(!isRotating)}
              className={`glass-effect font-display transition-all duration-300 ${
                isRotating 
                  ? 'bg-unity-signature/20 text-unity-signature border-unity-signature/50' 
                  : 'text-unity-platinum border-unity-platinum/30 hover:border-unity-signature/50'
              }`}
            >
              <RotateCcw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetView}
              className="glass-effect text-unity-platinum border-unity-platinum/30 hover:border-unity-champagne/50 font-display"
            >
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="glass-effect text-unity-platinum border-unity-platinum/30 hover:border-unity-teal/50 font-display"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Vehicle Display with Tesla Images */}
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-unity-midnight/50 via-unity-charcoal/30 to-unity-purple/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedView}-${currentAngle}-${selectedColor}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: reducedMotion ? 0.1 : 0.4, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-unity-midnight/20 backdrop-blur-sm z-10">
                  <div className="w-8 h-8 border-2 border-unity-champagne border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <img
                src={getCurrentImage()}
                alt={`Tesla ${vehicle.model} ${selectedView} view - ${currentAngle}°`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(107, 70, 193, 0.2))',
                  maxHeight: '85%',
                  maxWidth: '90%'
                }}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevAngle}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect text-unity-platinum border-unity-platinum/30 w-12 h-12 rounded-full hover:bg-unity-champagne/10 hover:border-unity-champagne/50 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextAngle}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect text-unity-platinum border-unity-platinum/30 w-12 h-12 rounded-full hover:bg-unity-champagne/10 hover:border-unity-champagne/50 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Enhanced Angle Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 glass-effect p-2 rounded-full">
          {angles.map((angle) => (
            <button
              key={angle}
              onClick={() => handleAngleChange(angle)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentAngle === angle 
                  ? 'bg-unity-champagne scale-125 shadow-unity-luxury' 
                  : 'bg-unity-platinum/30 hover:bg-unity-platinum/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Color Palette - Only show for exterior view */}
      {selectedView === 'exterior' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 glass-card p-6 rounded-2xl backdrop-blur-luxury border border-unity-platinum/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-unity-champagne/20">
              <Palette className="w-5 h-5 text-unity-champagne" />
            </div>
            <span className="text-unity-platinum font-display font-semibold">Color Selection</span>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            {vehicle.colors.map((color) => (
              <motion.button
                key={color}
                onClick={() => onColorChange(color)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === color 
                    ? 'border-unity-champagne shadow-unity-luxury scale-110' 
                    : 'border-unity-platinum/30 hover:border-unity-champagne/50'
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <div className="absolute inset-0 rounded-full border-2 border-unity-champagne/50 flex items-center justify-center">
                    <div className="w-3 h-3 bg-unity-champagne rounded-full shadow-lg" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Enhanced Vehicle Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 glass-card p-6 rounded-2xl backdrop-blur-luxury border border-unity-platinum/20"
      >
        <h3 className="text-xl font-display font-bold gradient-luxury-text mb-2">
          Tesla {vehicle.model}
        </h3>
        <p className="text-unity-platinum/70 font-body text-sm mb-4">{vehicle.tagline}</p>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center p-3 glass-effect rounded-lg">
            <div className="text-unity-teal font-display font-bold text-lg">{vehicle.performance.range}mi</div>
            <div className="text-unity-platinum/60 font-body">Range</div>
          </div>
          <div className="text-center p-3 glass-effect rounded-lg">
            <div className="text-unity-signature font-display font-bold text-lg">{vehicle.performance.acceleration}s</div>
            <div className="text-unity-platinum/60 font-body">0-60 mph</div>
          </div>
          <div className="text-center p-3 glass-effect rounded-lg">
            <div className="text-unity-champagne font-display font-bold text-lg">{vehicle.performance.topSpeed}mph</div>
            <div className="text-unity-platinum/60 font-body">Top Speed</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedVehicleViewer;
