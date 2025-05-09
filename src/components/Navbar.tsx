import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, User, Search,
  MapPin as MapPinIcon, 
  CreditCard as CreditCardIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  delay: number;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive, delay }) => {
  return (
    <motion.div
      custom={delay}
      variants={{
        initial: { opacity: 0, y: -5 },
        animate: (delay: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: delay * 0.1, duration: 0.3 }
        })
      }}
      initial="initial"
      animate="animate"
    >
      <Link 
        to={to} 
        className={`transition-colors relative ${
          isActive 
            ? 'text-white' 
            : 'text-white/80 hover:text-white'
        }`}
      >
        {label}
        {isActive && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#9b87f5]" 
          />
        )}
      </Link>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
    setSearchOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // Handle "Book Now" button click - navigate to vehicles page
  const handleBookNow = () => {
    navigate("/vehicles");
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
          width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
        }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
            <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Unity Fleet</span>
        </Link>

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
        <div className="hidden md:flex items-center gap-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </motion.div>
        </div>

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
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl p-4 border-t border-white/10 shadow-lg"
          >
            <div className="container mx-auto">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search for vehicles, locations..."
                  className="w-full p-3 pr-10 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50"
                  autoFocus
                />
                <Search className="absolute right-3 top-3 text-white/60" />
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-sm text-white/60">Popular:</span>
                {["Tesla Model S", "SUVs", "California", "Weekly Rental"].map((term) => (
                  <span 
                    key={term}
                    className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full cursor-pointer transition-colors"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-lg bg-black/90 absolute top-full left-0 right-0 py-4 px-4 flex flex-col gap-4 border-t border-[#9b87f5]/10 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`py-2 ${isActiveRoute(link.path) 
                    ? 'border-l-2 border-[#9b87f5] pl-2'
                    : 'pl-4'}`}
                >
                  <Link
                    to={link.path}
                    className={`transition-colors ${isActiveRoute(link.path) 
                      ? 'text-white font-medium' 
                      : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-2 pt-2 border-t border-white/10"
            >
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 pl-9 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
                />
                <Search className="absolute left-2 top-2 h-5 w-5 text-white/60" />
              </div>

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
            </motion.div>
            
            {/* Quick action buttons */}
            <motion.div 
              className="grid grid-cols-2 gap-2 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/locations" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg text-center">
                <MapPinIcon className="w-5 h-5 mx-auto mb-1 text-[#9b87f5]" />
                <span className="text-xs text-white/80">Locations</span>
              </Link>
              <Link to="/pricing" className="bg-white/5 hover:bg-white/10 p-3 rounded-lg text-center">
                <CreditCardIcon className="w-5 h-5 mx-auto mb-1 text-[#9b87f5]" />
                <span className="text-xs text-white/80">Pricing</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

// Dummy component to get proper imports during refactoring
const MapPin = () => null;
const CreditCard = () => null;
