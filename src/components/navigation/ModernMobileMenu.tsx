
import React from "react";
import { Link } from "react-router-dom";
import { Search, User, MapPin, CreditCard, Zap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  path: string;
  label: string;
  type: 'link' | 'dropdown';
  dropdownItems?: Array<{ label: string; path: string }>;
}

interface ModernMobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  isActiveRoute: (path: string) => boolean;
  handleBookNow: () => void;
  onClose: () => void;
}

const ModernMobileMenu: React.FC<ModernMobileMenuProps> = ({ 
  isOpen, 
  navLinks, 
  isActiveRoute,
  handleBookNow,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden neumorphic-card backdrop-blur-2xl absolute top-full left-0 right-0 border-t border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="p-6 space-y-6">
            {/* Search Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="neumorphic-inset rounded-2xl p-1"
            >
              <div className="relative flex items-center">
                <input 
                  type="text"
                  placeholder="Search..."
                  className="w-full p-4 bg-transparent text-white placeholder-white/60 focus:outline-none"
                />
                <div className="neumorphic-button p-3 rounded-xl mr-2">
                  <Search className="h-5 w-5 text-[#9b87f5]" />
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  {link.type === 'dropdown' ? (
                    <div className="space-y-2">
                      <div className={`neumorphic-button rounded-xl p-4 ${
                        isActiveRoute(link.path) ? 'neumorphic-inset' : ''
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${
                            isActiveRoute(link.path) ? 'text-[#9b87f5]' : 'text-white/90'
                          }`}>
                            {link.label}
                          </span>
                          <ChevronRight className="w-4 h-4 text-white/60" />
                        </div>
                      </div>
                      <div className="ml-4 space-y-1">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className="block p-3 text-white/80 hover:text-white transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#9b87f5]/60" />
                              {item.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={onClose}
                      className={`block neumorphic-button rounded-xl p-4 transition-all duration-300 ${
                        isActiveRoute(link.path) 
                          ? 'neumorphic-inset text-[#9b87f5] font-medium' 
                          : 'text-white/90 hover:text-white hover:neumorphic-hover'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 pt-4 border-t border-white/10"
            >
              <Link to="/dashboard" onClick={onClose}>
                <button
                  className={`w-full neumorphic-button rounded-xl p-4 flex items-center gap-3 transition-all duration-300 ${
                    isActiveRoute('/dashboard') 
                      ? 'neumorphic-inset text-[#9b87f5]' 
                      : 'text-white/90 hover:text-white hover:neumorphic-hover'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Dashboard</span>
                </button>
              </Link>
              
              <button 
                className="w-full relative overflow-hidden px-6 py-4 rounded-xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white font-semibold shadow-lg transition-all duration-300 group"
                onClick={() => {
                  handleBookNow();
                  onClose();
                }}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Book Now
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#9b87f5]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
            
            {/* Quick Access */}
            <motion.div 
              className="grid grid-cols-2 gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/locations" onClick={onClose} className="neumorphic-button hover:neumorphic-hover p-4 rounded-xl text-center transition-all duration-300 group">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-[#9b87f5] group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/80 group-hover:text-white">Locations</span>
              </Link>
              <Link to="/pricing" onClick={onClose} className="neumorphic-button hover:neumorphic-hover p-4 rounded-xl text-center transition-all duration-300 group">
                <CreditCard className="w-6 h-6 mx-auto mb-2 text-[#9b87f5] group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white/80 group-hover:text-white">Pricing</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernMobileMenu;
