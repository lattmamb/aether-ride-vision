import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MapPin, Leaf, Zap, Wind, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IllinoisTransitBadgeProps {
  location?: string;
  renewable?: number;
  type?: 'solar' | 'wind' | 'mixed' | 'clean';
  variant?: 'default' | 'premium' | 'compact';
  className?: string;
}

const IllinoisTransitBadge: React.FC<IllinoisTransitBadgeProps> = ({
  location = 'Illinois',
  renewable = 85,
  type = 'mixed',
  variant = 'default',
  className
}) => {
  const getIcon = () => {
    switch (type) {
      case 'solar':
        return <Sun className="w-3 h-3" />;
      case 'wind':
        return <Wind className="w-3 h-3" />;
      case 'clean':
        return <Leaf className="w-3 h-3" />;
      default:
        return <Zap className="w-3 h-3" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'solar':
        return 'border-yellow-400/30 text-yellow-400 bg-yellow-400/10';
      case 'wind':
        return 'border-blue-400/30 text-blue-400 bg-blue-400/10';
      case 'clean':
        return 'border-green-400/30 text-green-400 bg-green-400/10';
      default:
        return 'border-unity-teal/30 text-unity-teal bg-unity-teal/10';
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={cn("inline-flex items-center gap-1", className)}
      >
        <Badge className={cn("text-xs px-2 py-1", getColor())}>
          {getIcon()}
          <span className="ml-1">{renewable}% Clean</span>
        </Badge>
      </motion.div>
    );
  }

  if (variant === 'premium') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("glass-card p-4 rounded-lg", className)}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-unity-signature" />
            <span className="text-sm font-semibold text-white">{location}</span>
          </div>
          <Badge className={cn("text-xs", getColor())}>
            {getIcon()}
            <span className="ml-1">{renewable}% Clean</span>
          </Badge>
        </div>
        <div className="text-xs text-white/70">
          Illinois Clean Energy Network
        </div>
        <div className="mt-2 w-full bg-white/10 rounded-full h-2">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-unity-teal rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${renewable}%` }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <Badge className={cn("text-sm px-3 py-1", getColor())}>
        <MapPin className="w-3 h-3 mr-1" />
        {location}
      </Badge>
      <Badge className={cn("text-sm px-3 py-1", getColor())}>
        {getIcon()}
        <span className="ml-1">{renewable}% Clean Energy</span>
      </Badge>
    </motion.div>
  );
};

export default IllinoisTransitBadge;