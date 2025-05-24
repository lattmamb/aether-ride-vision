
import React, { useRef, useEffect } from 'react';
import { useAdvancedCursor } from '@/hooks/useAdvancedCursor';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'raised' | 'inset' | 'flat';
  hover?: boolean;
}

const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = '',
  variant = 'raised',
  hover = true
}) => {
  const { smoothPosition } = useAdvancedCursor();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      cardRef.current.style.setProperty('--mouse-x', `${x}%`);
      cardRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition]);

  const getVariantStyles = () => {
    const baseStyles = 'relative bg-gray-100 rounded-2xl transition-all duration-300 ease-out';
    
    switch (variant) {
      case 'inset':
        return `${baseStyles}
          shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]
          ${hover ? 'hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]' : ''}`;
      
      case 'flat':
        return `${baseStyles}
          shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]
          ${hover ? 'hover:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]' : ''}`;
      
      default: // raised
        return `${baseStyles}
          shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff]
          ${hover ? 'hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:-translate-y-1' : ''}`;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        ${getVariantStyles()}
        ${className}
        transform-gpu
      `}
    >
      {/* Subtle inner highlight */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at var(--mouse-x, 30%) var(--mouse-y, 30%),
              rgba(255, 255, 255, 0.8),
              transparent 60%
            )
          `
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeumorphicCard;
