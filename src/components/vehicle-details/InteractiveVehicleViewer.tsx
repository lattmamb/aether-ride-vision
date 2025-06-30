
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { RotateCcw, ZoomIn, ZoomOut, Eye, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Vehicle } from '@/types';

interface InteractiveVehicleViewerProps {
  vehicle: Vehicle;
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const InteractiveVehicleViewer: React.FC<InteractiveVehicleViewerProps> = ({
  vehicle,
  selectedColor,
  onColorChange
}) => {
  const [isRotating, setIsRotating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [view, setView] = useState<'exterior' | 'interior'>('exterior');
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-300, 300], [-45, 45]);

  const handleRotateToggle = () => {
    setIsRotating(!isRotating);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleViewToggle = () => {
    setView(prev => prev === 'exterior' ? 'interior' : 'exterior');
  };

  const displayImage = vehicle.colorImages && selectedColor && vehicle.colorImages[selectedColor] 
    ? vehicle.colorImages[selectedColor] 
    : vehicle.image;

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      <div 
        ref={containerRef}
        className={`relative glass-card rounded-2xl overflow-hidden group ${
          isFullscreen ? 'h-full w-full' : 'h-96 md:h-[500px]'
        }`}
      >
        {/* Controls Overlay */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleRotateToggle}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleViewToggle}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <Eye className="w-4 h-4" />
            {view === 'exterior' ? 'Interior' : 'Exterior'}
          </Button>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleZoomIn}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleZoomOut}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Vehicle Display */}
        <div className="relative h-full flex items-center justify-center p-8">
          <motion.div
            className="relative"
            style={{
              rotateY: isRotating ? rotateY : 0,
              scale: zoom
            }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            dragElastic={0.1}
            onDrag={(_, info) => x.set(info.offset.x)}
            whileHover={{ scale: zoom * 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={displayImage}
              alt={`${vehicle.model} ${view}`}
              className="max-h-full max-w-full object-contain drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
          </motion.div>
        </div>

        {/* Color Selector */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            {vehicle.colors.map(color => (
              <motion.button
                key={color}
                onClick={() => onColorChange(color)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-8 w-8 rounded-full border-2 transition-all ${
                  selectedColor === color 
                    ? 'border-white scale-110 shadow-lg' 
                    : 'border-white/30 hover:border-white/60'
                }`}
                style={{ background: color }}
              />
            ))}
          </div>
        </div>

        {/* Rotation Indicator */}
        {isRotating && (
          <div className="absolute bottom-4 right-4 z-20 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">
            Drag to rotate
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveVehicleViewer;
