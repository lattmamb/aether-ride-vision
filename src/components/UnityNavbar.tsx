
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, MessageSquare } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const UnityNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Vehicles", link: "/vehicles" },
    { name: "Pricing", link: "/pricing" },
    { name: "Locations", link: "/locations" },
    { name: "About", link: "/about" },
    { name: "How It Works", link: "/how-it-works" },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

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

  const NavItemsCustom = ({ items, onItemClick }: { items: typeof navItems; onItemClick?: () => void }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
      <div
        onMouseLeave={() => setHovered(null)}
        className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2"
      >
        {items.map((item, idx) => (
          <Link
            key={`link-${idx}`}
            to={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={`relative px-4 py-2 transition-colors ${
              isActiveRoute(item.link) 
                ? 'text-white font-medium' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {hovered === idx && (
              <div className="absolute inset-0 h-full w-full rounded-full bg-[#9b87f5]/20" />
            )}
            <span className="relative z-20">{item.name}</span>
            {isActiveRoute(item.link) && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#9b87f5] rounded-full" />
            )}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <Navbar className="fixed top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody className="bg-tesla-dark-80 backdrop-blur-lg border border-glass-border">
        <UnityLogo />
        <NavItemsCustom items={navItems} />
        <div className="flex items-center gap-4">
          <Link to="/chat">
            <NavbarButton 
              variant="secondary" 
              className="flex items-center gap-2 text-white/80 hover:text-white bg-transparent"
            >
              <MessageSquare className="w-4 h-4" />
              AI Assistant
            </NavbarButton>
          </Link>
          <Link to="/dashboard">
            <NavbarButton 
              variant="secondary"
              className={`flex items-center gap-2 border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 ${
                isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20 text-white' : 'text-white/80'
              }`}
            >
              <User className="w-4 h-4" />
              Dashboard
            </NavbarButton>
          </Link>
          <NavbarButton 
            variant="gradient"
            className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white hover:from-[#7E69AB] hover:to-[#6E59A5]"
            onClick={handleBookNow}
          >
            Book Now
          </NavbarButton>
        </div>
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
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 block transition-colors flex items-center gap-2 ${
                isActiveRoute(item.link) 
                  ? 'text-white font-medium border-l-2 border-[#9b87f5] pl-2' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10 w-full">
            <Link to="/chat" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-[#9b87f5]/30 text-white flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                AI Assistant
              </Button>
            </Link>
            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                variant="outline" 
                size="sm" 
                className={`w-full border-[#9b87f5]/30 flex items-center gap-2 ${
                  isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20 text-white' : 'text-white'
                }`}
              >
                <User className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            <Button 
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              onClick={() => {
                handleBookNow();
                setIsMobileMenuOpen(false);
              }}
            >
              Book Now
            </Button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default UnityNavbar;
