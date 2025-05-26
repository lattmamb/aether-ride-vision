
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface SidebarToggleProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isExpanded, setIsExpanded }) => {
  return (
    <div className="hidden lg:block p-4">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="w-full neumorphic-button p-3 rounded-xl flex items-center justify-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default SidebarToggle;
