
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedStatsProps {
  stats: {
    label: string;
    value: number;
    unit?: string;
    prefix?: string;
    icon?: React.ReactNode;
    color?: string;
  }[];
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-card p-6 text-center hover:neumorphic-hover transition-all duration-300"
        >
          {stat.icon && (
            <div className={`mb-3 flex justify-center ${stat.color || 'text-[#9b87f5]'}`}>
              {stat.icon}
            </div>
          )}
          
          <motion.div
            className="text-2xl font-bold text-white mb-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring", bounce: 0.6 }}
          >
            {stat.prefix}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {isVisible && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  delay={index * 0.1}
                />
              )}
            </motion.span>
            {stat.unit}
          </motion.div>
          
          <div className="text-sm text-white/70">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const CountUp: React.FC<{ start: number; end: number; duration: number; delay: number }> = ({
  start,
  end,
  duration,
  delay
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(start + (end - start) * progress));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [start, end, duration, delay]);

  return <span>{count}</span>;
};

export default AnimatedStats;
