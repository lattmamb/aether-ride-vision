
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, MessageSquare } from 'lucide-react';
import { NavbarButton } from '@/components/ui/resizable-navbar';

interface NavigationActionsProps {
  onBookNow: () => void;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavigationActions: React.FC<NavigationActionsProps> = ({ onBookNow, isMobile = false, onItemClick }) => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 pt-2 border-t border-white/10 w-full">
        <button 
          onClick={() => {
            onItemClick?.();
            window.location.href = '/chat';
          }}
          className="w-full px-4 py-2 rounded-md border border-[#9b87f5]/30 text-white flex items-center gap-2 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          AI Assistant
        </button>
        <button 
          onClick={() => {
            onItemClick?.();
            window.location.href = '/dashboard';
          }}
          className={`w-full px-4 py-2 rounded-md border border-[#9b87f5]/30 flex items-center gap-2 transition-colors ${
            isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20 text-white' : 'text-white'
          }`}
        >
          <User className="w-4 h-4" />
          Dashboard
        </button>
        <button 
          className="w-full px-4 py-2 rounded-md bg-[#9b87f5] hover:bg-[#7E69AB] text-white transition-colors"
          onClick={() => {
            onBookNow();
            onItemClick?.();
          }}
        >
          Book Now
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link to="/chat">
        <button 
          className="px-4 py-2 rounded-md text-white/80 hover:text-white bg-transparent transition-colors flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          AI Assistant
        </button>
      </Link>
      <Link to="/dashboard">
        <button 
          className={`px-4 py-2 rounded-md border border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 flex items-center gap-2 transition-colors ${
            isActiveRoute('/dashboard') ? 'bg-[#9b87f5]/20 text-white' : 'text-white/80 hover:text-white'
          }`}
        >
          <User className="w-4 h-4" />
          Dashboard
        </button>
      </Link>
      <button 
        className="px-4 py-2 rounded-md bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white hover:from-[#7E69AB] hover:to-[#6E59A5] transition-all font-medium"
        onClick={onBookNow}
      >
        Book Now
      </button>
    </div>
  );
};

export default NavigationActions;
