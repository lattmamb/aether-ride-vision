
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "./HeroBackground";
import AnimatedGradients from "./AnimatedGradients";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      const bgElements = heroRef.current.querySelectorAll('.parallax-bg');
      
      bgElements.forEach((element) => {
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
