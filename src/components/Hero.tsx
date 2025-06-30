
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Zap, Shield, Sparkles, Play } from "lucide-react";
import AutomotiveButton from "@/components/ui/AutomotiveButton";
import PremiumCard from "@/components/ui/PremiumCard";
import HUDDisplay from "@/components/ui/HUDDisplay";
import VideoBackground from "@/components/ui/VideoBackground";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      
      {/* Main content with Tesla-inspired minimal layout */}
      <motion.div 
        className="container relative z-10 mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-12">
          
          {/* Tesla-style minimal badge */}
          <motion.div variants={itemVariants}>
            <PremiumCard variant="luxury" className="px-8 py-4 inline-flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="font-display font-light text-white tracking-wide text-sm uppercase">Premium Electric Fleet</span>
            </PremiumCard>
          </motion.div>

          {/* Tesla-style bold, minimal headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-white leading-none tracking-tight">
              <span className="block">Experience</span>
              <span className="block font-medium">Electric Excellence</span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
              Premium electric vehicles. Sustainable luxury. Uncompromising performance.
            </p>
          </motion.div>
          
          {/* Tesla-style minimal stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-2xl w-full">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">500+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Miles Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">5★</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Safety Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">25+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Fleet Models</div>
            </div>
          </motion.div>
          
          {/* Tesla-style CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-8">
            <Link to="/vehicles">
              <AutomotiveButton variant="primary" size="lg" className="px-12 py-4 text-lg font-light tracking-wide">
                Explore Fleet
              </AutomotiveButton>
            </Link>
            
            <Link to="/how-it-works">
              <AutomotiveButton variant="ghost" size="lg" className="px-12 py-4 text-lg font-light tracking-wide border-white/20 text-white hover:bg-white/10">
                Learn More
              </AutomotiveButton>
            </Link>
          </motion.div>

        </div>
      </motion.div>
      
      {/* Tesla-style scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 mb-2">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
          <ArrowDown className="h-4 w-4 text-white/50" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
