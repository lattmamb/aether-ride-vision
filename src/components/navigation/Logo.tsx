
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 z-10 ${className}`}>
      <div className="w-8 h-8 relative flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
        <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Unity Fleet</span>
    </Link>
  );
};

export default Logo;
