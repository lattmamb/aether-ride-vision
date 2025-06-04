
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Battery, Zap, Gauge, Check } from 'lucide-react';
import { Vehicle } from '@/types';
import { motion } from 'framer-motion';

interface VehicleDetailsHeroProps {
  vehicle: Vehicle;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const VehicleDetailsHero: React.FC<VehicleDetailsHeroProps> = ({ 
  vehicle, 
  selectedColor, 
  setSelectedColor 
}) => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate(`/book/${vehicle.id}`);
  };

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="lg:order-2" variants={itemVariants}>
        <div className="glass-card p-8 rounded-2xl relative h-80 md:h-96 lg:h-[400px] flex items-center justify-center group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 z-10">
            {vehicle.available ? (
              <div className="bg-tesla-green text-white text-xs font-medium px-3 py-1 rounded-full">
                Available Now
              </div>
            ) : (
              <div className="bg-tesla-red/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                Coming Soon
              </div>
            )}
          </div>
          <motion.img
            src={vehicle.image}
            alt={vehicle.model}
            className="max-h-full object-contain"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <motion.div className="mt-6" variants={itemVariants}>
          <h3 className="text-lg font-medium mb-3 gradient-purple-text">Select Color</h3>
          <div className="flex gap-3 flex-wrap">
            {vehicle.colors.map(color => (
              <motion.button
                key={color}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`h-10 w-10 rounded-full border-2 transition-all ${
                  selectedColor === color 
                    ? 'border-[#9b87f5] scale-110 shadow-purple-glow' 
                    : 'border-glass-border hover:border-white/30'
                }`}
                style={{ background: color }}
                title={`${
                  color === '#FFFFFF' ? 'White' : 
                  color === '#000000' ? 'Black' : 
                  color === '#C0C0C0' ? 'Silver' : 
                  color === '#FF0000' ? 'Red' : 
                  color === '#0000FF' ? 'Blue' : 'Custom'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div className="lg:order-1 flex flex-col justify-center" variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-[#9b87f5]/80 bg-clip-text text-transparent">
          Tesla {vehicle.model}
        </h1>
        
        <p className="text-xl text-white/80 mb-6">{vehicle.tagline}</p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          variants={containerVariants}
        >
          <motion.div 
            className="glass-card p-4 text-center hover:border-[#9b87f5]/30 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(155, 135, 245, 0.1)' }}
            variants={itemVariants}
          >
            <Battery className="mx-auto h-6 w-6 text-[#9b87f5] mb-2" />
            <div className="text-sm text-white/70">Range</div>
            <div className="font-bold text-lg">{vehicle.performance.range} mi</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-4 text-center hover:border-[#9b87f5]/30 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(155, 135, 245, 0.1)' }}
            variants={itemVariants}
          >
            <Gauge className="mx-auto h-6 w-6 text-[#9b87f5] mb-2" />
            <div className="text-sm text-white/70">Top Speed</div>
            <div className="font-bold text-lg">{vehicle.performance.topSpeed} mph</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-4 text-center hover:border-[#9b87f5]/30 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(155, 135, 245, 0.1)' }}
            variants={itemVariants}
          >
            <Zap className="mx-auto h-6 w-6 text-[#9b87f5] mb-2" />
            <div className="text-sm text-white/70">0-60 mph</div>
            <div className="font-bold text-lg">{vehicle.performance.acceleration}s</div>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-8" variants={itemVariants}>
          <h3 className="text-lg font-medium mb-3 gradient-purple-text">Key Features</h3>
          <ul className="space-y-3">
            {vehicle.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="p-1 rounded-full bg-[#9b87f5]/20 text-[#9b87f5]">
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="glass-card p-6 mb-6 bg-gradient-to-br from-glass to-glass/30 backdrop-blur-lg hover:shadow-inner-glow transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-white/70">Starting at</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                ${vehicle.price}<span className="text-white/70 text-sm font-normal">{vehicle.priceUnit}</span>
              </div>
            </div>
            <div className="text-sm text-white/70">
              * Terms & conditions apply
            </div>
          </div>
          
          <Button 
            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-lg py-6 font-medium"
            onClick={handleRentClick}
            disabled={!vehicle.available}
          >
            {vehicle.available ? `Book This ${vehicle.model}` : `Coming Soon`}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VehicleDetailsHero;
