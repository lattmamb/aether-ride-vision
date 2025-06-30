
import React from 'react';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import UnityNavbar from '@/components/UnityNavbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <UnityNavbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
