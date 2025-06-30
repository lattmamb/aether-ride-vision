
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
        <Link to="/chat" onClick={onItemClick}>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-[#9b87f5]/30 text-white flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            AI Assistant
          </Button>
        </Link>
        <Link to="/dashboard" onClick={onItemClick}>
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
            onBookNow();
            onItemClick?.();
          }}
        >
          Book Now
        </Button>
      </div>
    );
  }

  return (
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
        onClick={onBookNow}
      >
        Book Now
      </NavbarButton>
    </div>
  );
};

export default NavigationActions;
