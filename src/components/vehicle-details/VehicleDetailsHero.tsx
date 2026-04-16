
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

  // Get image for selected color
  const currentImage = vehicle.colorImages?.[selectedColor] || vehicle.image;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="lg:order-2" variants={itemVariants}>
        <div className="glass-card p-6 md:p-8 rounded-2xl relative h-64 sm:h-80 md:h-96 lg:h-[400px] flex items-center justify-center group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 z-10">
            {vehicle.available ? (
              <div className="bg-tesla-green text-white text-xs font-medium px-3 py-1.5 rounded-full">
                Available Now
              </div>
            ) : (
              <div className="bg-tesla-red/90 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                Coming Soon
              </div>
            )}
          </div>
          <motion.img
            src={currentImage}
            alt={`Tesla ${vehicle.model}`}
            className="w-full h-full object-cover rounded-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        
        <motion.div className="mt-6" variants={itemVariants}>
          <h3 className="text-lg font-medium mb-3 text-primary">Select Color</h3>
          <div className="flex gap-3 flex-wrap">
            {vehicle.colors.map(color => (
              <motion.button
                key={color}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`h-10 w-10 rounded-full border-2 transition-all ${
                  selectedColor === color 
                    ? 'border-primary scale-110 shadow-[0_0_12px_hsl(var(--primary)/0.5)]' 
                    : 'border-white/20 hover:border-white/40'
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-primary/80 bg-clip-text text-transparent text-balance">
          Tesla {vehicle.model}
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-6">{vehicle.tagline}</p>
        
        <motion.div 
          className="grid grid-cols-3 gap-3 md:gap-4 mb-6"
          variants={containerVariants}
        >
          <motion.div 
            className="glass-card p-3 md:p-4 text-center hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 30px hsl(var(--primary) / 0.1)' }}
            variants={itemVariants}
          >
            <Battery className="mx-auto h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
            <div className="text-xs md:text-sm text-white/70">Range</div>
            <div className="font-bold text-base md:text-lg">{vehicle.performance.range} mi</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-3 md:p-4 text-center hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 30px hsl(var(--primary) / 0.1)' }}
            variants={itemVariants}
          >
            <Gauge className="mx-auto h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
            <div className="text-xs md:text-sm text-white/70">Top Speed</div>
            <div className="font-bold text-base md:text-lg">{vehicle.performance.topSpeed} mph</div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-3 md:p-4 text-center hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -5, boxShadow: '0 10px 30px hsl(var(--primary) / 0.1)' }}
            variants={itemVariants}
          >
            <Zap className="mx-auto h-5 w-5 md:h-6 md:w-6 text-primary mb-2" />
            <div className="text-xs md:text-sm text-white/70">0-60 mph</div>
            <div className="font-bold text-base md:text-lg">{vehicle.performance.acceleration}s</div>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-8" variants={itemVariants}>
          <h3 className="text-lg font-medium mb-3 text-primary">Key Features</h3>
          <ul className="space-y-3">
            {vehicle.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.3 }}
              >
                <div className="p-1 rounded-full bg-primary/20 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm md:text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="glass-card p-5 md:p-6 mb-6 bg-gradient-to-br from-glass to-glass/30 backdrop-blur-lg hover:shadow-inner-glow transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-white/70">Starting at</div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                ${vehicle.price}<span className="text-white/70 text-sm font-normal">{vehicle.priceUnit}</span>
              </div>
            </div>
            <div className="text-xs md:text-sm text-white/70">
              * Terms & conditions apply
            </div>
          </div>
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg py-6 font-medium rounded-xl"
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
