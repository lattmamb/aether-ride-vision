
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { RotateCcw, ZoomIn, ZoomOut, Maximize2, Eye, Camera } from 'lucide-react';
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
  const { deviceType, reducedMotion } = useAdaptiveLayout();
  const [isRotating, setIsRotating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [view, setView] = useState<'exterior' | 'interior'>('exterior');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateY = useTransform(x, [-300, 300], [-45, 45]);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });

  const displayImage = vehicle.colorImages && selectedColor && vehicle.colorImages[selectedColor] 
    ? vehicle.colorImages[selectedColor] 
    : vehicle.image;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleViewToggle = () => setView(prev => prev === 'exterior' ? 'interior' : 'exterior');

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = displayImage;
  }, [displayImage]);

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black/95' : ''} ${className}`}>
      <motion.div 
        ref={containerRef}
        className={`relative glass-card rounded-2xl overflow-hidden group ${
          isFullscreen ? 'h-full w-full' : 'h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'
        }`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.6 }}
      >
        {/* Enhanced Controls */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsRotating(!isRotating)}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleViewToggle}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">
              {view === 'exterior' ? 'Interior' : 'Exterior'}
            </span>
          </Button>
        </div>

        {/* Zoom and Fullscreen Controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleZoomIn}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleZoomOut}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Main Vehicle Display */}
        <div className="relative h-full flex items-center justify-center p-4 sm:p-8">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9b87f5]"></div>
            </div>
          )}
          
          <motion.div
            className="relative cursor-grab active:cursor-grabbing"
            style={{
              rotateY: isRotating && !reducedMotion ? springRotateY : 0,
              rotateX: isRotating && !reducedMotion ? springRotateX : 0,
              scale: zoom,
              perspective: 1000,
            }}
            drag={deviceType !== 'mobile'}
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
            dragElastic={0.1}
            onDrag={(_, info) => {
              if (isRotating) {
                x.set(info.offset.x);
                y.set(info.offset.y);
              }
            }}
            whileHover={!reducedMotion ? { scale: zoom * 1.02 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={displayImage}
              alt={`${vehicle.model} ${view}`}
              className={`max-h-full max-w-full object-contain drop-shadow-2xl transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                maxHeight: isFullscreen ? '80vh' : '100%'
              }}
            />
          </motion.div>
        </div>

        {/* Enhanced Color Selector */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: reducedMotion ? 0.1 : 0.5 }}
        >
          <div className="flex gap-3 bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
            {vehicle.colors.map((color, index) => (
              <motion.button
                key={color}
                onClick={() => onColorChange(color)}
                whileHover={!reducedMotion ? { scale: 1.2 } : undefined}
                whileTap={!reducedMotion ? { scale: 0.9 } : undefined}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: reducedMotion ? 0.1 : 0.3 }}
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === color 
                    ? 'border-white scale-110 shadow-lg ring-2 ring-[#9b87f5]/50' 
                    : 'border-white/30 hover:border-white/60 hover:shadow-md'
                }`}
                style={{ background: color }}
              />
            ))}
          </div>
        </motion.div>

        {/* Interaction Hints */}
        {isRotating && deviceType !== 'mobile' && (
          <motion.div 
            className="absolute bottom-4 right-4 z-20 text-white/70 text-sm bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {deviceType === 'mobile' ? 'Touch to explore' : 'Drag to rotate'}
          </motion.div>
        )}

        {/* Performance indicator for mobile */}
        {deviceType === 'mobile' && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/50 text-white/70 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
              Mobile Optimized
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SmartVehicleViewer;
