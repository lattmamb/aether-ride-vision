import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Globe } from 'lucide-react';
import { getLastDashboardRoute, getLastPublicRoute } from '@/hooks/useLastVisitedRoutes';

const AppSwitcher: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  // Keyboard shortcut: g then w/d within 600ms
  const lastKeyRef = useRef<{ key: string; time: number } | null>(null);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd/Ctrl + d/w quick jumps as well
      if ((e.metaKey || e.ctrlKey) && (e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'w')) {
        e.preventDefault();
        if (e.key.toLowerCase() === 'd') navigate(getLastDashboardRoute());
        if (e.key.toLowerCase() === 'w') navigate(getLastPublicRoute());
        return;
      }

      const now = Date.now();
      const k = e.key.toLowerCase();
      if (k === 'g') {
        lastKeyRef.current = { key: 'g', time: now };
        return;
      }
      if ((k === 'w' || k === 'd') && lastKeyRef.current?.key === 'g' && now - lastKeyRef.current.time < 600) {
        e.preventDefault();
        if (k === 'w') navigate(getLastPublicRoute());
        if (k === 'd') navigate(getLastDashboardRoute());
        lastKeyRef.current = null;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate]);

  return (
    <div role="tablist" aria-label="App switcher" className="inline-flex items-center rounded-full border border-border bg-card/60 backdrop-blur px-1 py-1">
      <Button
        role="tab"
        aria-selected={!isDashboard}
        variant="ghost"
        size="sm"
        className={`${!isDashboard ? 'bg-primary/10 text-primary' : 'text-muted-foreground'} rounded-full px-3`}
        onClick={() => navigate(getLastPublicRoute())}
      >
        <Globe className="h-4 w-4 mr-1" /> Website
      </Button>
      <Button
        role="tab"
        aria-selected={isDashboard}
        variant="ghost"
        size="sm"
        className={`${isDashboard ? 'bg-primary/10 text-primary' : 'text-muted-foreground'} rounded-full px-3`}
        onClick={() => navigate(getLastDashboardRoute())}
      >
        <LayoutDashboard className="h-4 w-4 mr-1" /> Dashboard
      </Button>
    </div>
  );
};

export default AppSwitcher;
