
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'luxury';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon,
  loading = false
}) => {
  const variants = {
    primary: `
      bg-gradient-to-r from-unity-purple to-unity-signature text-white
      border border-unity-purple/30 shadow-unity-glow
      hover:shadow-unity-premium hover:scale-[1.02]
      font-display font-semibold tracking-wide
    `,
    secondary: `
      bg-gradient-to-r from-unity-charcoal to-unity-carbon text-unity-platinum
      border border-unity-platinum/20 shadow-lg
      hover:border-unity-platinum/40 hover:scale-[1.02]
      font-body font-medium
    `,
    luxury: `
      bg-gradient-to-r from-unity-champagne to-unity-gold text-unity-midnight
      border border-unity-champagne shadow-unity-luxury
      hover:shadow-unity-luxury hover:scale-[1.02]
      font-display font-bold tracking-wide
    `,
    ghost: `
      bg-transparent text-unity-platinum border border-unity-platinum/20
      hover:bg-unity-platinum/10 hover:border-unity-platinum/40
      font-body font-medium
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  return (
    <motion.div
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled || loading}
        className={cn(
          'btn-enhanced gpu-accelerated',
          variants[variant],
          sizes[size],
          disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          'transition-all duration-300 ease-out relative overflow-hidden',
          className
        )}
      >
        {/* Content */}
        <div className="relative flex items-center gap-2">
          {loading ? (
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            icon && <span className="text-current">{icon}</span>
          )}
          {children}
        </div>
      </Button>
    </motion.div>
  );
};

export default EnhancedButton;
