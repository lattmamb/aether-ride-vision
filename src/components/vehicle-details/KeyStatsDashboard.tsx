
import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, Gauge, Thermometer, Shield, Wifi } from 'lucide-react';
import { Vehicle } from '@/types';

interface KeyStatsDashboardProps {
  vehicle: Vehicle;
}

const KeyStatsDashboard: React.FC<KeyStatsDashboardProps> = ({ vehicle }) => {
  const stats = [
    {
      icon: Battery,
      label: 'Range',
      value: `${vehicle.performance.range} mi`,
      color: 'text-tesla-green',
      bgColor: 'bg-tesla-green/20'
    },
    {
      icon: Zap,
      label: '0-60 mph',
      value: `${vehicle.performance.acceleration}s`,
      color: 'text-[#9b87f5]',
      bgColor: 'bg-[#9b87f5]/20'
    },
    {
      icon: Gauge,
      label: 'Top Speed',
      value: `${vehicle.performance.topSpeed} mph`,
      color: 'text-tesla-blue',
      bgColor: 'bg-tesla-blue/20'
    },
    {
      icon: Thermometer,
      label: 'Climate',
      value: 'Auto',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20'
    },
    {
      icon: Shield,
      label: 'Safety',
      value: '5-Star',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    {
      icon: Wifi,
      label: 'Connected',
      value: 'Active',
      color: 'text-tesla-green',
      bgColor: 'bg-tesla-green/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.05 }}
          className="glass-card p-4 text-center hover:shadow-lg transition-all duration-300"
        >
          <div className={`inline-flex p-3 rounded-full ${stat.bgColor} mb-3`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="text-sm text-white/70 mb-1">{stat.label}</div>
          <div className="font-bold text-lg text-white">{stat.value}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default KeyStatsDashboard;
