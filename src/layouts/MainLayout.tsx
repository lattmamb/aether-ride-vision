
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModernNavbar from '@/components/navigation/ModernNavbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import ModernSidebar from '@/components/navigation/ModernSidebar';
import { ChevronUp } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex">
      {/* Modern Sidebar */}
      <ModernSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-20">
        <ModernNavbar />
        <Breadcrumbs />
        
        {/* Scroll to top button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 neumorphic-button p-3 rounded-full shadow-lg"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 text-white" />
          </motion.button>
        )}
        
        <main className="flex-grow">
          <div id="page-content">{children}</div>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </div>
  );
};

export default MainLayout;
