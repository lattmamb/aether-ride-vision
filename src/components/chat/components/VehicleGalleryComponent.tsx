
import React from 'react';
import { motion } from 'framer-motion';
import VehicleCard from '@/components/VehicleCard';
import { vehicles } from '@/data/vehicles';

const VehicleGalleryComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-4">Available Tesla Models</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </motion.div>
  );
};

export default VehicleGalleryComponent;
