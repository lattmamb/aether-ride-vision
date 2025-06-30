
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap } from 'lucide-react';
import PremiumCard from '@/components/ui/PremiumCard';

interface CleanEnergyStatsProps {
  cleanEnergyStats: {
    carbonSaved: number;
    solarCharging: number;
    windEnergy: number;
    treesEquivalent: number;
  };
  variants: any;
}

const CleanEnergyStatsGrid: React.FC<CleanEnergyStatsProps> = ({ cleanEnergyStats, variants }) => {
  return (
    <motion.div className="mb-8" variants={variants}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <PremiumCard variant="luxury" className="p-6 text-center">
          <Leaf className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.carbonSaved}</div>
          <div className="text-sm text-white/70">lbs CO₂ Saved</div>
        </PremiumCard>
        <PremiumCard variant="premium" className="p-6 text-center">
          <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.solarCharging}%</div>
          <div className="text-sm text-white/70">Solar Powered</div>
        </PremiumCard>
        <PremiumCard variant="luxury" className="p-6 text-center">
          <div className="w-8 h-8 text-blue-400 mx-auto mb-3 text-2xl">💨</div>
          <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.windEnergy}%</div>
          <div className="text-sm text-white/70">Wind Energy</div>
        </PremiumCard>
        <PremiumCard variant="premium" className="p-6 text-center">
          <div className="w-8 h-8 text-green-400 mx-auto mb-3 text-2xl">🌳</div>
          <div className="text-2xl font-bold text-white mb-1">{cleanEnergyStats.treesEquivalent}</div>
          <div className="text-sm text-white/70">Trees Planted Equiv.</div>
        </PremiumCard>
      </div>
    </motion.div>
  );
};

export default CleanEnergyStatsGrid;
