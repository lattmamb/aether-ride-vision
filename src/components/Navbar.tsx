
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-tesla-dark-80 backdrop-blur-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
            <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
          </div>
          <span className="text-xl font-bold gradient-text">Unity Fleet</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-colors ${isActiveRoute('/') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/vehicles" 
            className={`transition-colors ${isActiveRoute('/vehicles') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Vehicles
          </Link>
          <Link 
            to="/pricing" 
            className={`transition-colors ${isActiveRoute('/pricing') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Pricing
          </Link>
          <Link 
            to="/locations" 
            className={`transition-colors ${isActiveRoute('/locations') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Locations
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isActiveRoute('/about') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            About
          </Link>
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
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 right-0 py-4 px-4 flex flex-col gap-4">
          <Link
            to="/"
            className={`py-2 transition-colors ${isActiveRoute('/') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/vehicles"
            className={`py-2 transition-colors ${isActiveRoute('/vehicles') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Vehicles
          </Link>
          <Link
            to="/pricing"
            className={`py-2 transition-colors ${isActiveRoute('/pricing') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Pricing
          </Link>
          <Link
            to="/locations"
            className={`py-2 transition-colors ${isActiveRoute('/locations') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Locations
          </Link>
          <Link
            to="/about"
            className={`py-2 transition-colors ${isActiveRoute('/about') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            About
          </Link>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
