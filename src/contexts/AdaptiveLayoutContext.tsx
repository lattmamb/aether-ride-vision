
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdaptiveLayoutContextType {
  screenSize: 'mobile' | 'tablet' | 'desktop' | 'large';
  orientation: 'portrait' | 'landscape';
  deviceType: 'mobile' | 'tablet' | 'desktop';
  reducedMotion: boolean;
  isDarkMode: boolean;
  gridColumns: number;
}

const AdaptiveLayoutContext = createContext<AdaptiveLayoutContextType | undefined>(undefined);

export const AdaptiveLayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop' | 'large'>('desktop');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine screen size
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else if (width < 1440) setScreenSize('desktop');
      else setScreenSize('large');
      
      // Determine orientation
      setOrientation(width > height ? 'landscape' : 'portrait');
      
      // Determine device type
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };

    const checkMotionPreference = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
    };

    updateLayout();
    checkMotionPreference();
    
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const gridColumns = screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : screenSize === 'desktop' ? 3 : 4;

  return (
    <AdaptiveLayoutContext.Provider value={{
      screenSize,
      orientation,
      deviceType,
      reducedMotion,
      isDarkMode,
      gridColumns
    }}>
      {children}
    </AdaptiveLayoutContext.Provider>
  );
};

export const useAdaptiveLayout = () => {
  const context = useContext(AdaptiveLayoutContext);
  if (!context) {
    throw new Error('useAdaptiveLayout must be used within AdaptiveLayoutProvider');
  }
  return context;
};
