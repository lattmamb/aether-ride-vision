
import React from 'react';
import UnityDockNavbar from '@/components/ui/unity-dock-navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/layout/PageTransition';

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
  return (
    <div className="min-h-screen bg-unity-midnight text-unity-platinum">
      {showNavbar && <UnityDockNavbar />}
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
