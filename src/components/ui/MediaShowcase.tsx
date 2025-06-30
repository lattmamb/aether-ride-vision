
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface MediaShowcaseProps {
  items: MediaItem[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const MediaShowcase: React.FC<MediaShowcaseProps> = ({
  items,
  initialIndex = 0,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  
  const currentItem = items[currentIndex];
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  
  const togglePlay = () => {
    const video = document.querySelector('video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    const video = document.querySelector('video');
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh] p-0 bg-black/95 border-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>
          
          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 w-12 h-12"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:bg-white/20 w-12 h-12"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}
          
          {/* Media Content */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                <AspectRatio ratio={16/9} className="w-full max-w-6xl">
                  {currentItem?.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={currentItem.src}
                        autoPlay={isPlaying}
                        muted={isMuted}
                        loop
                        className="w-full h-full object-contain"
                        controls={false}
                      />
                      
                      {/* Video Controls */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={togglePlay}
                          className="text-white hover:bg-white/20"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleMute}
                          className="text-white hover:bg-white/20"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentItem?.src}
                      alt={currentItem?.alt || 'Media showcase'}
                      className="w-full h-full object-contain"
                    />
                  )}
                </AspectRatio>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Media Info */}
          {(currentItem?.title || currentItem?.description) && (
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-4 max-w-md"
              >
                {currentItem.title && (
                  <h3 className="text-lg font-semibold mb-2">{currentItem.title}</h3>
                )}
                {currentItem.description && (
                  <p className="text-sm text-white/80">{currentItem.description}</p>
                )}
              </motion.div>
            </div>
          )}
          
          {/* Media Counter */}
          {items.length > 1 && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white">
              <div className="glass-card px-3 py-1 text-sm">
                {currentIndex + 1} / {items.length}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaShowcase;
