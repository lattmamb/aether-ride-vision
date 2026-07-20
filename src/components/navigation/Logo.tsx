import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import unityLogo from "@/assets/unity-logo.webp";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className, showText = true, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <Link to="/" className={`flex items-center gap-3 z-10 group ${className ?? ""}`}>
      <motion.div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-unity-cyan/20 to-silver-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={unityLogo}
          alt="UnityLink Commonwealth"
          className={`${sizeClasses[size]} object-contain relative z-10 drop-shadow-lg`}
        />
      </motion.div>

      {showText && (
        <div className="flex flex-col min-w-0">
          <motion.span
            className={`${textSizes[size]} font-space font-bold bg-gradient-to-r from-white via-silver-200 to-silver-400 bg-clip-text text-transparent whitespace-nowrap`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            UnityLink Commonwealth
          </motion.span>
          <span className="text-[10px] text-silver-400/70 font-inter tracking-[0.16em] uppercase hidden sm:block">
            Unity Fleet operating layer
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
