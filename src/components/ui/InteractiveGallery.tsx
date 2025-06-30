
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import MediaShowcase from './MediaShowcase';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface InteractiveGalleryProps {
  items: GalleryItem[];
  className?: string;
  columns?: number;
  aspectRatio?: number;
}

const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({
  items,
  className = '',
  columns = 3,
  aspectRatio = 16/9
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openShowcase = (index: number) => {
    setSelectedIndex(index);
  };

  const closeShowcase = () => {
    setSelectedIndex(null);
  };

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      <div className={`grid ${gridCols} gap-6 ${className}`}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => openShowcase(index)}
          >
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <AspectRatio ratio={aspectRatio}>
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    muted
                    loop
                    autoPlay={hoveredIndex === index}
                    playsInline
                  />
                ) : (
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt || `Gallery item ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </AspectRatio>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

              {/* Expand Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Video Play Indicator */}
              {item.type === 'video' && (
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                    Video
                  </div>
                </div>
              )}

              {/* Title Overlay */}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  {item.description && (
                    <p className="text-white/80 text-xs mt-1">{item.description}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Media Showcase */}
      <MediaShowcase
        items={items}
        initialIndex={selectedIndex || 0}
        isOpen={selectedIndex !== null}
        onClose={closeShowcase}
      />
    </>
  );
};

export default InteractiveGallery;
