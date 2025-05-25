
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import EnhancedSidebar from '@/components/navigation/EnhancedSidebar';
import { ChevronUp } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  enable3D?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, enable3D = false }) => {
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
    <div className={`min-h-screen flex ${enable3D ? 'bg-transparent' : 'bg-black'}`}>
      {/* Enhanced Sidebar */}
      <EnhancedSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-20 lg:ml-80 transition-all duration-400">
        <Breadcrumbs />
        
        {/* Enhanced Scroll to top button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 neumorphic-button p-4 rounded-2xl shadow-2xl group"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 text-white group-hover:text-[#9b87f5] transition-colors" />
            
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] opacity-0 group-hover:opacity-30 blur-lg transition-opacity"
            />
          </motion.button>
        )}
        
        <main className="flex-grow">
          <motion.div 
            id="page-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </div>
  );
};

export default MainLayout;
