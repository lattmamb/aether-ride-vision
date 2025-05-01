
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const handleBookNow = () => {
    navigate("/vehicles");
  };

  // Dropdown menu items
  const vehiclesMenuItems = [
    {
      title: "Electric Vehicles",
      description: "Our latest electric vehicle lineup",
      href: "/vehicles?category=electric",
      src: "/placeholder.svg",
    },
    {
      title: "Hybrid Vehicles",
      description: "Fuel efficient hybrid options",
      href: "/vehicles?category=hybrid",
      src: "/placeholder.svg",
    },
    {
      title: "Luxury Vehicles",
      description: "Premium driving experience",
      href: "/vehicles?category=luxury",
      src: "/placeholder.svg",
    },
  ];

  const locationMenuItems = [
    {
      title: "San Francisco",
      description: "California pickup locations",
      href: "/locations?city=sf",
      src: "/placeholder.svg",
    },
    {
      title: "New York",
      description: "East coast availability",
      href: "/locations?city=ny",
      src: "/placeholder.svg",
    },
    {
      title: "All Locations",
      description: "View our complete network",
      href: "/locations",
      src: "/placeholder.svg",
    },
  ];

  // Only show Nav Dropdown on desktop
  const DesktopNavDropdown = () => (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-white">
            Vehicles
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px] glass-card backdrop-blur-md">
              <div className="grid gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                {vehiclesMenuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block select-none space-y-1 rounded-md p-3 hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/70">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-white">
            Locations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 md:w-[500px] glass-card backdrop-blur-md">
              <div className="grid gap-3 p-4 md:grid-cols-2">
                {locationMenuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block select-none space-y-1 rounded-md p-3 hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/70">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  // Mobile Nav using sheet component
  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="glass-effect border-r border-white/10 bg-tesla-dark/90 backdrop-blur-xl w-[80%] p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-white/10">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
                <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
              </div>
              <span className="text-xl font-bold gradient-text">Unity Fleet</span>
            </Link>
          </div>

          <div className="flex-1 overflow-auto py-6 px-4 flex flex-col gap-6">
            <div>
              <div className="text-sm text-white/60 mb-2 uppercase tracking-wider font-medium">Navigation</div>
              <div className="space-y-1">
                <SheetClose asChild>
                  <Link 
                    to="/" 
                    className={`block py-2 px-3 rounded-lg transition-colors ${isActiveRoute('/') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/vehicles" 
                    className={`block py-2 px-3 rounded-lg transition-colors ${isActiveRoute('/vehicles') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    Vehicles
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/pricing" 
                    className={`block py-2 px-3 rounded-lg transition-colors ${isActiveRoute('/pricing') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    Pricing
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/locations" 
                    className={`block py-2 px-3 rounded-lg transition-colors ${isActiveRoute('/locations') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    Locations
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/about" 
                    className={`block py-2 px-3 rounded-lg transition-colors ${isActiveRoute('/about') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    About
                  </Link>
                </SheetClose>
              </div>
            </div>

            <div>
              <div className="text-sm text-white/60 mb-2 uppercase tracking-wider font-medium">Account</div>
              <div className="space-y-1">
                <SheetClose asChild>
                  <Link
                    to="/dashboard"
                    className={`flex items-center py-2 px-3 rounded-lg transition-colors ${isActiveRoute('/dashboard') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button 
                    className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white mt-4"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                </SheetClose>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-tesla-dark-80 backdrop-blur-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
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
          
          {/* Navigation Dropdowns for Desktop */}
          <DesktopNavDropdown />
          
          <Link 
            to="/pricing" 
            className={`transition-colors ${isActiveRoute('/pricing') ? 'text-white' : 'text-white/80 hover:text-white'}`}
          >
            Pricing
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

        {/* Mobile menu */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
