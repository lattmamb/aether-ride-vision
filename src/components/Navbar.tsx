
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// Import refactored components
import Logo from "@/components/navigation/Logo";
import NavLink from "@/components/navigation/NavLink";
import NavbarButtons from "@/components/navigation/NavbarButtons";
import SearchOverlay from "@/components/navigation/SearchOverlay";
import MobileMenu from "@/components/navigation/MobileMenu";
import { useScroll } from "@/hooks/useScroll";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled, scrollProgress } = useScroll();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // Handle "Book Now" button click - navigate to vehicles page
  const handleBookNow = () => {
    navigate("/vehicles");
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/vehicles', label: 'Vehicles' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/locations', label: 'Locations' },
    { path: '/about', label: 'About' }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-tesla-dark-80/60 backdrop-blur-lg py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      {/* Progress indicator for scroll position */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#9b87f5]/80 via-[#9b87f5] to-[#7E69AB]/80"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink 
              key={link.path}
              to={link.path} 
              label={link.label}
              isActive={isActiveRoute(link.path)}
              delay={index}
            />
          ))}
        </div>

        {/* Right side buttons */}
        <NavbarButtons 
          handleBookNow={handleBookNow} 
          toggleSearch={toggleSearch} 
          isActiveRoute={isActiveRoute}
          searchOpen={searchOpen}
        />

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white p-2 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} />

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        navLinks={navLinks} 
        isActiveRoute={isActiveRoute}
        handleBookNow={handleBookNow}
      />
    </motion.nav>
  );
};

export default Navbar;
