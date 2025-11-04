import React, { createContext, useContext, useState, useEffect } from 'react';

export type Platform = 'home' | 'social' | 'rides' | 'stories' | 'discover' | 'market' | 'work' | 'beats' | 'connect';

interface UnityContextType {
  currentPlatform: Platform;
  setCurrentPlatform: (platform: Platform) => void;
  notifications: number;
  addNotification: () => void;
  clearNotifications: () => void;
}

const UnityContext = createContext<UnityContextType | undefined>(undefined);

export const UnityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPlatform, setCurrentPlatform] = useState<Platform>('home');
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('unity-platform');
    if (saved) {
      setCurrentPlatform(saved as Platform);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('unity-platform', currentPlatform);
  }, [currentPlatform]);

  const addNotification = () => {
    setNotifications(prev => prev + 1);
  };

  const clearNotifications = () => {
    setNotifications(0);
  };

  return (
    <UnityContext.Provider
      value={{
        currentPlatform,
        setCurrentPlatform,
        notifications,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </UnityContext.Provider>
  );
};

export const useUnity = () => {
  const context = useContext(UnityContext);
  if (!context) {
    throw new Error('useUnity must be used within UnityProvider');
  }
  return context;
};
