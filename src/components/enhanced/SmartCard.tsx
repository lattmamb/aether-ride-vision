
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAdvancedCursor } from '@/hooks/useAdvancedCursor';

interface SmartCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'interactive' | 'premium';
  glow?: boolean;
  tilt?: boolean;
}

const SmartCard: React.FC<SmartCardProps> = ({
  children,
  className = '',
  variant = 'default',
  glow = false,
  tilt = false
}) => {
  const { smoothPosition } = useAdvancedCursor();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current && tilt) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      cardRef.current.style.setProperty('--mouse-x', `${x}%`);
      cardRef.current.style.setProperty('--mouse-y', `${y}%`);

      if (isHovered) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (smoothPosition.y - centerY) / 20;
        const rotateY = (centerX - smoothPosition.x) / 20;
        
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    }
  }, [smoothPosition, isHovered, tilt]);

  const getVariantStyles = () => {
    const baseStyles = 'relative glass-card backdrop-blur-xl transition-all duration-500 ease-out transform-gpu';
    
    switch (variant) {
      case 'elevated':
        return `${baseStyles} shadow-2xl hover:shadow-[0_25px_50px_rgba(155,135,245,0.3)]`;
      case 'interactive':
        return `${baseStyles} cursor-pointer hover:-translate-y-2 hover:shadow-2xl`;
      case 'premium':
        return `${baseStyles} border-2 border-gradient-to-r from-[#9b87f5] to-[#7c3aed] shadow-[0_0_30px_rgba(155,135,245,0.2)]`;
      default:
        return `${baseStyles} hover:shadow-xl`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${getVariantStyles()} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (cardRef.current && tilt) {
          cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
      }}
    >
      {/* Dynamic background gradient */}
      {tilt && (
        <div 
          className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(
                circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(155, 135, 245, 0.4),
                transparent 60%
              )
            `,
            opacity: isHovered ? 0.3 : 0
          }}
        />
      )}

      {/* Glow effect */}
      {glow && (
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] opacity-20 blur-xl"
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SmartCard;
