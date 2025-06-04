
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Car, CreditCard, MapPin, Calendar, Star, Zap } from 'lucide-react';

const QuickActionsComponent: React.FC = () => {
  const actions = [
    { icon: Car, label: 'Browse All Models', description: 'Explore our Tesla lineup' },
    { icon: Star, label: 'Compare Vehicles', description: 'Side-by-side comparison' },
    { icon: CreditCard, label: 'View Pricing', description: 'Subscription plans' },
    { icon: MapPin, label: 'Find Locations', description: 'Pickup & charging stations' },
    { icon: Calendar, label: 'Book Now', description: 'Reserve your Tesla' },
    { icon: Zap, label: 'Charging Info', description: 'Supercharger network' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              className="glass-effect border-glass-border h-auto p-4 flex flex-col items-start gap-2 hover:bg-white/5 w-full"
            >
              <action.icon className="w-5 h-5 text-[#9b87f5]" />
              <div className="text-left">
                <div className="font-medium text-white">{action.label}</div>
                <div className="text-xs text-white/60">{action.description}</div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActionsComponent;
