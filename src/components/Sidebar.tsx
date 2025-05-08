
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  Search,
  Settings,
  User,
  MessageSquare,
  Zap,
  Code,
  UserCircle,
  LayoutDashboard,
  Car
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: Home
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard
    },
    {
      name: 'Vehicles',
      path: '/vehicles',
      icon: Car
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: UserCircle
    },
    {
      name: 'Support',
      path: '/support',
      icon: MessageSquare
    }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        initial={{ width: collapsed ? 80 : 280 }}
        animate={{ width: collapsed ? 80 : 280 }}
        exit={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          "h-[calc(100vh-64px)] bg-aether-panel border-r border-aether-blue/10 overflow-hidden",
          collapsed ? "w-20" : "w-72"
        )}
      >
        <div className="flex flex-col h-full py-4">
          <div className="px-4 mb-6">
            {!collapsed && (
              <div className="text-xl font-semibold text-white ml-2 mb-6">AetherRide</div>
            )}
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-1 px-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn("menu-item", isActive(item.path) && "active")}
                  >
                    <item.icon className="menu-icon" />
                    {!collapsed && (
                      <span>{item.name}</span>
                    )}
                    {isActive(item.path) && !collapsed && (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-px bg-aether-blue shadow-neon-blue w-full"
                        layoutId="activeMenuLine"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto px-2">
            <Link 
              to="/settings"
              className={cn("menu-item", isActive("/settings") && "active")}
            >
              <Settings className="menu-icon" />
              {!collapsed && (
                <span>Settings</span>
              )}
            </Link>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
