
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import TopBar from '@/components/TopBar';
import { AnimatePresence, motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col bg-aether-dark">
      <TopBar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar collapsed={sidebarCollapsed} />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
