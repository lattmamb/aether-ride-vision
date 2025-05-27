
import React from 'react';
import { motion } from 'framer-motion';
import { UnityFleetAIChat } from '@/components/ui/v0-ai-chat';
import SmartCard from '@/components/enhanced/SmartCard';
import Scene3D from '@/components/3d/Scene3D';
import { vehicles } from '@/data/vehicles';
import { Sparkles, Zap, Brain, MessageCircle } from 'lucide-react';
import IntelligentSidebar from '@/components/navigation/IntelligentSidebar';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import VehicleConfigurator3D from '@/components/3d/VehicleConfigurator3D';
import AIAssistant from '@/components/AIAssistant';

const AIAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligent Recommendations",
      description: "Get personalized Tesla model suggestions based on your preferences and needs"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Calculations",
      description: "Calculate subscription costs, charging times, and savings in real-time"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Natural Conversations",
      description: "Ask questions in plain language and get detailed, helpful responses"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Booking",
      description: "Book test drives and manage subscriptions with AI-powered assistance"
    }
  ];

  const stickyContent = [
    {
      title: "AI-Powered Fleet Management",
      description: "Experience the future of vehicle subscription with our intelligent AI assistant that understands your needs and preferences.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] text-white">
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold">🤖</div>
            <div className="text-xl font-semibold">AI Assistant</div>
            <div className="text-sm opacity-80">Intelligent recommendations</div>
          </div>
        </div>
      ),
    },
    {
      title: "3D Vehicle Exploration",
      description: "Explore our Tesla fleet in ultra-realistic 3D environments with real-time interaction and customization options.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src={vehicles[0].image}
            width={300}
            height={200}
            className="h-full w-full object-contain"
            alt="Unity Fleet vehicle"
          />
        </div>
      ),
    },
    {
      title: "Seamless Integration",
      description: "Our AI seamlessly integrates with your lifestyle, providing personalized vehicle recommendations and smart booking assistance.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#06b6d4] to-[#10b981] text-white">
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold">⚡</div>
            <div className="text-xl font-semibold">Smart Integration</div>
            <div className="text-sm opacity-80">Personalized experience</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-x-hidden">
      {/* Intelligent Sidebar */}
      <IntelligentSidebar />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with Sticky Scroll */}
        <div className="relative py-20 px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                AI-Powered Tesla Experience
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/70 max-w-3xl mx-auto"
              >
                Discover the future of vehicle subscription with our intelligent AI assistant and immersive 3D experiences
              </motion.p>
            </div>

            {/* Sticky Scroll Experience */}
            <div className="mb-20">
              <StickyScroll content={stickyContent} />
            </div>
          </motion.div>
        </div>

        {/* 3D Scene Section */}
        <div className="relative py-20 px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interactive 3D Vehicle Showcase
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Explore our Tesla fleet in ultra-realistic 3D. Rotate, inspect, and interact with each model.
              </p>
            </div>
            
            <div className="h-[600px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-black/20">
              <Scene3D
                environment="sunset"
                enablePostProcessing={true}
                className="w-full h-full"
              >
                <VehicleConfigurator3D />
              </Scene3D>
            </div>
          </motion.div>
        </div>

        {/* AI Chat Interface */}
        <div className="relative py-20 px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <UnityFleetAIChat />
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Powered by Advanced AI & 3D Technology
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Experience the future of automotive exploration with our hyper-realistic 3D interface and intelligent assistance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <SmartCard 
                    variant="interactive" 
                    glow 
                    tilt
                    className="p-6 h-full"
                  >
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 mx-auto neumorphic-button rounded-2xl flex items-center justify-center text-[#9b87f5]">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </SmartCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="pb-20"></div>
      </div>

      {/* AI Assistant floating button */}
      <AIAssistant />
    </div>
  );
};

export default AIAssistantPage;
