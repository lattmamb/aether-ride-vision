
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aether-panel border-t border-aether-blue/10 py-4 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <div className="absolute w-6 h-6 rounded-full bg-aether-blue opacity-20 blur-md"></div>
              <div className="text-aether-blue font-bold text-sm relative z-10">A</div>
            </div>
            <span className="text-sm font-medium text-white/70">AetherRide © 2025</span>
          </div>
          
          <div className="flex gap-6">
            <Link to="/terms" className="text-xs text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/support" className="text-xs text-white/50 hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
