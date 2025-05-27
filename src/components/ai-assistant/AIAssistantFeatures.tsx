
import React from 'react';
import { motion } from 'framer-motion';
import SmartCard from '@/components/enhanced/SmartCard';
import { Sparkles, Zap, Brain, MessageCircle } from 'lucide-react';

const AIAssistantFeatures: React.FC = () => {
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

  return (
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
  );
};

export default AIAssistantFeatures;
