
import React from 'react';
import { motion } from 'framer-motion';

interface HUDDisplayProps {
  label: string;
  value: string | number;
  unit?: string;
  status?: 'normal' | 'warning' | 'error' | 'success';
  icon?: React.ReactNode;
  className?: string;
}

const HUDDisplay: React.FC<HUDDisplayProps> = ({
  label,
  value,
  unit,
  status = 'normal',
  icon,
  className = ''
}) => {
  const statusColors = {
    normal: 'text-unity-teal border-unity-teal/30 bg-unity-teal/5',
    warning: 'text-unity-gold border-unity-gold/30 bg-unity-gold/5',
    error: 'text-red-400 border-red-400/30 bg-red-400/5',
    success: 'text-tesla-green border-tesla-green/30 bg-tesla-green/5'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`
        ${statusColors[status]}
        border rounded-xl p-4
        font-mono relative overflow-hidden
        shadow-[0_0_10px_rgba(0,212,255,0.2)]
        ${className}
      `}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl border animate-pulse opacity-30" 
           style={{ borderColor: 'currentColor' }} />
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-current opacity-80">{icon}</span>}
        <span className="text-xs uppercase tracking-wider opacity-80 font-semibold">
          {label}
        </span>
      </div>
      
      {/* Value Display */}
      <div className="flex items-end gap-1">
        <span className="text-2xl font-bold tracking-tight">
          {value}
        </span>
        {unit && (
          <span className="text-sm opacity-70 mb-1 font-medium">
            {unit}
          </span>
        )}
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-20 blur-sm"
           style={{ 
             background: `radial-gradient(circle at center, currentColor 0%, transparent 70%)` 
           }} />
    </motion.div>
  );
};

export default HUDDisplay;
