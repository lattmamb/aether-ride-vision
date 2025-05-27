
import React from 'react';
import IntelligentSidebar from '@/components/navigation/IntelligentSidebar';
import AIAssistant from '@/components/AIAssistant';
import AIAssistantHero from '@/components/ai-assistant/AIAssistantHero';
import AIAssistantFeatures from '@/components/ai-assistant/AIAssistantFeatures';
import AIAssistant3DSection from '@/components/ai-assistant/AIAssistant3DSection';
import AIAssistantChatSection from '@/components/ai-assistant/AIAssistantChatSection';

const AIAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-x-hidden">
      {/* Intelligent Sidebar */}
      <IntelligentSidebar />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <AIAssistantHero />

        {/* 3D Scene Section */}
        <AIAssistant3DSection />

        {/* AI Chat Interface */}
        <AIAssistantChatSection />

        {/* Features Section */}
        <AIAssistantFeatures />
      </div>

      {/* AI Assistant floating button */}
      <AIAssistant />
    </div>
  );
};

export default AIAssistantPage;
