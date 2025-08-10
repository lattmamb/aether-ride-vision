
import React from "react";
import AppSwitcher from "@/components/navigation/AppSwitcher";
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
          className={`text-foreground/80 hover:text-foreground hover:bg-foreground/10 ${searchOpen ? 'bg-foreground/10' : ''}`}
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
        <AppSwitcher />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </motion.div>
    </div>
  );
};

export default NavbarButtons;
