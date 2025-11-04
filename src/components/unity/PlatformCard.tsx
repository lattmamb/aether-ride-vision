import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  gradient: string;
  delay?: number;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
  icon: Icon,
  title,
  description,
  path,
  gradient,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
    >
      <Link to={path}>
        <div className="group relative liquid-glass liquid-glass-hover rounded-2xl p-6 h-full">
          {/* Gradient glow effect */}
          <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
          
          {/* Icon with gradient background */}
          <div className={`relative w-16 h-16 ${gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-space font-semibold text-white mb-2 group-hover:text-unity-cyan transition-colors">
            {title}
          </h3>
          <p className="text-white/60 text-sm font-inter leading-relaxed">
            {description}
          </p>

          {/* Explore button */}
          <div className="mt-4 flex items-center gap-2 text-unity-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Explore</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
