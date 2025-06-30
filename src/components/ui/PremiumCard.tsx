
import React from 'react';
import { motion } from 'framer-motion';

interface PremiumCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'luxury' | 'premium';
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = true,
  glow = false
}) => {
  const variants = {
    default: 'bg-glass-premium backdrop-blur-unity border border-glass-border rounded-luxury shadow-unity-glass',
    luxury: 'bg-glass-luxury backdrop-blur-luxury border border-unity-champagne/20 rounded-premium shadow-unity-luxury',
    premium: 'bg-gradient-to-br from-unity-charcoal to-unity-midnight border border-unity-platinum/10 rounded-premium shadow-unity-premium'
  };

  return (
    <motion.div
      className={`
        ${variants[variant]}
        ${hover ? 'transition-all duration-500 hover:scale-[1.02] hover:shadow-unity-glow' : ''}
        ${glow ? 'animate-unity-glow' : ''}
        ${className}
        relative overflow-hidden
      `}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 animate-unity-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Premium Border Accent */}
      {variant === 'luxury' && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-unity-champagne to-transparent opacity-60" />
      )}
    </motion.div>
  );
};

export default PremiumCard;
