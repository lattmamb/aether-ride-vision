
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AIAssistant: React.FC = () => {
  return (
    <Link to="/ai-assistant">
      <motion.div
        whileHover={{ 
          scale: 1.1,
          y: -3,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          {/* Main button */}
          <div className="neumorphic-button p-5 rounded-3xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] shadow-2xl">
            <Brain className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-200" />
          </div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] opacity-30 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </motion.div>
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            whileHover={{ opacity: 1, x: 0, scale: 1 }}
            className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border border-white/10"
          >
            AI Assistant
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10"></div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AIAssistant;
