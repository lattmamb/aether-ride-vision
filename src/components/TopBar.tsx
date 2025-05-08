
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  ChevronDown 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface TopBarProps {
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="h-16 bg-aether-panel border-b border-aether-blue/10 flex items-center justify-between px-4 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-white/70 hover:text-white hover:bg-aether-blue/10"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full bg-aether-blue opacity-20 blur-md"></div>
            <div className="text-aether-blue font-bold text-xl relative z-10">A</div>
          </div>
          <span className="text-xl font-bold gradient-blue-text hidden md:inline-block">AetherRide</span>
        </Link>
      </div>
      
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-aether-panel-light border-aether-blue/20 text-white/90 rounded-full focus:border-aether-blue focus:ring-1 focus:ring-aether-blue"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search className="h-4 w-4 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          className="text-white/70 hover:text-white hover:bg-aether-blue/10 relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-aether-blue rounded-full"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-aether-blue/10"
            >
              <Avatar className="h-8 w-8 border border-aether-blue/30">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-aether-blue/20 text-white">UN</AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium">User Name</div>
                <div className="text-xs text-white/60">Premium Plan</div>
              </div>
              <ChevronDown className="h-4 w-4 text-white/60 hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-aether-panel-light border-aether-blue/20">
            <DropdownMenuLabel className="text-white/80">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-aether-blue/10" />
            <DropdownMenuItem className="text-white/70 focus:bg-aether-blue/10 focus:text-white cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 focus:bg-aether-blue/10 focus:text-white cursor-pointer">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 focus:bg-aether-blue/10 focus:text-white cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-aether-blue/10" />
            <DropdownMenuItem className="text-white/70 focus:bg-aether-blue/10 focus:text-white cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopBar;
