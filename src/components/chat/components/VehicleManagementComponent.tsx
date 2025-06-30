
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Car, Settings, Zap, DollarSign, MapPin, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VehicleManagementComponent: React.FC = () => {
  const navigate = useNavigate();

  const managementOptions = [
    {
      icon: Car,
      title: 'Vehicle Control',
      description: 'Lock/unlock, climate, charging',
      action: () => navigate('/vehicle-management'),
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Service Earnings',
      description: 'Uber, DoorDash, Lyft management',
      action: () => navigate('/vehicle-management'),
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Location & Navigation',
      description: 'Track vehicle, find charging stations',
      action: () => navigate('/locations'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Vehicle Settings',
      description: 'Preferences and configurations',
      action: () => navigate('/vehicle-management'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const quickActions = [
    { icon: Lock, label: 'Lock Vehicle', action: () => console.log('Lock vehicle') },
    { icon: Zap, label: 'Start Charging', action: () => console.log('Start charging') },
    { icon: Car, label: 'Honk Horn', action: () => console.log('Honk horn') },
    { icon: Settings, label: 'Climate Control', action: () => console.log('Climate control') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card gradient-border-flow p-6 rounded-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold gradient-purple-text mb-6 text-glow"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Vehicle Management
        </motion.h3>
        
        {/* Management Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {managementOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={option.action}
                className="glass-card interactive-card border-0 h-auto p-4 flex items-start gap-3 hover:bg-white/5 w-full group relative overflow-hidden"
              >
                <motion.div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <option.icon className="w-5 h-5 text-white" />
                </motion.div>
                <div className="text-left flex-1">
                  <div className="font-medium gradient-accent-text group-hover:text-glow transition-all duration-300">
                    {option.title}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{option.description}</div>
                </div>
                
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

        {/* Quick Actions */}
        <div className="border-t border-white/10 pt-4">
          <h4 className="text-sm font-medium text-white/70 mb-3">Quick Actions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  onClick={action.action}
                  className="glass-card hover:bg-glass-highlight text-xs p-2 h-auto flex flex-col items-center gap-1 w-full"
                >
                  <action.icon className="w-4 h-4" />
                  <span className="text-xs">{action.label}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={() => navigate('/vehicle-management')}
            className="gradient-bg-primary hover:gradient-bg-secondary text-white"
          >
            Open Full Management Panel
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VehicleManagementComponent;
