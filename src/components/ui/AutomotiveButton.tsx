
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface AutomotiveButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'luxury' | 'hud' | 'ghost' | 'tesla';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const AutomotiveButton: React.FC<AutomotiveButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon
}) => {
  const variants = {
    primary: `
      bg-gradient-to-r from-unity-purple to-unity-signature text-white
      border border-unity-purple/30 shadow-unity-glow
      hover:shadow-unity-premium hover:scale-105
      font-display font-semibold tracking-wide
    `,
    luxury: `
      bg-gradient-to-r from-unity-champagne to-unity-gold text-unity-midnight
      border border-unity-champagne shadow-unity-luxury
      hover:shadow-unity-luxury hover:scale-105
      font-display font-bold tracking-wide
    `,
    tesla: `
      bg-white text-black border-2 border-white
      hover:bg-black hover:text-white hover:border-white
      font-display font-medium tracking-tesla
      transition-all duration-300 ease-out
    `,
    hud: `
      bg-unity-teal/10 text-unity-teal border border-unity-teal/30
      font-mono font-semibold tracking-wider uppercase
      shadow-[0_0_10px_rgba(0,212,255,0.2)]
      hover:bg-unity-teal/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]
    `,
    ghost: `
      bg-transparent text-white border border-white/20
      hover:bg-white/10 hover:border-white/40
      font-body font-light tracking-wide
    `
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm rounded-lg',
    md: 'px-8 py-4 text-base rounded-xl',
    lg: 'px-12 py-5 text-lg rounded-2xl'
  };

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : variant === 'tesla' ? 1.02 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        duration: 0.15
      }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${variants[variant]}
          ${sizes[size]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          transition-all duration-300 ease-out
          relative overflow-hidden
          ${className}
        `}
      >
        {/* Tesla-style shine effect for tesla variant */}
        {variant === 'tesla' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
        )}
        
        {/* Background Shine Effect for other variants */}
        {variant !== 'tesla' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-unity-shimmer" />
        )}
        
        {/* Content */}
        <div className="relative flex items-center justify-center gap-3">
          {icon && <span className="text-current">{icon}</span>}
          {children}
        </div>
      </Button>
    </motion.div>
  );
};

export default AutomotiveButton;
