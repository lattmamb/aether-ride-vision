
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Leaf, Wind, Sun, Car, Factory } from 'lucide-react';

interface CleanEnergyStatsProps {
  carbonSaved: number;
  solarPercentage: number;
  windPercentage: number;
  treesEquivalent: number;
  renewableGoal?: number;
  className?: string;
}

const IllinoisCleanEnergyStats: React.FC<CleanEnergyStatsProps> = ({
  carbonSaved,
  solarPercentage,
  windPercentage,
  treesEquivalent,
  renewableGoal = 100,
  className = ''
}) => {
  const stats = [
    {
      icon: Leaf,
      label: 'CO₂ Saved',
      value: carbonSaved,
      unit: 'lbs',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      description: 'vs. gasoline vehicles'
    },
    {
      icon: Sun,
      label: 'Solar Power',
      value: solarPercentage,
      unit: '%',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      description: 'of charging stations'
    },
    {
      icon: Wind,
      label: 'Wind Power',
      value: windPercentage,
      unit: '%',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      description: 'Illinois wind energy'
    },
    {
      icon: Factory,
      label: 'Trees Equivalent',
      value: treesEquivalent,
      unit: 'trees',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      description: 'carbon offset'
    }
  ];

  const totalRenewable = Math.round((solarPercentage + windPercentage) / 2);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Illinois Clean Energy Impact</h3>
        <p className="text-white/70">Your contribution to a sustainable future</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-card p-4 text-center hover:bg-white/5 transition-all duration-300">
              <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value.toLocaleString()}
                <span className="text-sm font-normal text-white/70 ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm font-medium text-white/90 mb-1">{stat.label}</div>
              <div className="text-xs text-white/60">{stat.description}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Illinois Renewable Progress */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-lg font-bold text-white">Illinois Renewable Progress</h4>
            <p className="text-sm text-white/70">Toward 100% clean energy by 2050</p>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            {totalRenewable}% Clean
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/70">Current Renewable Mix</span>
            <span className="text-white">{totalRenewable}% / {renewableGoal}%</span>
          </div>
          
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(totalRenewable / renewableGoal) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-white/60">
            <span className="flex items-center gap-1">
              <Sun className="w-3 h-3" />
              Solar {solarPercentage}%
            </span>
            <span className="flex items-center gap-1">
              <Wind className="w-3 h-3" />
              Wind {windPercentage}%
            </span>
          </div>
        </div>
      </Card>

      {/* Illinois Climate Goals */}
      <Card className="glass-card p-4 bg-blue-500/5 border border-blue-500/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="font-medium text-white">Supporting Illinois Climate Goals</div>
            <div className="text-xs text-white/70">Clean Energy Jobs Act • 100% renewable by 2050</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IllinoisCleanEnergyStats;
