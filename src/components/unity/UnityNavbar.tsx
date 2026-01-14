import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Bell, Menu, X } from 'lucide-react';
import { useUnity } from '@/contexts/UnityContext';
import AppSwitcher from '@/components/navigation/AppSwitcher';
import { PillBase } from '@/components/ui/3d-adaptive-navigation-bar';
import Logo from '@/components/navigation/Logo';

export const UnityNavbar: React.FC = () => {
  const { notifications } = useUnity();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Social', id: 'social', path: '/social' },
    { label: 'Rides', id: 'rides', path: '/vehicles' },
    { label: 'Discover', id: 'discover', path: '/about' },
    { label: 'Marketplace', id: 'marketplace', path: '/pricing' },
  ];

  const handleNavigate = (id: string, path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-metallic backdrop-blur-xl border-b border-silver-600/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation - 3D Adaptive Navigation Bar */}
          <div className="hidden md:block">
            <PillBase items={navItems} onNavigate={handleNavigate} />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl text-silver-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-xl text-silver-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"
                  style={{ boxShadow: '0 0 8px rgba(0, 224, 255, 0.6)' }}
                />
              )}
            </motion.button>

            {/* App Switcher */}
            <AppSwitcher />

            {/* Get Started Button */}
            <Link to="/vehicles">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-inter font-medium text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00E0FF 0%, #00B8D4 100%)',
                  boxShadow: '0 4px 20px rgba(0, 224, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  color: 'hsl(220, 15%, 4%)',
                }}
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>

            {/* Mobile menu toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-silver-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-silver-600/20 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-silver-300 hover:text-white hover:bg-white/5 transition-all font-inter"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.4 }}
              className="pt-2"
            >
              <Link
                to="/vehicles"
                onClick={() => setMobileMenuOpen(false)}
                className="block mx-4 px-4 py-3 text-center rounded-xl font-inter font-medium"
                style={{
                  background: 'linear-gradient(135deg, #00E0FF 0%, #00B8D4 100%)',
                  color: 'hsl(220, 15%, 4%)',
                }}
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
