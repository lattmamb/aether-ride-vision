
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, CarFront, PiggyBank, MapPin, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGenieNavigate } from '@/hooks/useGenieNavigate';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const navigateWithGenie = useGenieNavigate();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/vehicles', label: 'Vehicles', icon: CarFront },
    { path: '/pricing', label: 'Pricing', icon: PiggyBank },
    { path: '/locations', label: 'Locations', icon: MapPin },
    { path: '/menu', label: 'Menu', icon: Menu },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (path === '/menu') {
      // Toggle main navigation menu
      const menuButton = document.querySelector('nav button') as HTMLButtonElement;
      if (menuButton) menuButton.click();
    } else {
      navigateWithGenie(path);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 md:hidden bg-black/80 backdrop-blur-lg z-40 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-5">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path === '/menu' ? '#' : item.path}
            className="flex flex-col items-center justify-center py-2 relative"
            onClick={(e) => handleNavClick(item.path, e)}
          >
            <div className={`flex flex-col items-center justify-center transition-all duration-300 ${
              isActive(item.path) ? 'text-[#9b87f5] scale-110' : 'text-white/70 hover:text-white hover:scale-105'
            }`}>
              {isActive(item.path) && (
                <motion.div 
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-x-6 top-0 h-1 bg-[#9b87f5] rounded-b-md"
                />
              )}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              <span className="text-[10px] mt-1">{item.label}</span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default BottomNavigation;
