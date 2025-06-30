
"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Vehicles", href: "/vehicles" },
  { name: "Energy", href: "/pricing" },
  { name: "Charging", href: "/locations" },
  { name: "Discover", href: "/about" },
  { name: "Shop", href: "/dashboard" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    backdrop: "blur(20px)",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  collapsed: {
    y: 0,
    opacity: 0.9,
    width: "3rem",
    backdrop: "blur(10px)",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 300 } 
  },
  collapsed: { 
    opacity: 0, 
    x: -30, 
    scale: 0.8,
    transition: { duration: 0.2 } 
  },
};

const itemVariants = {
  expanded: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 300 } 
  },
  collapsed: { 
    opacity: 0, 
    x: -15, 
    scale: 0.9,
    transition: { duration: 0.15 } 
  },
};

const collapsedIconVariants = {
  expanded: { 
    opacity: 0, 
    scale: 0.8, 
    rotate: 90,
    transition: { duration: 0.2 } 
  },
  collapsed: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      delay: 0.1,
    }
  },
};

const UnityLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 relative flex items-center justify-center">
      <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-white to-white/80 opacity-20 blur-sm"></div>
      <div className="text-white font-bold text-xl relative z-10 font-display tracking-tight">U</div>
    </div>
    <span className="text-lg font-light text-white font-display tracking-wide">
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
        initial={{ y: -100, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.05, opacity: 1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full h-14 px-6",
          "backdrop-blur-xl bg-black/20 border border-white/10",
          "shadow-2xl shadow-black/20",
          !isExpanded && "cursor-pointer justify-center w-14 px-0"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center"
        >
          <UnityLogo />
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-8 ml-8",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                to={item.href}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "text-sm font-light transition-all duration-300 px-4 py-2 rounded-full",
                  "tracking-wide font-body relative",
                  isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5 text-white" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
