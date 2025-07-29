
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  delay: number;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive, delay }) => {
  return (
    <motion.div
      custom={delay}
      variants={{
        initial: { opacity: 0, y: -5 },
        animate: (delay: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: delay * 0.1, duration: 0.3 }
        })
      }}
      initial="initial"
      animate="animate"
    >
      <Link 
        to={to} 
        className={`transition-colors relative ${
          isActive 
            ? 'text-white' 
            : 'text-white/80 hover:text-white'
        }`}
      >
        {label}
        {isActive && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#9b87f5]" 
          />
        )}
      </Link>
    </motion.div>
  );
};

export default NavLink;
