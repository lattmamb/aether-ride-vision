
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import NavigationItems from "./navigation/NavigationItems";
import NavigationActions from "./navigation/NavigationActions";

const UnityNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Vehicles", link: "/vehicles" },
    { name: "Pricing", link: "/pricing" },
    { name: "Locations", link: "/locations" },
    { name: "About", link: "/about" },
    { name: "How It Works", link: "/how-it-works" },
  ];

  const handleBookNow = () => {
    navigate("/vehicles");
  };

  const UnityLogo = () => (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 relative flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
        <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        Unity Fleet
      </span>
    </Link>
  );

  return (
    <Navbar className="fixed top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody className="bg-tesla-dark-80 backdrop-blur-lg border border-glass-border">
        <UnityLogo />
        <NavigationItems items={navItems} />
        <NavigationActions onBookNow={handleBookNow} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-tesla-dark-80 backdrop-blur-lg border border-glass-border">
        <MobileNavHeader>
          <UnityLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-tesla-dark backdrop-blur-lg border border-glass-border"
        >
          <NavigationItems 
            items={navItems} 
            isMobile={true}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <NavigationActions 
            onBookNow={handleBookNow}
            isMobile={true}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default UnityNavbar;
