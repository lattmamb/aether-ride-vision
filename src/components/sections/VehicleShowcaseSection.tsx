
import React from 'react';
import { motion } from 'framer-motion';
import VehicleCard from '@/components/VehicleCard';
import SectionHeader from './SectionHeader';
import { Vehicle } from '@/types';

interface VehicleShowcaseSectionProps {
  vehicles: Vehicle[];
  variants: any;
}

const VehicleShowcaseSection: React.FC<VehicleShowcaseSectionProps> = ({ vehicles, variants }) => {
  return (
    <motion.section 
      className="py-24 md:py-32 bg-unity-midnight"
      variants={variants}
    >
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Available Now"
          subtitle="Browse our current inventory of premium electric vehicles ready for immediate rental."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                damping: 25,
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="transform transition-all duration-500 hover:scale-105">
                <VehicleCard vehicle={vehicle} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VehicleShowcaseSection;
