
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Search } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <div className="hidden md:flex items-center gap-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button 
          variant="ghost" 
          size="icon"
          className={`text-white/90 hover:text-white hover:bg-white/10 ${searchOpen ? 'bg-white/10' : ''}`}
          onClick={toggleSearch}
        >
          <Search className="h-5 w-5" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/dashboard">
          <Button 
            variant="outline" 
            size="sm" 
            className={`border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 ${isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20' : ''}`}
          >
            <User className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </motion.div>
    </div>
  );
};

export default NavbarButtons;
