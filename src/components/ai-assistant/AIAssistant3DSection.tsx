
import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from '@/components/3d/Scene3D';
import VehicleConfigurator3D from '@/components/3d/VehicleConfigurator3D';

const AIAssistant3DSection: React.FC = () => {
  return (
    <div className="relative py-20 px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interactive 3D Vehicle Showcase
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our Tesla fleet in ultra-realistic 3D. Rotate, inspect, and interact with each model.
          </p>
        </div>
        
        <div className="h-[600px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-black/20">
          <Scene3D
            environment="sunset"
            enablePostProcessing={true}
            className="w-full h-full"
          >
            <VehicleConfigurator3D />
          </Scene3D>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAssistant3DSection;
