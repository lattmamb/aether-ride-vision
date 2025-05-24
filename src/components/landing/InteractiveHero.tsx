
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Leaf, ChevronDown } from 'lucide-react';
import { useAdvancedCursor } from '@/hooks/useAdvancedCursor';

const InteractiveHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { position, smoothPosition, velocity, isMoving } = useAdvancedCursor();
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(smoothPosition.x - rect.left - rect.width / 2);
      mouseY.set(smoothPosition.y - rect.top - rect.height / 2);
    }
  }, [smoothPosition, mouseX, mouseY]);

  const features = [
    { icon: Zap, label: "Instant Power", color: "#0A84FF", delay: 0 },
    { icon: Leaf, label: "Zero Emissions", color: "#34C759", delay: 0.1 },
    { icon: Shield, label: "Advanced Safety", color: "#9b87f5", delay: 0.2 }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dynamic Background Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(155, 135, 245, 0.3) 0%, transparent 50%),
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: `100% 100%, 50px 50px, 50px 50px`
        }}
      />

      {/* Floating Geometric Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          animate={{
            x: [0, Math.sin(i) * 100, 0],
            y: [0, Math.cos(i) * 100, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold leading-tight"
            style={{ transform: "translateZ(50px)" }}
          >
            {["Electric", "Future", "Now"].map((word, index) => (
              <motion.div
                key={word}
                className="block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <span 
                  className={
                    index === 0 ? "text-white" :
                    index === 1 ? "bg-gradient-to-r from-[#9b87f5] to-[#0A84FF] bg-clip-text text-transparent" :
                    "text-white/80"
                  }
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </motion.h1>
        </motion.div>

        {/* Interactive Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto"
          style={{ transform: "translateZ(30px)" }}
        >
          Experience premium electric mobility with{" "}
          <motion.span
            className="text-[#9b87f5] cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setActiveElement("unity")}
            onHoverEnd={() => setActiveElement(null)}
          >
            Unity Fleet
          </motion.span>
        </motion.p>

        {/* Interactive Features */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          style={{ transform: "translateZ(20px)" }}
        >
          {features.map(({ icon: Icon, label, color, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + delay }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setActiveElement(label)}
              onHoverEnd={() => setActiveElement(null)}
              className="relative group cursor-pointer"
            >
              <div 
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                  boxShadow: activeElement === label ? `0 0 30px ${color}40` : 'none'
                }}
              >
                <Icon 
                  className="h-5 w-5 transition-colors duration-300" 
                  style={{ color: activeElement === label ? color : '#ffffff' }}
                />
                <span className="text-white/90 font-medium">{label}</span>
              </div>
              
              {/* Hover Particles */}
              <AnimatePresence>
                {activeElement === label && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ backgroundColor: color }}
                        animate={{
                          x: [0, Math.random() * 40 - 20],
                          y: [0, Math.random() * 40 - 20],
                          opacity: [1, 0]
                        }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          style={{ transform: "translateZ(10px)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Link to="/vehicles">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#9b87f5] to-[#0A84FF] rounded-2xl font-medium text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setActiveElement("explore")}
              onHoverEnd={() => setActiveElement(null)}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                animate={{ x: activeElement === "explore" ? "100%" : "-100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-2">
                Explore Fleet
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
          
          <Link to="/about">
            <motion.button
              className="px-8 py-4 border border-white/20 rounded-2xl font-medium text-white backdrop-blur-md hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-white/50" />
      </motion.div>

      {/* Velocity Trails */}
      <AnimatePresence>
        {isMoving && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: smoothPosition.x - 2,
              top: smoothPosition.y - 2,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="w-4 h-4 bg-[#9b87f5]/50 rounded-full blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveHero;
