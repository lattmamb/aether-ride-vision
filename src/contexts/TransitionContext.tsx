
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TransitionContextType {
  showTransition: boolean;
  triggerTransition: () => void;
  hideTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

interface TransitionProviderProps {
  children: ReactNode;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const [showTransition, setShowTransition] = useState(false);

  const triggerTransition = () => {
    setShowTransition(true);
  };

  const hideTransition = () => {
    setShowTransition(false);
  };

  return (
    <TransitionContext.Provider value={{ showTransition, triggerTransition, hideTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};
