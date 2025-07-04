import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Leaf, Zap, Wind, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import IllinoisTransitBadge from '@/components/ui/IllinoisTransitBadge';

const IllinoisHero: React.FC = () => {
  const illinoisStats = [
    { icon: Wind, label: '6,409 MW', description: 'Wind Capacity', color: 'text-blue-400' },
    { icon: Sun, label: '859 MW', description: 'Solar Capacity', color: 'text-yellow-400' },
    { icon: Leaf, label: '65,000+', description: 'EV Registrations', color: 'text-green-400' },
    { icon: Zap, label: '3,500+', description: 'Charging Stations', color: 'text-unity-teal' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Illinois-themed Background */}
      <div className="absolute inset-0 bg-unity-midnight">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-unity-purple/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
        
        {/* Illinois Skyline Silhouette Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-unity-charcoal/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Illinois Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <IllinoisTransitBadge 
              location="Illinois Clean Energy Network"
              renewable={92}
              type="mixed"
              variant="premium"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gradient-purple-text">Premium Transit</span>
            <br />
            <span className="text-white">Across Illinois</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience the future of transportation with Unity Fleet's premium electric vehicles, 
            powered by Illinois' growing renewable energy network.
          </motion.p>

          {/* Illinois Commitment */}
          <motion.div 
            className="mb-8 text-unity-teal font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Supporting Illinois' goal of 100% clean energy by 2050
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button 
              asChild
              size="lg"
              className="gradient-bg-primary hover:scale-105 transition-all duration-300 font-display font-semibold px-8 py-4 text-lg"
            >
              <Link to="/vehicles">
                Explore Illinois Fleet
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Link to="/locations">
                <MapPin className="w-5 h-5 mr-2" />
                Illinois Locations
              </Link>
            </Button>
          </motion.div>

          {/* Illinois Clean Energy Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {illinoisStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-4 text-center hover:bg-white/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-8 h-8 mx-auto mb-3 ${stat.color}`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-white/70">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1 mb-2">
            <div className="w-1 h-3 bg-unity-teal rounded-full mx-auto animate-pulse"></div>
          </div>
          <div className="text-xs text-white/50">Discover Illinois</div>
        </div>
      </motion.div>
    </section>
  );
};

export default IllinoisHero;