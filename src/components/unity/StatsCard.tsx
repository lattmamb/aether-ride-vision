import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatsCardProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, label, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate number if it's numeric
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      if (!isNaN(numericValue)) {
        let start = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(start) + value.replace(/[0-9]/g, ''));
          }
        }, 16);
        
        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }
  }, [inView, value, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.5 }
        }
      }}
      className="liquid-glass rounded-xl p-6 text-center backdrop-blur-xl"
    >
      <div className="text-3xl md:text-4xl font-space font-bold bg-gradient-to-r from-unity-cyan to-unity-cyan-light bg-clip-text text-transparent mb-2">
        {displayValue}
      </div>
      <div className="text-white/60 text-sm font-inter">
        {label}
      </div>
    </motion.div>
  );
};
