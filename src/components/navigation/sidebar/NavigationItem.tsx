
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface NavigationItemProps {
  item: {
    path: string;
    label: string;
    icon: React.ComponentType<any>;
    type: 'link' | 'dropdown';
    dropdownItems?: Array<{
      label: string;
      path: string;
    }>;
  };
  index: number;
  isExpanded: boolean;
  isActiveRoute: (path: string) => boolean;
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  index,
  isExpanded,
  isActiveRoute,
  activeDropdown,
  setActiveDropdown,
}) => {
  if (item.type === 'dropdown') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <button
          className={`w-full neumorphic-button rounded-xl p-3 flex items-center gap-3 transition-all duration-300 ${
            isActiveRoute(item.path) 
              ? 'neumorphic-inset text-[#9b87f5]' 
              : 'text-white/90 hover:text-white hover:neumorphic-hover'
          }`}
          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
        >
          <item.icon className="h-5 w-5 flex-shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
          {isExpanded && (
            <motion.div
              animate={{ rotate: activeDropdown === item.label ? 90 : 0 }}
              className="ml-auto"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          )}
        </button>
        
        <AnimatePresence>
          {activeDropdown === item.label && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-4 mt-2 space-y-1 overflow-hidden"
            >
              {item.dropdownItems?.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className="block p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#9b87f5]/60" />
                    {subItem.label}
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={item.path}
        className={`w-full neumorphic-button rounded-xl p-3 flex items-center gap-3 transition-all duration-300 ${
          isActiveRoute(item.path) 
            ? 'neumorphic-inset text-[#9b87f5]' 
            : 'text-white/90 hover:text-white hover:neumorphic-hover'
        }`}
      >
        <item.icon className="h-5 w-5 flex-shrink-0" />
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-medium whitespace-nowrap"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

export default NavigationItem;
