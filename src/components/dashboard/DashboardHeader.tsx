import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Search, Bell, User, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AppSwitcher from '@/components/navigation/AppSwitcher';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export default function DashboardHeader({ sidebarCollapsed, setSidebarCollapsed }: DashboardHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-card border-b border-card-border flex items-center justify-between px-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hover:bg-interactive-hover"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} aria-label="Go back" className="hover:bg-interactive-hover">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => navigate(1)} aria-label="Go forward" className="hover:bg-interactive-hover">
          <ChevronRight className="h-5 w-5" />
        </Button>

        <AppSwitcher />

        <div className="relative ml-2 hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search vehicles, bookings, users..."
            className="pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-sm w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-label="Search"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative hover:bg-interactive-hover" 
          aria-label="Notifications"
          onClick={() => navigate('/dashboard/notifications')}
        >
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground">
            3
          </Badge>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="hover:bg-interactive-hover" 
          aria-label="Settings"
          onClick={() => navigate('/dashboard/settings')}
        >
          <Settings className="h-5 w-5" />
        </Button>

        <div 
          className="flex items-center gap-2 ml-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/dashboard/profile')}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="text-sm hidden sm:block">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
