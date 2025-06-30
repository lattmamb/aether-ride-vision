
"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Navigation, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Pricing", href: "/pricing" },
  { name: "Locations", href: "/locations" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    }
  },
};

const UnityLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 relative flex items-center justify-center">
      <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-unity-signature to-unity-teal opacity-70 blur-[8px]"></div>
      <div className="text-unity-signature font-bold text-xl relative z-10 font-display">U</div>
    </div>
    <span className="text-lg font-bold gradient-luxury-text font-display">
      Unity Fleet
    </span>
  </div>
);

export function AnimatedNavigation() {
  const [isExpanded, setExpanded] = React.useState(true);
  const location = useLocation();
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-2xl h-12",
          "glass-card border border-unity-platinum/10",
          "bg-unity-midnight/60 backdrop-blur-xl",
          "shadow-unity-premium",
          !isExpanded && "cursor-pointer justify-center unity-glow-pulse"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center pl-4 pr-2"
        >
          <UnityLogo />
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-4 pr-4",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                to={item.href}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-lg font-body",
                  isActive(item.href)
                    ? "text-unity-signature bg-unity-signature/20 shadow-unity-glow"
                    : "text-unity-platinum/80 hover:text-unity-signature hover:bg-unity-platinum/10"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-6 w-6 text-unity-signature" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
