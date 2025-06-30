
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  suggestedPrompts: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ suggestedPrompts, onSuggestionClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-12"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-semibold mb-4">How can I help you today?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
        {suggestedPrompts.map((prompt, index) => (
          <motion.button
            key={index}
            onClick={() => onSuggestionClick(prompt)}
            className="p-4 text-left bg-[#1f1f1f] hover:bg-[#2f2f2f] border border-[#333] rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-sm font-medium">{prompt}</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
