
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Car, 
  DollarSign, 
  MapPin, 
  Info, 
  User, 
  Search,
  ChevronRight,
  Zap,
  Settings,
  BookOpen,
  BarChart3,
  Calendar,
  Bell,
  Grid3X3,
  Sparkles
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
  },
  {
    path: '/vehicles',
    label: 'Vehicles',
    icon: Car,
    children: [
      { path: '/vehicles', label: 'All Vehicles', icon: Grid3X3 },
      { path: '/vehicles?type=sedan', label: 'Sedans', icon: Car },
      { path: '/vehicles?type=suv', label: 'SUVs', icon: Car },
      { path: '/vehicles?type=sports', label: 'Sports Cars', icon: Car }
    ]
  },
  {
    path: '/pricing',
    label: 'Pricing',
    icon: DollarSign,
    children: [
      { path: '/pricing', label: 'All Plans', icon: DollarSign },
      { path: '/pricing#daily', label: 'Daily Rental', icon: Calendar },
      { path: '/pricing#monthly', label: 'Subscriptions', icon: BarChart3 }
    ]
  },
  {
    path: '/locations',
    label: 'Locations',
    icon: MapPin,
  },
  {
    path: '/about',
    label: 'About',
    icon: Info,
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: User,
    children: [
      { path: '/dashboard', label: 'Overview', icon: BarChart3 },
      { path: '/dashboard/bookings', label: 'My Bookings', icon: Calendar },
      { path: '/dashboard/settings', label: 'Settings', icon: Settings }
    ]
  }
];

interface IntelligentSidebarProps {
  onNavigate?: () => void;
}

const IntelligentSidebar: React.FC<IntelligentSidebarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Handle mouse position for trigger area
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Trigger area: left 1/16 of screen, top half only
      const triggerWidth = window.innerWidth / 16;
      const triggerHeight = window.innerHeight / 2;
      
      if (e.clientX <= triggerWidth && e.clientY <= triggerHeight) {
        setIsOpen(true);
      } else if (e.clientX > 320) { // Close when mouse moves away from sidebar
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    onNavigate?.();
  };

  return (
    <>
      {/* Trigger Icon - Always visible in top-left */}
      <motion.div
        className="fixed top-6 left-6 z-[60] pointer-events-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="relative w-12 h-12 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Pulsing glow background */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9b87f5]/30 via-[#7c3aed]/20 to-[#6366f1]/30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main button */}
          <div className="relative w-full h-full neumorphic-card rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Sparkles className="w-6 h-6 text-[#9b87f5]" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              opacity: { duration: 0.2 }
            }}
            className="fixed left-0 top-0 h-full w-80 z-[55] pointer-events-auto"
          >
            {/* Apple Intelligence-inspired glow border */}
            <motion.div
              className="absolute -inset-[2px] rounded-r-3xl bg-gradient-to-br from-[#9b87f5]/40 via-[#7c3aed]/30 to-[#6366f1]/40 blur-sm"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative h-full neumorphic-card backdrop-blur-xl border-r border-white/10 rounded-r-3xl overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 neumorphic-button rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center shadow-inner">
                      <span className="text-white font-bold text-lg">U</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Unity Fleet</h2>
                    <p className="text-sm text-white/60">Tesla Subscription</p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {item.children ? (
                      <div>
                        <motion.button
                          className={`w-full neumorphic-button rounded-xl p-4 flex items-center gap-3 transition-all duration-300 group ${
                            isActiveRoute(item.path) 
                              ? 'neumorphic-inset text-[#9b87f5]' 
                              : 'text-white/90 hover:text-white hover:neumorphic-hover'
                          }`}
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          <span className="font-medium flex-1 text-left">{item.label}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.div>
                        </motion.button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.children.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={handleNavClick}
                                  className={`block p-3 rounded-lg transition-all duration-200 ${
                                    isActiveRoute(subItem.path)
                                      ? 'bg-[#9b87f5]/20 text-[#9b87f5] border border-[#9b87f5]/30'
                                      : 'text-white/80 hover:text-white hover:bg-white/5'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <subItem.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{subItem.label}</span>
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
                        onClick={handleNavClick}
                        className={`w-full neumorphic-button rounded-xl p-4 flex items-center gap-3 transition-all duration-300 ${
                          isActiveRoute(item.path) 
                            ? 'neumorphic-inset text-[#9b87f5]' 
                            : 'text-white/90 hover:text-white hover:neumorphic-hover'
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-3 w-full"
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="p-4 border-t border-white/10">
                <Link to="/vehicles" onClick={handleNavClick}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] p-4 flex items-center gap-3 shadow-lg"
                  >
                    <Zap className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold">Book Now</span>
                    
                    {/* Animated shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IntelligentSidebar;
