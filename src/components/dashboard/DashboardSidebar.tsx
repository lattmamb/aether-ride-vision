import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Car, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Settings, 
  HelpCircle,
  User,
  Bell,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Vehicles', href: '/vehicles', icon: Car },
  { name: 'Reservations', href: '/booking-progress', icon: Calendar },
  { name: 'Locations', href: '/locations', icon: MapPin },
  { name: 'Charging', href: '/charging', icon: Zap },
  { name: 'Billing', href: '/billing', icon: CreditCard },
];

const secondaryNavigation = [
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help & Support', href: '/help', icon: HelpCircle },
];

interface DashboardSidebarProps {
  collapsed?: boolean;
}

export default function DashboardSidebar({ collapsed = false }: DashboardSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <div className={cn(
      "dashboard-sidebar h-full flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo/Brand */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Car className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-lg">Aether Fleet</h2>
              <p className="text-xs text-muted-foreground">Premium Electric</p>
            </div>
          )}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">Alexander Green</p>
              <p className="text-xs text-muted-foreground truncate">Premium Member</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = isActivePath(item.href);
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "dashboard-nav-item w-full text-left",
                  isActive && "active"
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="py-4">
          <div className="border-t border-sidebar-border"></div>
        </div>

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryNavigation.map((item) => {
            const isActive = isActivePath(item.href);
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "dashboard-nav-item w-full text-left",
                  isActive && "active"
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="glass-panel p-3 text-center">
          {!collapsed ? (
            <>
              <div className="text-xs text-muted-foreground mb-1">Active Plan</div>
              <div className="text-sm font-medium text-primary">Premium 6-Month</div>
              <div className="text-xs text-muted-foreground">18 days remaining</div>
            </>
          ) : (
            <div className="w-2 h-2 bg-primary rounded-full mx-auto"></div>
          )}
        </div>
      </div>
    </div>
  );
}