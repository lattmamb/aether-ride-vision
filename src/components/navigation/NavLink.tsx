
import React from "react";
import { motion } from "framer-motion";
import { useGenieNavigate } from "@/hooks/useGenieNavigate";

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  delay: number;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive, delay }) => {
  const navigateWithGenie = useGenieNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithGenie(to);
  };

  return (
    <motion.div
      custom={delay}
      variants={{
        initial: { opacity: 0, y: -10 },
        animate: (delay: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: delay * 0.1, duration: 0.4 }
        })
      }}
      initial="initial"
      animate="animate"
    >
      <a 
        href={to}
        onClick={handleClick}
        className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
          isActive 
            ? 'text-white neumorphic-inset' 
            : 'text-white/80 hover:text-white neumorphic-button hover:neumorphic-hover'
        }`}
      >
        <span className="relative z-10">{label}</span>
        
        {/* Active state background */}
        {isActive && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#7c3aed]/20 rounded-lg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9b87f5]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </motion.div>
  );
};

export default NavLink;
