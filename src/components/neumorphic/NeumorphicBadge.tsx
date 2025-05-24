
import React from 'react';

interface NeumorphicBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  size?: 'small' | 'medium';
}

const NeumorphicBadge: React.FC<NeumorphicBadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium'
}) => {
  const getVariantStyles = () => {
    const baseStyles = 'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200';
    
    switch (variant) {
      case 'success':
        return `${baseStyles} bg-green-100 text-green-700
          shadow-[3px_3px_6px_rgba(34,197,94,0.2),-3px_-3px_6px_rgba(134,239,172,0.2)]`;
      
      case 'warning':
        return `${baseStyles} bg-orange-100 text-orange-700
          shadow-[3px_3px_6px_rgba(251,146,60,0.2),-3px_-3px_6px_rgba(254,215,170,0.2)]`;
      
      case 'info':
        return `${baseStyles} bg-blue-100 text-blue-700
          shadow-[3px_3px_6px_rgba(59,130,246,0.2),-3px_-3px_6px_rgba(147,197,253,0.2)]`;
      
      default:
        return `${baseStyles} bg-gray-100 text-gray-700
          shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]`;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-1 text-xs';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  return (
    <span className={`${getVariantStyles()} ${getSizeStyles()}`}>
      {children}
    </span>
  );
};

export default NeumorphicBadge;
