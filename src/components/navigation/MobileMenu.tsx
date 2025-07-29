
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, MapPin as MapPinIcon, CreditCard as CreditCardIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: Array<{ path: string; label: string }>;
  isActiveRoute: (path: string) => boolean;
  handleBookNow: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  navLinks, 
  isActiveRoute,
  handleBookNow
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden backdrop-blur-lg bg-black/90 absolute top-full left-0 right-0 py-4 px-4 flex flex-col gap-4 border-t border-[#9b87f5]/10 overflow-hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`py-2 ${isActiveRoute(link.path) 
                  ? 'border-l-2 border-[#9b87f5] pl-2'
                  : 'pl-4'}`}
              >
                <Link
                  to={link.path}
                  className={`transition-colors ${isActiveRoute(link.path) 
                    ? 'text-white font-medium' 
                    : 'text-white/80 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-2 pt-2 border-t border-white/10"
          >
            <div className="relative">
              <input 
                type="text"
                placeholder="Search"
                className="w-full p-2 pl-9 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
              />
              <Search className="absolute left-2 top-2 h-5 w-5 text-white/60" />
            </div>

            <Link to="/dashboard">
              <Button 
                variant="outline" 
                size="sm" 
                className={`w-full border-[#9b87f5]/30 ${isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20 text-white' : 'text-white'}`}
              >
                <User className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Button 
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-2 mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/locations" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg text-center">
              <MapPinIcon className="w-5 h-5 mx-auto mb-1 text-[#9b87f5]" />
              <span className="text-xs text-white/80">Locations</span>
            </Link>
            <Link to="/pricing" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg text-center">
              <CreditCardIcon className="w-5 h-5 mx-auto mb-1 text-[#9b87f5]" />
              <span className="text-xs text-white/80">Pricing</span>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
