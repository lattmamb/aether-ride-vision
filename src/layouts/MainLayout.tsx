
import React from 'react';
import UnityDockNavbar from '@/components/ui/unity-dock-navbar';
import { AnimatedNavigation } from '@/components/ui/animated-navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/layout/PageTransition';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  useAnimatedNav?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNavbar = true, 
  showFooter = true,
  useAnimatedNav = false
}) => {
  return (
    <div className="min-h-screen bg-unity-midnight text-unity-platinum">
      {showNavbar && (
        useAnimatedNav ? <AnimatedNavigation /> : <UnityDockNavbar />
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
