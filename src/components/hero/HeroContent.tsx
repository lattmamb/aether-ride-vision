
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroContent: React.FC = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        ease: "easeOut"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6 relative"
      >
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-tesla-blue/20 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="w-14 h-14 mx-auto mb-6 relative"
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <Zap size={56} className="text-tesla-blue" />
        </motion.div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Rent Your Dream
        <br />
        Electric Vehicle
      </motion.h1>
      
      <motion.p 
        className="text-xl text-white/80 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Experience the future of transportation with our premium electric 
        vehicle rental service. Zero emissions, maximum performance.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Button asChild size="lg" className="bg-tesla-blue hover:bg-tesla-blue/90 text-white font-medium px-8 group relative overflow-hidden">
          <Link to="/vehicles">
            <span className="relative z-10 flex items-center">
              Browse Electric Vehicles
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" size={18} />
            </span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </Button>
        
        <Button asChild variant="outline" size="lg" className="border-white/20 bg-glass hover:bg-white/10 text-white group">
          <Link to="/how-it-works" className="flex items-center">
            <span>Learn More</span>
            <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
              <ChevronRight size={18} />
            </span>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
