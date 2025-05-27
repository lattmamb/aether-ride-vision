
import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { vehicles } from '@/data/vehicles';

const AIAssistantHero: React.FC = () => {
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
  );
};

export default AIAssistantHero;
