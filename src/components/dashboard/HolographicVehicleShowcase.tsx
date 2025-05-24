
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

interface HolographicVehicleShowcaseProps {
  vehicle: {
    id: string;
    model: string;
    image: string;
    tagline: string;
    performance: {
      range: string;
      topSpeed: string;
      acceleration: string;
    };
  };
}

const HolographicVehicleShowcase: React.FC<HolographicVehicleShowcaseProps> = ({ vehicle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <div ref={containerRef} className="relative h-96 overflow-hidden rounded-3xl glass-card">
      {/* Background particles */}
      <div className="absolute inset-0">
        <SparklesCore
          id="vehicle-particles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#9b87f5"
        />
      </div>

      {/* Holographic grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(155, 135, 245, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155, 135, 245, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Vehicle showcase */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          style={{ rotateY, scale }}
          className="relative"
        >
          <div className="relative">
            {/* Holographic glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-cyan-500/20 blur-xl rounded-full scale-150" />
            
            {/* Vehicle image */}
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="relative z-10 h-64 object-contain filter drop-shadow-2xl"
            />
            
            {/* Scanning lines effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
              animate={{ y: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ height: '20px' }}
            />
          </div>
          
          {/* Floating tech specs */}
          <motion.div
            className="absolute -right-16 top-8 glass-effect p-3 rounded-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-xs text-cyan-400">RANGE</div>
            <div className="text-lg font-bold text-white">{vehicle.performance.range}</div>
          </motion.div>
          
          <motion.div
            className="absolute -left-16 bottom-8 glass-effect p-3 rounded-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <div className="text-xs text-cyan-400">0-60 MPH</div>
            <div className="text-lg font-bold text-white">{vehicle.performance.acceleration}s</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Holographic frame */}
      <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-3xl">
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400" />
      </div>
    </div>
  );
};

export default HolographicVehicleShowcase;
