
import React from "react";
import { Button } from "@/components/ui/button";
import { User, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useGenieNavigate } from "@/hooks/useGenieNavigate";

interface NavbarButtonsProps {
  handleBookNow: () => void;
  toggleSearch: () => void;
  isActiveRoute: (path: string) => boolean;
  searchOpen: boolean;
}

const NavbarButtons: React.FC<NavbarButtonsProps> = ({ 
  handleBookNow, 
  toggleSearch, 
  isActiveRoute,
  searchOpen
}) => {
  const navigateWithGenie = useGenieNavigate();

  const handleDashboardClick = () => {
    navigateWithGenie('/dashboard');
  };

  return (
    <div className="hidden md:flex items-center gap-3">
      {/* Search Button */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          className={`neumorphic-button p-3 rounded-xl transition-all duration-300 ${
            searchOpen ? 'neumorphic-inset text-[#9b87f5]' : 'text-white/90 hover:text-white'
          }`}
          onClick={toggleSearch}
        >
          <Search className="h-5 w-5" />
        </button>
      </motion.div>

      {/* Dashboard Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={handleDashboardClick}
          className={`neumorphic-button px-4 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
            isActiveRoute('/dashboard') 
              ? 'neumorphic-inset text-[#9b87f5]' 
              : 'text-white/90 hover:text-white hover:neumorphic-hover'
          }`}
        >
          <User className="w-4 h-4" />
          <span className="font-medium">Dashboard</span>
        </button>
      </motion.div>

      {/* Book Now Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          className="relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={handleBookNow}
        >
          <div className="relative z-10 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Book Now
          </div>
          
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#9b87f5]"
            initial={{ x: "100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-[#7c3aed]/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
        </button>
      </motion.div>
    </div>
  );
};

export default NavbarButtons;
