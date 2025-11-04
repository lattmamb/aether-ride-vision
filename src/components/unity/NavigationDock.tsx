import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Users, Car, Camera, Compass, ShoppingBag, Briefcase, Music, Heart } from 'lucide-react';
import { useUnity } from '@/contexts/UnityContext';

const platforms = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'social', label: 'Social', icon: Users, path: '/social' },
  { id: 'rides', label: 'Rides', icon: Car, path: '/vehicles' },
  { id: 'stories', label: 'Stories', icon: Camera, path: '/stories' },
  { id: 'discover', label: 'Discover', icon: Compass, path: '/discover' },
  { id: 'market', label: 'Market', icon: ShoppingBag, path: '/market' },
  { id: 'work', label: 'Work', icon: Briefcase, path: '/work' },
  { id: 'beats', label: 'Beats', icon: Music, path: '/beats' },
  { id: 'connect', label: 'Connect', icon: Heart, path: '/connect' },
];

export const NavigationDock: React.FC = () => {
  const location = useLocation();
  const { setCurrentPlatform } = useUnity();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <div className="liquid-glass rounded-2xl px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const active = isActive(platform.path);
            
            return (
              <Link
                key={platform.id}
                to={platform.path}
                onClick={() => setCurrentPlatform(platform.id as any)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    active
                      ? 'bg-unity-cyan text-white shadow-glow-cyan'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {platform.label}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
