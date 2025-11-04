import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Car, 
  Calendar, 
  MapPin, 
  Settings, 
  HelpCircle,
  User,
  Bell,
  BarChart3,
  Users,
  Wrench,
  Navigation,
  Briefcase,
  Zap,
  Smartphone,
  Box
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Fleet Management', href: '/dashboard/fleet', icon: Car },
  { name: 'Real-Time Tracking', href: '/dashboard/tracking', icon: Navigation },
  { name: 'Reservations', href: '/dashboard/reservations', icon: Calendar },
  { name: 'User Management', href: '/dashboard/users', icon: Users },
  { name: 'Job Platform', href: '/dashboard/jobs', icon: Briefcase },
  { name: 'Charging Hubs', href: '/dashboard/charging-hubs', icon: Zap },
  { name: 'Analytics & Reports', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Maintenance', href: '/dashboard/maintenance', icon: Wrench },
  { name: 'Mobile Preview', href: '/dashboard/mobile-preview', icon: Smartphone },
  { name: '3D Hub Demo', href: '/dashboard/hub-demo', icon: Box },
];

const secondaryNavigation = [
  { name: 'Profile Settings', href: '/dashboard/profile', icon: User },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: 'System Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Help & Support', href: '/dashboard/help', icon: HelpCircle },
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
              <h2 className="font-bold text-lg">Fleet Manager</h2>
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
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
              <p className="font-medium text-sm truncate">Fleet Administrator</p>
              <p className="text-xs text-muted-foreground truncate">System Manager</p>
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
              <div className="text-xs text-muted-foreground mb-1">System Status</div>
              <div className="text-sm font-medium text-green-500">All Systems Online</div>
              <div className="text-xs text-muted-foreground">76 vehicles active</div>
            </>
          ) : (
            <div className="w-2 h-2 bg-primary rounded-full mx-auto"></div>
          )}
        </div>
      </div>
    </div>
  );
}