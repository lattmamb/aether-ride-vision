
import React from 'react';
import { AnimatedNavigation } from '@/components/ui/animated-navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/layout/PageTransition';
import { useNavigation } from '@/contexts/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNavbar = true, 
  showFooter = true
}) => {
  const { isTransitioning } = useNavigation();

  return (
    <div className="min-h-screen bg-unity-midnight text-unity-platinum">
      {showNavbar && (
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedNavigation />
            </motion.div>
          )}
        </AnimatePresence>
      )}
      
      <PageTransition>
        <main className={`${showNavbar ? 'pt-20' : ''}`}>
          {children}
        </main>
      </PageTransition>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
