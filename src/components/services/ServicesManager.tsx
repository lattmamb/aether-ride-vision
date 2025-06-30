
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Car, MapPin, Clock, DollarSign, Star, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceRequest {
  id: string;
  type: 'uber' | 'doordash' | 'lyft';
  status: 'pending' | 'active' | 'completed';
  earnings: number;
  duration: string;
  location: string;
  rating?: number;
}

const ServicesManager: React.FC = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [serviceRequests] = useState<ServiceRequest[]>([
    {
      id: '1',
      type: 'uber',
      status: 'active',
      earnings: 45.50,
      duration: '2h 15m',
      location: 'Downtown SF',
      rating: 4.8
    },
    {
      id: '2',
      type: 'doordash',
      status: 'completed',
      earnings: 32.75,
      duration: '1h 45m',
      location: 'Mission District',
      rating: 4.9
    }
  ]);

  const services = [
    {
      id: 'uber',
      name: 'Uber',
      icon: Car,
      color: 'from-black to-gray-800',
      description: 'Ride-sharing service',
      active: activeService === 'uber'
    },
    {
      id: 'doordash',
      name: 'DoorDash',
      icon: Navigation,
      color: 'from-red-600 to-red-800',
      description: 'Food delivery service',
      active: activeService === 'doordash'
    },
    {
      id: 'lyft',
      name: 'Lyft',
      icon: Car,
      color: 'from-pink-600 to-purple-700',
      description: 'Ride-sharing service',
      active: activeService === 'lyft'
    }
  ];

  const toggleService = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card gradient-border-flow p-6 rounded-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold gradient-purple-text mb-6">Service Management</h2>
        
        {/* Service Toggle Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => toggleService(service.id)}
                className={`w-full p-6 h-auto flex flex-col items-center gap-3 relative overflow-hidden ${
                  service.active
                    ? `bg-gradient-to-r ${service.color} text-white border-2 border-white/30`
                    : 'glass-card border-glass-border hover:bg-glass-highlight'
                }`}
              >
                <service.icon className="w-8 h-8" />
                <div className="text-center">
                  <div className="font-bold">{service.name}</div>
                  <div className="text-xs opacity-70">{service.description}</div>
                  {service.active && (
                    <div className="text-xs mt-1 font-semibold text-green-300">ACTIVE</div>
                  )}
                </div>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Active Service Dashboard */}
        {activeService && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-4"
          >
            <div className="glass-card p-4 border-2 border-green-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-green-400">Service Active</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Online</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-accent-text">$127.25</div>
                  <div className="text-xs text-white/60">Today's Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-accent-text">4.2h</div>
                  <div className="text-xs text-white/60">Time Online</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-accent-text">12</div>
                  <div className="text-xs text-white/60">Trips Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-accent-text">4.9</div>
                  <div className="text-xs text-white/60">Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Recent Activity */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {serviceRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 rounded-lg hover:bg-glass-highlight transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      request.status === 'active' ? 'bg-green-400' :
                      request.status === 'completed' ? 'bg-blue-400' :
                      'bg-yellow-400'
                    }`}></div>
                    <div>
                      <div className="font-medium capitalize">{request.type}</div>
                      <div className="text-sm text-white/60">{request.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">${request.earnings}</div>
                    <div className="text-sm text-white/60 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {request.duration}
                    </div>
                    {request.rating && (
                      <div className="text-sm text-white/60 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                        {request.rating}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={() => navigate('/dashboard')}
            className="flex-1 gradient-bg-primary hover:gradient-bg-secondary"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View Dashboard
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-glass-border bg-glass hover:bg-glass-highlight"
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Earnings Report
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesManager;
