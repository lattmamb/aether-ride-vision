
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Sparkles background effect */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.6}
          particleDensity={140}
          className="w-full h-full"
          particleColor="#0A84FF"
          speed={0.3}
        />
      </div>
      
      {/* Background blur effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-tesla-blue/20 rounded-full blur-[120px] parallax-bg"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-tesla-purple/20 rounded-full blur-[120px] parallax-bg"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        
        {/* Additional glowing elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-tesla-blue/15 rounded-full blur-[80px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-tesla-purple/15 rounded-full blur-[90px]"
          animate={{ 
            scale: [1.1, 0.9, 1.1],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        ></motion.div>
      </div>
      
      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(650px_500px_at_top,transparent_30%,white)]"></div>
    </>
  );
};

export default HeroBackground;
