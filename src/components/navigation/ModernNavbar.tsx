
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

const ModernNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled, scrollProgress } = useScroll();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-30 transition-all duration-500 border-b border-white/10",
        isScrolled
          ? "glass-card backdrop-blur-xl py-2 shadow-xl"
          : "bg-transparent py-4"
      )}
    >
      {/* Enhanced progress indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#9b87f5] via-[#7c3aed] to-[#9b87f5] rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <h1 className="text-xl font-bold text-white">
              {location.pathname === '/' && 'Home'}
              {location.pathname.startsWith('/vehicles') && 'Vehicles'}
              {location.pathname.startsWith('/pricing') && 'Pricing'}
              {location.pathname.startsWith('/locations') && 'Locations'}
              {location.pathname.startsWith('/about') && 'About'}
              {location.pathname.startsWith('/dashboard') && 'Dashboard'}
            </h1>
          </motion.div>

          {/* Right side content - can be expanded for notifications, user menu, etc. */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {/* Future: Add notifications, user menu, etc. */}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default ModernNavbar;
