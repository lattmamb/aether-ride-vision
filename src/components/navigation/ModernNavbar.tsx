
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Search, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

// Import modern components
import ModernLogo from "@/components/navigation/ModernLogo";
import ModernNavLink from "@/components/navigation/ModernNavLink";
import ModernNavButtons from "@/components/navigation/ModernNavButtons";
import ModernSearchOverlay from "@/components/navigation/ModernSearchOverlay";
import ModernMobileMenu from "@/components/navigation/ModernMobileMenu";
import ModernDropdownMenu from "@/components/navigation/ModernDropdownMenu";

const ModernNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled, scrollProgress } = useScroll();

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleBookNow = () => {
    navigate("/vehicles");
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navLinks = [
    { 
      path: '/', 
      label: 'Home',
      type: 'link' as const
    },
    { 
      path: '/vehicles', 
      label: 'Vehicles',
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
      type: 'link' as const
    },
    { 
      path: '/about', 
      label: 'About',
      type: 'link' as const
    }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-card backdrop-blur-xl py-2 shadow-xl border-b border-white/10"
          : "bg-transparent py-4"
      )}
    >
      {/* Enhanced progress indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#9b87f5] via-[#7c3aed] to-[#9b87f5] rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Modern Logo */}
        <ModernLogo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            link.type === 'dropdown' ? (
              <ModernDropdownMenu
                key={link.path}
                label={link.label}
                items={link.dropdownItems!}
                isActive={isActiveRoute(link.path)}
                isOpen={activeDropdown === link.label}
                onToggle={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                delay={index}
              />
            ) : (
              <ModernNavLink 
                key={link.path}
                to={link.path} 
                label={link.label}
                isActive={isActiveRoute(link.path)}
                delay={index}
              />
            )
          ))}
        </div>

        {/* Modern Action Buttons */}
        <ModernNavButtons 
          handleBookNow={handleBookNow} 
          toggleSearch={toggleSearch} 
          isActiveRoute={isActiveRoute}
          searchOpen={searchOpen}
        />

        {/* Modern Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden neumorphic-button p-3 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Modern Search overlay */}
      <ModernSearchOverlay isOpen={searchOpen} />

      {/* Modern Mobile menu */}
      <ModernMobileMenu 
        isOpen={isMenuOpen} 
        navLinks={navLinks} 
        isActiveRoute={isActiveRoute}
        handleBookNow={handleBookNow}
        onClose={() => setIsMenuOpen(false)}
      />
    </motion.nav>
  );
};

export default ModernNavbar;
