
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CarFront, PiggyBank, MapPin, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
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

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 md:hidden bg-black/80 backdrop-blur-lg z-40 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path === '/menu' ? '#' : item.path}
            className="flex flex-col items-center justify-center py-2 relative"
            onClick={(e) => {
              if (item.path === '/menu') {
                e.preventDefault();
                // Toggle main navigation menu
                const menuButton = document.querySelector('nav button') as HTMLButtonElement;
                if (menuButton) menuButton.click();
              }
            }}
          >
            <div className={`flex flex-col items-center justify-center ${isActive(item.path) ? 'text-[#9b87f5]' : 'text-white/70'}`}>
              {isActive(item.path) && (
                <motion.div 
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-x-6 top-0 h-1 bg-[#9b87f5] rounded-b-md"
                />
              )}
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] mt-1">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default BottomNavigation;
