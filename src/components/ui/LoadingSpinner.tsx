import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Car, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'car' | 'energy';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'default',
  text,
  className 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'car':
        return (
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Car className={cn(sizeClasses[size], "text-unity-purple")} />
          </motion.div>
        );
      
      case 'energy':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Zap className={cn(sizeClasses[size], "text-unity-teal")} />
          </motion.div>
        );
      
      default:
        return (
          <Loader2 
            className={cn(sizeClasses[size], "animate-spin text-unity-signature")} 
          />
        );
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      {renderSpinner()}
      {text && (
        <motion.p 
          className="text-sm text-white/70 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;