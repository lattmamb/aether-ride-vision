
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GenieTransitionContextType {
  showGenie: boolean;
  triggerGenie: () => void;
  hideGenie: () => void;
  isTransitioning: boolean;
}

const GenieTransitionContext = createContext<GenieTransitionContextType | undefined>(undefined);

export const useGenieTransition = () => {
  const context = useContext(GenieTransitionContext);
  if (!context) {
    throw new Error('useGenieTransition must be used within a GenieTransitionProvider');
  }
  return context;
};

interface GenieTransitionProviderProps {
  children: ReactNode;
}

export const GenieTransitionProvider: React.FC<GenieTransitionProviderProps> = ({ children }) => {
  const [showGenie, setShowGenie] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerGenie = () => {
    setIsTransitioning(true);
    setShowGenie(true);
  };

  const hideGenie = () => {
    setShowGenie(false);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <GenieTransitionContext.Provider value={{ 
      showGenie, 
      triggerGenie, 
      hideGenie, 
      isTransitioning 
    }}>
      {children}
    </GenieTransitionContext.Provider>
  );
};
