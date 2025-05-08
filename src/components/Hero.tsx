
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "@/components/hero/HeroBackground";
import AnimatedGradients from "@/components/hero/AnimatedGradients";
import HeroContent from "@/components/hero/HeroContent";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import useParallaxEffect from "@/components/hero/useParallaxEffect";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Parallax effect on mouse move
  useParallaxEffect(heroRef);

  return (
    <motion.div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ opacity, scale }}
    >
      <HeroBackground />
      <AnimatedGradients />
      
      {/* Content container */}
      <motion.div 
        ref={containerRef} 
        className="container relative z-10 mx-auto px-4 py-16 md:py-32"
        style={{ y }}
      >
        <HeroContent />
      </motion.div>
      
      <ScrollIndicator />
    </motion.div>
  );
};

export default Hero;
