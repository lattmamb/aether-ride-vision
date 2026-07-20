import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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

  useEffect(() => {
    setIsMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isActiveRoute = (path: string) => location.pathname === path;

  const handleEnterCommonwealth = () => {
    navigate("/dashboard");
  };

  const toggleSearch = () => {
    setSearchOpen((open) => !open);
  };

  const navLinks = [
    { path: "/", label: "Commonwealth" },
    { path: "/vehicles", label: "Mobility" },
    { path: "/dashboard/charging-hubs", label: "Hubs" },
    { path: "/dashboard/jobs", label: "Workforce" },
    { path: "/about", label: "About" },
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
          : "bg-transparent py-4",
      )}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/80 via-primary to-accent/80"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

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

        <NavbarButtons
          handleEnterCommonwealth={handleEnterCommonwealth}
          toggleSearch={toggleSearch}
          isActiveRoute={isActiveRoute}
          searchOpen={searchOpen}
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white p-2 z-10"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      <SearchOverlay isOpen={searchOpen} />

      <MobileMenu
        isOpen={isMenuOpen}
        navLinks={navLinks}
        isActiveRoute={isActiveRoute}
        handleEnterCommonwealth={handleEnterCommonwealth}
      />
    </motion.nav>
  );
};

export default Navbar;
