
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Car, 
  DollarSign, 
  MapPin, 
  Info, 
  User, 
  Search,
  Menu,
  X,
  ChevronRight,
  Zap
} from "lucide-react";

const ModernSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const navigationItems = [
    {
      path: '/',
      label: 'Home',
      icon: Home,
      type: 'link' as const
    },
    {
      path: '/vehicles',
      label: 'Vehicles',
      icon: Car,
      type: 'dropdown' as const,
      dropdownItems: [
        { label: 'All Vehicles', path: '/vehicles' },
        { label: 'Sedans', path: '/vehicles?type=sedan' },
        { label: 'SUVs', path: '/vehicles?type=suv' },
        { label: 'Sports Cars', path: '/vehicles?type=sports' }
      ]
    },
    {
      path: '/pricing',
      label: 'Pricing',
      icon: DollarSign,
      type: 'dropdown' as const,
      dropdownItems: [
        { label: 'All Plans', path: '/pricing' },
        { label: 'Daily Rental', path: '/pricing#daily' },
        { label: 'Weekly Plans', path: '/pricing#weekly' },
        { label: 'Monthly Subscription', path: '/pricing#monthly' }
      ]
    },
    {
      path: '/locations',
      label: 'Locations',
      icon: MapPin,
      type: 'link' as const
    },
    {
      path: '/about',
      label: 'About',
      icon: Info,
      type: 'link' as const
    }
  ];

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
          {/* Header */}
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

          {/* Toggle Button for Desktop */}
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

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.type === 'dropdown' ? (
                  <div>
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
                  </div>
                ) : (
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
                )}
              </motion.div>
            ))}
          </nav>

          {/* Bottom Actions */}
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
