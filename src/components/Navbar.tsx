import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // Handle "Book Now" button click - navigate to vehicles page
  const handleBookNow = () => {
    navigate("/vehicles");
  };

  const navLinkVariants = {
    initial: { opacity: 0, y: -5 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.3 }
    })
  };
  
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-tesla-dark-80 backdrop-blur-lg py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
            <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Unity Fleet</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/vehicles', label: 'Vehicles' },
            { path: '/pricing', label: 'Pricing' },
            { path: '/locations', label: 'Locations' },
            { path: '/about', label: 'About' }
          ].map((link, index) => (
            <motion.div
              key={link.path}
              custom={index}
              variants={navLinkVariants}
              initial="initial"
              animate="animate"
            >
              <Link 
                to={link.path} 
                className={`transition-colors relative ${
                  isActiveRoute(link.path) 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActiveRoute(link.path) && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#9b87f5]" 
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/dashboard">
            <Button 
              variant="outline" 
              size="sm" 
              className={`border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 ${isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20' : ''}`}
            >
              <User className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </Link>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-lg bg-black/70 absolute top-full left-0 right-0 py-4 px-4 flex flex-col gap-4 border-t border-[#9b87f5]/10"
          >
            {[
              { path: '/', label: 'Home' },
              { path: '/vehicles', label: 'Vehicles' },
              { path: '/pricing', label: 'Pricing' },
              { path: '/locations', label: 'Locations' },
              { path: '/about', label: 'About' }
            ].map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`py-2 block transition-colors ${
                    isActiveRoute(link.path) 
                      ? 'text-white font-medium border-l-2 border-[#9b87f5] pl-2' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <Link to="/dashboard">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full border-[#9b87f5]/30 ${isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20 text-white' : 'text-white'}`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button 
                className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
