
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Car, 
  Calendar, 
  CreditCard, 
  Settings, 
  TrendingUp,
  DollarSign,
  Zap,
  MapPin
} from 'lucide-react';

const ComprehensiveDashboardComponent: React.FC = () => {
  const navigate = useNavigate();

  const dashboardFeatures = [
    {
      icon: TrendingUp,
      title: 'Earnings Analytics',
      description: 'Detailed earnings tracking with charts and insights',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Car,
      title: 'Vehicle Monitoring',
      description: 'Real-time vehicle status and health monitoring',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: DollarSign,
      title: 'Service Management',
      description: 'Uber, DoorDash, Lyft integration and control',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment handling and transaction history',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Calendar,
      title: 'Booking Management',
      description: 'Complete booking lifecycle management',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Vehicle Control',
      description: 'Remote vehicle control and automation',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const quickStats = [
    { label: 'Monthly Earnings', value: '$2,847', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Active Services', value: '3', icon: Settings, color: 'text-blue-400' },
    { label: 'Battery Level', value: '87%', icon: Car, color: 'text-purple-400' },
    { label: 'Location', value: 'SF', icon: MapPin, color: 'text-orange-400' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card gradient-border-flow p-6 rounded-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold gradient-purple-text mb-6 text-glow"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Comprehensive Dashboard
        </motion.h3>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-card p-3 text-center"
            >
              <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
              <div className="text-lg font-bold gradient-accent-text">{stat.value}</div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Dashboard Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="glass-card interactive-card border-0 p-4 flex items-center gap-3 hover:bg-white/5 group relative overflow-hidden">
                <motion.div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </motion.div>
                <div className="flex-1">
                  <div className="font-medium gradient-accent-text group-hover:text-glow transition-all duration-300">
                    {feature.title}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{feature.description}</div>
                </div>
                
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1), rgba(51, 195, 240, 0.1))',
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/70 mb-4">
            Access your complete vehicle and service management hub with advanced analytics, 
            real-time monitoring, and seamless payment processing.
          </p>
          <Button
            onClick={() => navigate('/comprehensive-dashboard')}
            className="gradient-bg-primary hover:gradient-bg-secondary text-white px-8 py-3 text-lg"
          >
            <BarChart3 className="w-5 h-5 mr-2" />
            Open Comprehensive Dashboard
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComprehensiveDashboardComponent;
