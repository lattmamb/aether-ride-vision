
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Palette, RotateCcw, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Vehicle } from '@/types';
import { useAdaptiveLayout } from '@/contexts/AdaptiveLayoutContext';

interface SmartVehicleViewerProps {
  vehicle: Vehicle;
  selectedColor: string;
  onColorChange: (color: string) => void;
  className?: string;
}

const SmartVehicleViewer: React.FC<SmartVehicleViewerProps> = ({
  vehicle,
  selectedColor,
  onColorChange,
  className = ''
}) => {
  const { deviceType, reducedMotion, screenSize } = useAdaptiveLayout();
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedView, setSelectedView] = useState<'exterior' | 'interior'>('exterior');
  const containerRef = useRef<HTMLDivElement>(null);

  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const views = {
    exterior: [
      '/lovable-uploads/011215ed-22f9-4462-8492-3cdff3c58719.png',
      '/lovable-uploads/87310600-2a51-4edd-a0b3-4ae26fc44398.png'
    ],
    interior: [
      '/lovable-uploads/011215ed-22f9-4462-8492-3cdff3c58719.png'
    ]
  };

  // Auto-rotation functionality
  useEffect(() => {
    if (isRotating && !reducedMotion) {
      const interval = setInterval(() => {
        setCurrentAngle(prev => (prev + 45) % 360);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isRotating, reducedMotion]);

  const nextAngle = () => {
    setCurrentAngle(prev => (prev + 45) % 360);
  };

  const prevAngle = () => {
    setCurrentAngle(prev => (prev - 45 + 360) % 360);
  };

  const resetView = () => {
    setCurrentAngle(0);
    setIsRotating(false);
  };

  // Fixed condition check for mobile layout
  const isMobileLayout = screenSize === 'mobile';
  const showColorPalette = !isMobileLayout;

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Main Viewer Container */}
      <div className={`
        glass-card rounded-3xl overflow-hidden
        ${isFullscreen ? 'fixed inset-4 z-50' : 'aspect-[16/10]'}
        ${isMobileLayout ? 'mx-2' : ''}
      `}>
        {/* Header Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
          {/* View Toggle */}
          <div className="flex gap-2">
            <Button
              variant={selectedView === 'exterior' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedView('exterior')}
              className="glass-effect text-white border-white/20"
            >
              Exterior
            </Button>
            <Button
              variant={selectedView === 'interior' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedView('interior')}
              className="glass-effect text-white border-white/20"
            >
              Interior
            </Button>
          </div>

          {/* Action Controls */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRotating(!isRotating)}
              className={`glass-effect text-white border-white/20 ${isRotating ? 'bg-brand-purple/20' : ''}`}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetView}
              className="glass-effect text-white border-white/20"
            >
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="glass-effect text-white border-white/20"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Vehicle Display */}
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-purple/5 to-brand-accent-blue/5">
          <motion.div
            key={`${selectedView}-${currentAngle}`}
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.6, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <img
              src={views[selectedView][0]}
              alt={`${vehicle.model} ${selectedView} view`}
              className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
              style={{
                filter: `hue-rotate(${selectedColor === '#FF0000' ? '0deg' : selectedColor === '#0000FF' ? '240deg' : '0deg'}) drop-shadow(0 20px 40px rgba(0,0,0,0.3))`
              }}
            />
          </motion.div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevAngle}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect text-white border-white/20 w-12 h-12 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextAngle}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect text-white border-white/20 w-12 h-12 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Angle Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {angles.map((angle) => (
            <button
              key={angle}
              onClick={() => setCurrentAngle(angle)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentAngle === angle ? 'bg-brand-purple scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Color Palette */}
      {showColorPalette && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 glass-card p-4 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <Palette className="w-5 h-5 text-brand-purple" />
            <span className="text-white font-medium">Color Options</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            {vehicle.colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className={`w-12 h-12 rounded-full border-2 transition-all hover:scale-110 ${
                  selectedColor === color ? 'border-brand-purple shadow-lg shadow-brand-purple/30' : 'border-white/30'
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <div className="w-full h-full rounded-full border-2 border-white/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Vehicle Info Overlay */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 glass-card p-4 rounded-2xl"
      >
        <h3 className="text-xl font-bold gradient-purple-text mb-2">
          Tesla {vehicle.model}
        </h3>
        <p className="text-white/70 text-sm mb-3">{vehicle.tagline}</p>
        <div className="flex gap-4 text-sm">
          <div className="text-center">
            <div className="text-brand-accent-green font-bold">{vehicle.performance.range}mi</div>
            <div className="text-white/60">Range</div>
          </div>
          <div className="text-center">
            <div className="text-brand-purple font-bold">{vehicle.performance.acceleration}s</div>
            <div className="text-white/60">0-60 mph</div>
          </div>
          <div className="text-center">
            <div className="text-brand-accent-blue font-bold">{vehicle.performance.topSpeed}mph</div>
            <div className="text-white/60">Top Speed</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmartVehicleViewer;
