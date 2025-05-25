
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  path: string;
}

interface ModernDropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const ModernDropdownMenu: React.FC<ModernDropdownMenuProps> = ({ 
  label, 
  items, 
  isActive, 
  isOpen, 
  onToggle, 
  delay 
}) => {
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
      className="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <button
        className={`relative px-4 py-2 rounded-lg transition-all duration-300 group flex items-center gap-2 ${
          isActive 
            ? 'text-white neumorphic-inset' 
            : 'text-white/80 hover:text-white neumorphic-button hover:neumorphic-hover'
        }`}
        onClick={onToggle}
      >
        <span className="relative z-10">{label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
        
        {/* Active state background */}
        {isActive && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#7c3aed]/20 rounded-lg"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9b87f5]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-[200px] neumorphic-card backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="py-2">
              {items.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#9b87f5]/60 group-hover:bg-[#9b87f5] transition-colors" />
                      {item.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ModernDropdownMenu;
