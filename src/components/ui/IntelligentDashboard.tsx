
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Star, Clock, MapPin, Zap, Battery } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAdaptiveLayout } from '@/contexts/AdaptiveLayoutContext';
import { vehicles } from '@/data/vehicles';

interface PersonalizedRecommendation {
  id: string;
  type: 'vehicle' | 'feature' | 'location';
  title: string;
  description: string;
  confidence: number;
  icon: React.ComponentType<any>;
}

const IntelligentDashboard: React.FC = () => {
  const { gridColumns, deviceType, reducedMotion } = useAdaptiveLayout();
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendation[]>([]);
  const [userPreferences, setUserPreferences] = useState({
    preferredRange: '300+',
    budgetRange: '$200-400',
    usagePattern: 'weekend',
    favoriteFeatures: ['autopilot', 'performance']
  });

  useEffect(() => {
    // Simulate AI-powered recommendations based on user behavior
    const generateRecommendations = () => {
      const recommendations: PersonalizedRecommendation[] = [
        {
          id: '1',
          type: 'vehicle',
          title: 'Tesla Model S Perfect Match',
          description: 'Based on your preference for long-range and performance vehicles',
          confidence: 94,
          icon: Zap
        },
        {
          id: '2',
          type: 'feature',
          title: 'Autopilot Feature Highlight',
          description: 'You viewed autopilot features 5x more than average users',
          confidence: 87,
          icon: Star
        },
        {
          id: '3',
          type: 'location',
          title: 'Downtown Hub Availability',
          description: 'Your preferred pickup location has 3 vehicles available',
          confidence: 92,
          icon: MapPin
        }
      ];
      
      setRecommendations(recommendations);
    };

    generateRecommendations();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: reducedMotion ? 0.1 : 0.5 }
    }
  };

  return (
    <div className="space-y-6">
      {/* Personalized Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold gradient-purple-text mb-3">
          Your Personalized Experience
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          AI-powered recommendations based on your preferences and browsing patterns
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid gap-4 ${
          deviceType === 'mobile' ? 'grid-cols-2' : 
          deviceType === 'tablet' ? 'grid-cols-3' : 'grid-cols-4'
        }`}
      >
        <motion.div variants={itemVariants}>
          <Card className="glass-card p-4 text-center">
            <TrendingUp className="w-8 h-8 text-[#9b87f5] mx-auto mb-2" />
            <div className="font-bold text-xl text-white">12</div>
            <div className="text-sm text-white/70">Vehicles Viewed</div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="glass-card p-4 text-center">
            <Clock className="w-8 h-8 text-tesla-green mx-auto mb-2" />
            <div className="font-bold text-xl text-white">3.2m</div>
            <div className="text-sm text-white/70">Avg. Session</div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="glass-card p-4 text-center">
            <Battery className="w-8 h-8 text-tesla-blue mx-auto mb-2" />
            <div className="font-bold text-xl text-white">350+</div>
            <div className="text-sm text-white/70">Preferred Range</div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="glass-card p-4 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="font-bold text-xl text-white">4.9</div>
            <div className="text-sm text-white/70">Match Score</div>
          </Card>
        </motion.div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Smart Recommendations</h3>
        <AnimatePresence>
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#9b87f5]/20 group-hover:bg-[#9b87f5]/30 transition-colors">
                  <rec.icon className="w-6 h-6 text-[#9b87f5]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white group-hover:text-[#9b87f5] transition-colors">
                      {rec.title}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className="text-tesla-green border-tesla-green bg-tesla-green/10"
                    >
                      {rec.confidence}% match
                    </Badge>
                  </div>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">
                    {rec.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Trending Vehicles */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Trending for You</h3>
        <div className={`grid gap-6 ${
          deviceType === 'mobile' ? 'grid-cols-1' : 
          deviceType === 'tablet' ? 'grid-cols-2' : 'grid-cols-3'
        }`}>
          {vehicles.slice(0, gridColumns).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              variants={itemVariants}
              whileHover={!reducedMotion ? { y: -5, scale: 1.02 } : undefined}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-bold text-white mb-1">{vehicle.model}</h4>
                  <p className="text-sm text-white/80">${vehicle.price}/month</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IntelligentDashboard;
