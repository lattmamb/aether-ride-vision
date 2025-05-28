
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Car, 
  DollarSign, 
  MapPin, 
  Info, 
  User, 
  Search,
  Menu,
  X,
  ChevronRight,
  Zap,
  Bell,
  Settings,
  Brain,
  Sparkles
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarProvider,
  useSidebar
} from '@/components/ui/sidebar';

const navigationItems = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
    type: 'link' as const
  },
  {
    path: '/ai-assistant',
    label: 'AI Assistant',
    icon: Brain,
    type: 'link' as const,
    badge: 'New',
    special: true
  },
  {
    path: '/vehicles',
    label: 'Fleet',
    icon: Car,
    type: 'dropdown' as const,
    dropdownItems: [
      { label: 'All Vehicles', path: '/vehicles' },
      { label: 'Model S', path: '/vehicles?type=model-s' },
      { label: 'Model 3', path: '/vehicles?type=model-3' },
      { label: 'Model X', path: '/vehicles?type=model-x' },
      { label: 'Model Y', path: '/vehicles?type=model-y' }
    ]
  },
  {
    path: '/pricing',
    label: 'Plans',
    icon: DollarSign,
    type: 'dropdown' as const,
    dropdownItems: [
      { label: 'All Plans', path: '/pricing' },
      { label: 'Daily', path: '/pricing#daily' },
      { label: 'Weekly', path: '/pricing#weekly' },
      { label: 'Monthly', path: '/pricing#monthly' }
    ]
  },
  {
    path: '/locations',
    label: 'Locations',
    icon: MapPin,
    type: 'link' as const
  },
  {
    path: '/about',
    label: 'About',
    icon: Info,
    type: 'link' as const
  }
];

const SuperiorSidebarContent: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="border-r border-white/10 bg-gradient-to-b from-black via-gray-900 to-black">
      <SidebarHeader className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 neumorphic-button rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center shadow-inner">
                <span className="text-white font-bold text-lg">U</span>
              </div>
            </div>
            <motion.div 
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#9b87f5]/20 to-[#7c3aed]/20 blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Unity Fleet
              </h2>
              <p className="text-xs text-white/60 font-medium">Tesla Subscription</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarMenu className="space-y-2">
          {navigationItems.map((item, index) => (
            <SidebarMenuItem 
              key={item.path}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === 'dropdown' ? (
                  <div>
                    <SidebarMenuButton
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`w-full relative overflow-hidden transition-all duration-300 ${
                        isActiveRoute(item.path) 
                          ? 'bg-[#9b87f5]/20 text-[#9b87f5] border border-[#9b87f5]/30' 
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && (
                        <>
                          <span className="font-semibold">{item.label}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 90 : 0 }}
                            className="ml-auto"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.div>
                        </>
                      )}
                    </SidebarMenuButton>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && !isCollapsed && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-1 overflow-hidden"
                        >
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block p-3 text-white/80 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#9b87f5]/60" />
                                <span className="font-medium">{subItem.label}</span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.path}
                      className={`w-full relative overflow-hidden transition-all duration-300 ${
                        isActiveRoute(item.path) 
                          ? 'bg-[#9b87f5]/20 text-[#9b87f5] border border-[#9b87f5]/30' 
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                      } ${item.special ? 'bg-gradient-to-r from-[#9b87f5]/10 to-[#7c3aed]/10' : ''}`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && (
                        <div className="flex items-center justify-between flex-1">
                          <span className="font-semibold">{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-1 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full text-xs font-bold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </Link>
                  </SidebarMenuButton>
                )}
              </motion.div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* Bottom Actions */}
        <div className="mt-8 space-y-3 border-t border-white/10 pt-4">
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/dashboard"
                className={`w-full transition-all duration-300 ${
                  isActiveRoute('/dashboard') 
                    ? 'bg-[#9b87f5]/20 text-[#9b87f5] border border-[#9b87f5]/30' 
                    : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
              >
                <User className="h-5 w-5" />
                {!isCollapsed && <span className="font-semibold">Dashboard</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Book Now */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/vehicles"
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#9b87f5] transition-all duration-500"
              >
                <Zap className="h-5 w-5 text-white" />
                {!isCollapsed && <span className="text-white font-bold">Book Now</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

const SuperiorNavigation: React.FC = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <SuperiorSidebarContent />
        
        {/* Mobile trigger */}
        <div className="lg:hidden fixed top-6 left-6 z-50">
          <SidebarTrigger className="neumorphic-button p-3 rounded-xl" />
        </div>
        
        {/* Desktop trigger */}
        <div className="hidden lg:block fixed top-6 left-6 z-50">
          <SidebarTrigger className="neumorphic-button p-3 rounded-xl" />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SuperiorNavigation;
