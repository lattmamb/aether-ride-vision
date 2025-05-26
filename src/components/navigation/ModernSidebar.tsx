
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarToggle from "./sidebar/SidebarToggle";
import NavigationItem from "./sidebar/NavigationItem";
import SidebarActions from "./sidebar/SidebarActions";
import { navigationItems } from "./sidebar/navigationItems";

const ModernSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isExpanded ? 280 : 80,
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        className={`fixed left-0 top-0 h-full z-50 neumorphic-card backdrop-blur-xl border-r border-white/10 ${
          isExpanded ? 'lg:relative' : 'lg:relative'
        }`}
      >
        <div className="flex flex-col h-full">
          <SidebarHeader isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <SidebarToggle isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item, index) => (
              <NavigationItem
                key={item.path}
                item={item}
                index={index}
                isExpanded={isExpanded}
                isActiveRoute={isActiveRoute}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </nav>

          <SidebarActions isExpanded={isExpanded} isActiveRoute={isActiveRoute} />
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="lg:hidden fixed top-4 left-4 z-40 neumorphic-button p-3 rounded-xl"
        onClick={() => setIsExpanded(true)}
        style={{ display: isExpanded ? 'none' : 'block' }}
      >
        <Menu className="h-5 w-5" />
      </motion.button>
    </>
  );
};

export default ModernSidebar;
