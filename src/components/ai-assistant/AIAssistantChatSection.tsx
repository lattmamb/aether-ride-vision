
import React from 'react';
import { motion } from 'framer-motion';
import { UnityFleetAIChat } from '@/components/ui/v0-ai-chat';

const AIAssistantChatSection: React.FC = () => {
  return (
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
  );
};

export default AIAssistantChatSection;
