
import React, { useEffect, useRef } from 'react';
import VideoBackground from '@/components/ui/VideoBackground';

const HeroBackground: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      const bgElements = heroRef.current.querySelectorAll('.parallax-bg');
      bgElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="absolute inset-0 overflow-hidden">
      {/* Tesla-style Video Background with improved overlay */}
      <VideoBackground 
        src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop.mp4" 
        fallbackImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png" 
        className="absolute inset-0 w-full h-full" 
        overlay={true} 
        overlayOpacity={0.7} 
        autoPlay={true} 
        muted={true} 
        loop={true} 
      />
      
      {/* Enhanced background effects with Tesla-inspired gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl parallax-bg animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-unity-signature/10 via-transparent to-transparent rounded-full blur-3xl parallax-bg"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-unity-purple/5 to-transparent rounded-full blur-3xl parallax-bg animate-spin-slow"></div>
      </div>
      
      {/* Tesla-style gradient accent lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default HeroBackground;
