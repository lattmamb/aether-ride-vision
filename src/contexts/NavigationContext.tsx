
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationContextType {
  currentPage: string;
  navigationStyle: 'dock' | 'animated';
  showReflections: boolean;
  isTransitioning: boolean;
  setNavigationStyle: (style: 'dock' | 'animated') => void;
  setShowReflections: (show: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [navigationStyle, setNavigationStyle] = useState<'dock' | 'animated'>('animated');
  const [showReflections, setShowReflections] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Detect device capabilities
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      const isMobile = window.innerWidth < 768;
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isLowPowerDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

      // Auto-adjust based on device capabilities
      if (isMobile || hasReducedMotion || isLowPowerDevice) {
        setShowReflections(false);
      }
    };

    checkDeviceCapabilities();
    window.addEventListener('resize', checkDeviceCapabilities);
    return () => window.removeEventListener('resize', checkDeviceCapabilities);
  }, []);

  // Use animated navigation for all pages
  useEffect(() => {
    setNavigationStyle('animated');
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={{
      currentPage: location.pathname,
      navigationStyle,
      showReflections,
      isTransitioning,
      setNavigationStyle,
      setShowReflections
    }}>
      {children}
    </NavigationContext.Provider>
  );
};
