
import React from 'react';
import { AnimatedNavigation } from '@/components/ui/animated-navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/layout/PageTransition';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import AccessibilityFeatures from '@/components/accessibility/AccessibilityFeatures';
import { useNavigation } from '@/contexts/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  showAccessibility?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNavbar = true, 
  showFooter = true,
  showAccessibility = true
}) => {
  const { isTransitioning } = useNavigation();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-unity-midnight text-unity-platinum">
        {/* Enhanced Navigation with accessibility improvements */}
        {showNavbar && (
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <nav role="navigation" aria-label="Main navigation">
                  <AnimatedNavigation />
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-unity-purple text-white px-4 py-2 rounded-lg font-semibold"
        >
          Skip to main content
        </a>
        
        <PageTransition>
          <main 
            id="main-content"
            className={`${showNavbar ? 'pt-20' : ''}`}
            role="main"
            aria-label="Main content"
            tabIndex={-1}
          >
            {children}
          </main>
        </PageTransition>
        
        {showFooter && (
          <footer role="contentinfo" aria-label="Site footer">
            <Footer />
          </footer>
        )}

        {/* Accessibility Features Panel */}
        {showAccessibility && <AccessibilityFeatures />}
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
