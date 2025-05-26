
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Zap } from 'lucide-react';

interface SidebarActionsProps {
  isExpanded: boolean;
  isActiveRoute: (path: string) => boolean;
}

const SidebarActions: React.FC<SidebarActionsProps> = ({ isExpanded, isActiveRoute }) => {
  return (
    <div className="p-4 border-t border-white/10 space-y-3">
      {/* Search */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="w-full neumorphic-button rounded-xl p-3 flex items-center gap-3"
      >
        <Search className="h-5 w-5 flex-shrink-0 text-[#9b87f5]" />
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="text-white/90 font-medium whitespace-nowrap"
            >
              Search
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Dashboard */}
      <Link to="/dashboard">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`w-full neumorphic-button rounded-xl p-3 flex items-center gap-3 ${
            isActiveRoute('/dashboard') 
              ? 'neumorphic-inset text-[#9b87f5]' 
              : 'text-white/90 hover:text-white hover:neumorphic-hover'
          }`}
        >
          <User className="h-5 w-5 flex-shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-medium whitespace-nowrap"
              >
                Dashboard
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </Link>

      {/* Book Now */}
      <Link to="/vehicles">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] p-3 flex items-center gap-3 shadow-lg"
        >
          <Zap className="h-5 w-5 flex-shrink-0 text-white" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-white font-semibold whitespace-nowrap"
              >
                Book Now
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </Link>
    </div>
  );
};

export default SidebarActions;
