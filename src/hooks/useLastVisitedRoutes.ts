import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const getLastPublicRoute = (): string => {
  return localStorage.getItem('lastPublicRoute') || '/';
};

export const getLastDashboardRoute = (): string => {
  return localStorage.getItem('lastDashboardRoute') || '/dashboard';
};

// Hook to keep last visited routes in sync across app navigations
export function useLastVisitedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    if (path.startsWith('/dashboard')) {
      localStorage.setItem('lastDashboardRoute', path);
    } else {
      localStorage.setItem('lastPublicRoute', path);
    }
  }, [location]);
}
