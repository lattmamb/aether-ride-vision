
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
  Zap,
  Bell,
  Settings,
  Heart,
  TrendingUp,
  Brain
} from "lucide-react";

const EnhancedSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
      type: 'link' as const,
      badge: null
    },
    {
      path: '/ai-assistant',
      label: 'AI Assistant',
      icon: Brain,
      type: 'link' as const,
      badge: 'New',
      special: true
    },
    {
      path: '/vehicles',
      label: 'Fleet',
      icon: Car,
      type: 'dropdown' as const,
      badge: null,
      dropdownItems: [
        { label: 'All Vehicles', path: '/vehicles', description: 'Browse our entire fleet' },
        { label: 'Model S', path: '/vehicles?type=model-s', description: 'Luxury sedan' },
        { label: 'Model 3', path: '/vehicles?type=model-3', description: 'Premium sedan' },
        { label: 'Model X', path: '/vehicles?type=model-x', description: 'Performance SUV' },
        { label: 'Model Y', path: '/vehicles?type=model-y', description: 'Compact SUV' }
      ]
    },
    {
      path: '/pricing',
      label: 'Plans',
      icon: DollarSign,
      type: 'dropdown' as const,
      badge: null,
      dropdownItems: [
        { label: 'All Plans', path: '/pricing', description: 'Compare subscription plans' },
        { label: 'Daily', path: '/pricing#daily', description: 'Short-term rental' },
        { label: 'Weekly', path: '/pricing#weekly', description: 'Extended stays' },
        { label: 'Monthly', path: '/pricing#monthly', description: 'Long-term subscription' }
      ]
    },
    {
      path: '/locations',
      label: 'Locations',
      icon: MapPin,
      type: 'link' as const,
      badge: null
    },
    {
      path: '/about',
      label: 'About',
      icon: Info,
      type: 'link' as const,
      badge: null
    }
  ];

  const quickActions = [
    { icon: Search, label: 'Search', action: 'search', color: 'text-blue-400' },
    { icon: Bell, label: 'Notifications', action: 'notifications', color: 'text-yellow-400', badge: 3 },
    { icon: Heart, label: 'Favorites', action: 'favorites', color: 'text-red-400' },
    { icon: TrendingUp, label: 'Analytics', action: 'analytics', color: 'text-green-400' }
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
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isExpanded ? 320 : 80,
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }}
        className="fixed left-0 top-0 h-full z-50 neumorphic-card backdrop-blur-xl border-r border-white/10"
      >
        <div className="flex flex-col h-full">
          {/* Enhanced Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-4"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 neumorphic-button rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center shadow-inner">
                          <span className="text-white font-bold text-lg">U</span>
                        </div>
                      </div>
                      <motion.div 
                        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#9b87f5]/20 to-[#7c3aed]/20 blur-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                        Unity Fleet
                      </h2>
                      <p className="text-xs text-white/60 font-medium">Tesla Subscription</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-12 h-12 neumorphic-button rounded-2xl flex items-center justify-center mx-auto"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">U</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="neumorphic-button p-3 rounded-xl lg:flex hidden"
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
          </div>

          {/* Quick Actions Bar */}
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 border-b border-white/5"
            >
              <div className="grid grid-cols-4 gap-2">
                {quickActions.map((action) => (
                  <motion.button
                    key={action.action}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative neumorphic-button p-3 rounded-xl flex flex-col items-center gap-1 group"
                  >
                    <action.icon className={`h-4 w-4 ${action.color} group-hover:scale-110 transition-all duration-200`} />
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors">{action.label}</span>
                    {action.badge && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold"
                      >
                        {action.badge}
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Enhanced Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.type === 'dropdown' ? (
                  <div>
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        y: -1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full neumorphic-button rounded-2xl p-4 flex items-center gap-4 transition-all duration-500 relative overflow-hidden ${
                        isActiveRoute(item.path) 
                          ? 'neumorphic-inset text-[#9b87f5]' 
                          : 'text-white/90 hover:text-white hover:neumorphic-hover'
                      }`}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <item.icon className={`h-6 w-6 flex-shrink-0 ${hoveredItem === item.label ? 'scale-110' : ''} transition-transform duration-200`} />
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="flex items-center justify-between flex-1"
                          >
                            <span className="font-semibold">{item.label}</span>
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <span className="px-2 py-1 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full text-xs font-bold">
                                  {item.badge}
                                </span>
                              )}
                              <motion.div
                                animate={{ rotate: activeDropdown === item.label ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronRight className="h-4 w-4" />
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Apple-style shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                        animate={{ 
                          opacity: hoveredItem === item.label ? 1 : 0,
                          x: hoveredItem === item.label ? ["-100%", "100%"] : "-100%"
                        }}
                        transition={{ 
                          opacity: { duration: 0.3 },
                          x: { duration: 1.5, repeat: Infinity, ease: "linear" }
                        }}
                      />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-1 overflow-hidden"
                        >
                          {item.dropdownItems?.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                              <Link
                                to={subItem.path}
                                className="block p-3 text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300 group"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-[#9b87f5]/60 group-hover:bg-[#9b87f5] group-hover:scale-125 transition-all" />
                                  <div>
                                    <div className="font-medium">{subItem.label}</div>
                                    <div className="text-xs text-white/50">{subItem.description}</div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`w-full block`}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        y: -1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full neumorphic-button rounded-2xl p-4 flex items-center gap-4 transition-all duration-500 relative overflow-hidden ${
                        isActiveRoute(item.path) 
                          ? 'neumorphic-inset text-[#9b87f5]' 
                          : 'text-white/90 hover:text-white hover:neumorphic-hover'
                      } ${item.special ? 'bg-gradient-to-r from-[#9b87f5]/10 to-[#7c3aed]/10' : ''}`}
                    >
                      <item.icon className={`h-6 w-6 flex-shrink-0 ${hoveredItem === item.label ? 'scale-110' : ''} transition-transform duration-200`} />
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="flex items-center justify-between flex-1"
                          >
                            <span className="font-semibold whitespace-nowrap">{item.label}</span>
                            {item.badge && (
                              <span className="px-2 py-1 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full text-xs font-bold">
                                {item.badge}
                              </span>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Apple-style shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                        animate={{ 
                          opacity: hoveredItem === item.label ? 1 : 0,
                          x: hoveredItem === item.label ? ["-100%", "100%"] : "-100%"
                        }}
                        transition={{ 
                          opacity: { duration: 0.3 },
                          x: { duration: 1.5, repeat: Infinity, ease: "linear" }
                        }}
                      />
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Bottom Section */}
          <div className="p-4 border-t border-white/10 space-y-3">
            {/* Dashboard */}
            <Link to="/dashboard">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -1,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`w-full neumorphic-button rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 ${
                  isActiveRoute('/dashboard') 
                    ? 'neumorphic-inset text-[#9b87f5]' 
                    : 'text-white/90 hover:text-white hover:neumorphic-hover'
                }`}
              >
                <User className="h-6 w-6 flex-shrink-0" />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-semibold whitespace-nowrap"
                    >
                      Dashboard
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>

            {/* Settings */}
            {isExpanded && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -1,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full neumorphic-button rounded-2xl p-4 flex items-center gap-4 text-white/90 hover:text-white hover:neumorphic-hover transition-all duration-300"
              >
                <Settings className="h-6 w-6 flex-shrink-0" />
                <span className="font-semibold">Settings</span>
              </motion.button>
            )}

            {/* Enhanced Book Now */}
            <Link to="/vehicles">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] p-4 flex items-center gap-4 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <Zap className="h-6 w-6 flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-200" />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="text-white font-bold whitespace-nowrap"
                    >
                      Book Now
                    </motion.span>
                  )}
                </AnimatePresence>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#9b87f5]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Apple-style shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="lg:hidden fixed top-6 left-6 z-40 neumorphic-button p-4 rounded-2xl"
        onClick={() => setIsExpanded(true)}
        style={{ display: isExpanded ? 'none' : 'block' }}
      >
        <Menu className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default EnhancedSidebar;
