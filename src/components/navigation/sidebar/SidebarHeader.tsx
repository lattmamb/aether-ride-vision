
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

interface SidebarHeaderProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isExpanded, setIsExpanded }) => {
  return (
    <div className="p-4 border-b border-white/10">
      <div className="flex items-center justify-between">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 neumorphic-button rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Unity Fleet</h2>
                <p className="text-xs text-white/60">Tesla Subscription</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-10 h-10 neumorphic-button rounded-xl flex items-center justify-center mx-auto"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="neumorphic-button p-2 rounded-lg lg:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>
    </div>
  );
};

export default SidebarHeader;
