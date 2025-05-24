
import React, { useRef, useEffect } from 'react';
import { useAdvancedCursor } from '@/hooks/useAdvancedCursor';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'soft' | 'inset';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  disabled = false
}) => {
  const { smoothPosition } = useAdvancedCursor();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && !disabled) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      buttonRef.current.style.setProperty('--mouse-x', `${x}%`);
      buttonRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition, disabled]);

  const getVariantStyles = () => {
    const baseStyles = 'relative font-medium transition-all duration-300 ease-out transform-gpu';
    
    switch (variant) {
      case 'soft':
        return `${baseStyles} bg-gray-100 text-gray-700 rounded-xl
          shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
          hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
          active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]`;
      
      case 'inset':
        return `${baseStyles} bg-gray-100 text-gray-600 rounded-xl
          shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]
          hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
          active:shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]`;
      
      case 'secondary':
        return `${baseStyles} bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl
          shadow-[8px_8px_16px_rgba(59,130,246,0.3),-8px_-8px_16px_rgba(147,197,253,0.3)]
          hover:shadow-[6px_6px_12px_rgba(59,130,246,0.4),-6px_-6px_12px_rgba(147,197,253,0.4)]
          active:shadow-[inset_4px_4px_8px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(147,197,253,0.3)]`;
      
      default: // primary
        return `${baseStyles} bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-xl
          shadow-[8px_8px_16px_rgba(155,135,245,0.3),-8px_-8px_16px_rgba(196,181,253,0.3)]
          hover:shadow-[6px_6px_12px_rgba(155,135,245,0.4),-6px_-6px_12px_rgba(196,181,253,0.4)]
          active:shadow-[inset_4px_4px_8px_rgba(155,135,245,0.3),inset_-4px_-4px_8px_rgba(196,181,253,0.3)]`;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5'}
      `}
    >
      {/* Subtle light reflection effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at var(--mouse-x, 30%) var(--mouse-y, 30%),
              rgba(255, 255, 255, 0.8),
              transparent 50%
            )
          `
        }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default NeumorphicButton;
