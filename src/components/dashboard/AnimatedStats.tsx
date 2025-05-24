
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Clock, TrendingUp } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  color: string;
  prefix?: string;
}

const AnimatedStats: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats: StatItem[] = [
    {
      icon: Leaf,
      label: 'CO₂ Saved',
      value: 2847,
      suffix: 'lbs',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Zap,
      label: 'Energy Efficiency',
      value: 127,
      suffix: 'MPGe',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      icon: Clock,
      label: 'Charging Time',
      value: 45,
      suffix: 'min',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      icon: TrendingUp,
      label: 'Savings',
      value: 1250,
      suffix: '',
      prefix: '$',
      color: 'from-purple-400 to-pink-600'
    }
  ];

  const Counter: React.FC<{ value: number; duration?: number }> = ({ 
    value, 
    duration = 2000 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!mounted) return;
      
      let start = 0;
      const end = value;
      const incrementTime = (duration / end) * 1000;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / 50));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);

      return () => clearInterval(timer);
    }, [value, duration, mounted]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="relative glass-card p-6 overflow-hidden group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Animated background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Pulse effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-2xl`}
            animate={{
              scale: [0, 1.1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          />

          {/* Icon */}
          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-3 mb-4 relative`}
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <stat.icon className="h-6 w-6 text-white" />
          </motion.div>

          {/* Value */}
          <motion.div
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {stat.prefix}
            <Counter value={stat.value} />
            {stat.suffix}
          </motion.div>

          {/* Label */}
          <motion.p
            className="text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {stat.label}
          </motion.p>

          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedStats;
