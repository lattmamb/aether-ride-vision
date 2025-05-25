
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ModernLogoProps {
  className?: string;
}

const ModernLogo: React.FC<ModernLogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 z-10 ${className}`}>
      <motion.div 
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer neumorphic circle */}
        <div className="w-12 h-12 neumorphic-button rounded-full flex items-center justify-center">
          {/* Inner gradient circle */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center shadow-inner">
            <span className="text-white font-bold text-lg">U</span>
          </div>
        </div>
        
        {/* Animated glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-[#9b87f5]/20 blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Unity Fleet
        </motion.span>
        <motion.span 
          className="text-xs text-white/60 font-medium tracking-wide"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Tesla Subscription
        </motion.span>
      </div>
    </Link>
  );
};

export default ModernLogo;
