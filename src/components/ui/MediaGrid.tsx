
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Video } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import MediaShowcase from './MediaShowcase';

interface MediaGridItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  category?: string;
  featured?: boolean;
}

interface MediaGridProps {
  items: MediaGridItem[];
  className?: string;
  masonry?: boolean;
}

const MediaGrid: React.FC<MediaGridProps> = ({
  items,
  className = '',
  masonry = false
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category).filter(Boolean)))];
  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const openShowcase = (index: number) => {
    const originalIndex = items.findIndex(item => item === filteredItems[index]);
    setSelectedIndex(originalIndex);
  };

  const closeShowcase = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      {/* Filter Tabs */}
      {categories.length > 1 && (
        <div className="flex gap-2 mb-8 justify-center flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-unity-purple text-white'
                  : 'bg-unity-platinum/10 text-unity-platinum hover:bg-unity-platinum/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Media Grid */}
      <div className={`
        ${masonry 
          ? 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6' 
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        } ${className}
      `}>
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            className={`group cursor-pointer ${masonry ? 'break-inside-avoid' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            onClick={() => openShowcase(index)}
          >
            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-unity-champagne text-unity-midnight">
                    Featured
                  </Badge>
                </div>
              )}

              {/* Media Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="outline" className="glass-effect border-white/30 text-white">
                  {item.type === 'video' ? <Video className="w-3 h-3 mr-1" /> : <ImageIcon className="w-3 h-3 mr-1" />}
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </Badge>
              </div>

              <AspectRatio ratio={masonry ? undefined : 16/9} className={masonry ? 'aspect-auto' : ''}>
                {item.type === 'video' ? (
                  <div className="relative">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-black ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.title || `Media item ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </AspectRatio>

              {/* Content Overlay */}
              {(item.title || item.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title && (
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="text-white/80 text-sm">{item.description}</p>
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

export default MediaGrid;
