
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  className?: string;
  children?: React.ReactNode;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  fallbackImage,
  className = '',
  children,
  autoPlay = true,
  muted = true,
  loop = true,
  overlay = true,
  overlayOpacity = 0.4
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && canPlay && autoPlay) {
      video.play().catch(() => {
        console.log('Video autoplay was prevented');
      });
    }
  }, [canPlay, autoPlay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onCanPlay={() => setCanPlay(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Image */}
      {fallbackImage && (
        <img
          src={fallbackImage}
          alt="Video fallback"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: canPlay ? 'none' : 'block' }}
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Play/Pause Control */}
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="absolute bottom-4 right-4 text-white hover:bg-white/20 backdrop-blur-sm"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </Button>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
