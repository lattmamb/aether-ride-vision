
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { vehicles } from '@/data/vehicles';
import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VehicleGalleryComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = (vehicleId: string) => {
    navigate(`/vehicles/${vehicleId}`);
  };

  const handleBookVehicle = (vehicleId: string) => {
    navigate(`/book/${vehicleId}`);
  };

  const handleViewAllVehicles = () => {
    navigate('/vehicles');
  };

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
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <motion.h3 
          className="text-xl font-bold gradient-purple-text text-glow"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Available Tesla Models
        </motion.h3>
        <Button
          variant="outline"
          onClick={handleViewAllVehicles}
          className="border-glass-border bg-glass hover:bg-glass-highlight text-white text-sm"
        >
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {vehicles.slice(0, 6).map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card interactive-card p-4 rounded-xl relative group overflow-hidden"
          >
            {/* Vehicle Image */}
            <div className="relative h-32 flex items-center justify-center mb-4">
              <img
                src={vehicle.image}
                alt={vehicle.model}
                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Vehicle Info */}
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-white">{vehicle.model}</h4>
                <p className="text-white/60 text-sm">{vehicle.tagline}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold gradient-accent-text">${vehicle.price}</span>
                  <span className="text-white/70 text-sm">{vehicle.priceUnit}</span>
                </div>
                {vehicle.available ? (
                  <span className="bg-tesla-green text-white text-xs font-medium px-2 py-1 rounded-full">
                    Available
                  </span>
                ) : (
                  <span className="bg-tesla-red/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleViewDetails(vehicle.id)}
                  className="flex-1 border-glass-border bg-glass hover:bg-glass-highlight text-white text-xs"
                >
                  Details
                </Button>
                {vehicle.available && (
                  <Button
                    size="sm"
                    onClick={() => handleBookVehicle(vehicle.id)}
                    className="flex-1 gradient-bg-primary hover:gradient-bg-secondary text-white text-xs"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    Book
                  </Button>
                )}
              </div>
            </div>
            
            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1), rgba(51, 195, 240, 0.1))',
              }}
            />
          </motion.div>
        ))}
      </div>
      
      {vehicles.length > 6 && (
        <motion.div 
          className="mt-6 text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={handleViewAllVehicles}
            className="gradient-bg-primary hover:gradient-bg-secondary text-white"
          >
            View All {vehicles.length} Vehicles <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VehicleGalleryComponent;
