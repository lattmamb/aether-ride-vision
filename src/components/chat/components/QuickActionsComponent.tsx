
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Car, CreditCard, MapPin, Calendar, Star, Zap, User, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActionsComponent: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    { 
      icon: Car, 
      label: 'Browse All Models', 
      description: 'Explore our Tesla lineup',
      action: () => navigate('/vehicles')
    },
    { 
      icon: Star, 
      label: 'Compare Vehicles', 
      description: 'Side-by-side comparison',
      action: () => navigate('/vehicles')
    },
    { 
      icon: CreditCard, 
      label: 'View Pricing', 
      description: 'Subscription plans',
      action: () => navigate('/pricing')
    },
    { 
      icon: MapPin, 
      label: 'Find Locations', 
      description: 'Pickup & charging stations',
      action: () => navigate('/locations')
    },
    { 
      icon: Calendar, 
      label: 'Book Now', 
      description: 'Reserve your Tesla',
      action: () => navigate('/vehicles')
    },
    { 
      icon: User, 
      label: 'Dashboard', 
      description: 'Manage bookings',
      action: () => navigate('/dashboard')
    },
    { 
      icon: Zap, 
      label: 'Charging Info', 
      description: 'Supercharger network',
      action: () => navigate('/locations')
    },
    { 
      icon: Home, 
      label: 'Home Page', 
      description: 'Return to main site',
      action: () => navigate('/')
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card gradient-border-flow p-6 rounded-xl relative overflow-hidden"
    >
      {/* Background enhancement */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #9b87f5, #33C3F0, #D946EF)',
          filter: 'blur(40px)',
        }}
      />
      
      <motion.h3 
        className="text-xl font-bold gradient-purple-text mb-6 text-glow relative z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Quick Actions
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              onClick={action.action}
              className="glass-card interactive-card border-0 h-auto p-4 flex flex-col items-start gap-2 hover:bg-white/5 w-full group relative overflow-hidden"
            >
              <motion.div
                className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center mb-1"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <action.icon className="w-4 h-4 text-white" />
              </motion.div>
              <div className="text-left">
                <div className="font-medium gradient-accent-text group-hover:text-glow transition-all duration-300">{action.label}</div>
                <div className="text-xs text-white/60">{action.description}</div>
              </div>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1), rgba(51, 195, 240, 0.1))',
                }}
              />
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActionsComponent;
