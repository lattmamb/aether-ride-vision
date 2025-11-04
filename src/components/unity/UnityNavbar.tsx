import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Bell, Menu, X } from 'lucide-react';
import { useUnity } from '@/contexts/UnityContext';
import AppSwitcher from '@/components/navigation/AppSwitcher';

export const UnityNavbar: React.FC = () => {
  const { notifications } = useUnity();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 liquid-glass backdrop-blur-xl border-b border-glass-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-xl unity-gradient-cyan opacity-80 blur-md" />
              <div className="relative text-white font-space font-bold text-2xl">U</div>
            </div>
            <span className="text-xl font-space font-bold text-white hidden sm:block">Unity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/social" className="text-white/70 hover:text-white transition-colors font-inter">
              Social
            </Link>
            <Link to="/vehicles" className="text-white/70 hover:text-white transition-colors font-inter">
              Rides
            </Link>
            <Link to="/about" className="text-white/70 hover:text-white transition-colors font-inter">
              Discover
            </Link>
            <Link to="/pricing" className="text-white/70 hover:text-white transition-colors font-inter">
              Marketplace
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-unity-cyan rounded-full animate-pulse" />
              )}
            </button>

            {/* App Switcher */}
            <AppSwitcher />

            {/* Get Started */}
            <Link
              to="/vehicles"
              className="hidden md:block px-4 py-2 unity-gradient-cyan text-white rounded-lg font-inter font-medium hover:shadow-glow-cyan transition-all"
            >
              Get Started
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-glass-border"
          >
            <div className="flex flex-col gap-4">
              <Link to="/social" className="text-white/70 hover:text-white transition-colors font-inter">
                Social
              </Link>
              <Link to="/vehicles" className="text-white/70 hover:text-white transition-colors font-inter">
                Rides
              </Link>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors font-inter">
                Discover
              </Link>
              <Link to="/pricing" className="text-white/70 hover:text-white transition-colors font-inter">
                Marketplace
              </Link>
              <Link
                to="/vehicles"
                className="px-4 py-2 unity-gradient-cyan text-white rounded-lg font-inter font-medium text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
