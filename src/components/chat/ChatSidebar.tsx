
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Plus, Settings, User, ChevronLeft, ChevronRight, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const conversations = [
    { id: '1', title: 'Tesla Model S Inquiry', timestamp: '2 hours ago', active: true, messages: 12 },
    { id: '2', title: 'Pricing Questions', timestamp: 'Yesterday', messages: 8 },
    { id: '3', title: 'Booking Process', timestamp: '2 days ago', messages: 15 },
    { id: '4', title: 'Charging Locations', timestamp: '3 days ago', messages: 6 },
  ];

  const sidebarVariants = {
    expanded: { width: 320 },
    collapsed: { width: 80 }
  };

  const contentVariants = {
    expanded: { opacity: 1, scale: 1 },
    collapsed: { opacity: 0, scale: 0.8 }
  };

  return (
    <motion.div
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className="glass-card seamless-right border-r-0 flex flex-col h-full relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#9b87f5]/20 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#33C3F0]/20 rounded-full blur-2xl floating-delayed"></div>
      </div>

      {/* Header */}
      <motion.div 
        className="p-4 flex items-center justify-between relative z-10"
        layout
      >
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.h2 
              className="text-lg font-semibold gradient-purple-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              Conversations
            </motion.h2>
          )}
        </AnimatePresence>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white/70 hover:text-white glass-effect p-2"
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      {/* New Chat Button */}
      <motion.div className="p-4 relative z-10" layout>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full gradient-bg-primary hover:gradient-bg-secondary text-white relative overflow-hidden group transition-all duration-300">
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Plus className="w-4 h-4 mr-2 relative z-10" />
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  New Chat
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>

      {/* Conversations */}
      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.div 
            className="flex-1 overflow-y-auto px-2 space-y-2 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {conversations.map((conv, index) => (
              <motion.div
                key={conv.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 m-1 rounded-xl cursor-pointer transition-all duration-300 glass-effect group relative overflow-hidden ${
                  conv.active ? 'gradient-bg-primary text-white' : 'hover:bg-white/5'
                }`}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #9b87f5, #33C3F0)',
                    filter: 'blur(20px)',
                  }}
                />
                
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    className={`p-2 rounded-lg ${conv.active ? 'bg-white/20' : 'bg-[#9b87f5]/20'}`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MessageSquare className="w-4 h-4 text-[#9b87f5] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">
                      {conv.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <span>{conv.timestamp}</span>
                      <span>•</span>
                      <span>{conv.messages} messages</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div 
        className="p-4 space-y-2 relative z-10"
        layout
      >
        <AnimatePresence mode="wait">
          {!isCollapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-white glass-effect group"
                >
                  <User className="w-4 h-4 mr-3 group-hover:text-[#9b87f5] transition-colors duration-300" />
                  Profile
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-white glass-effect group"
                >
                  <Settings className="w-4 h-4 mr-3 group-hover:text-[#9b87f5] transition-colors duration-300" />
                  Settings
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full p-2 text-white/70 hover:text-white glass-effect"
                >
                  <User className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full p-2 text-white/70 hover:text-white glass-effect"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ChatSidebar;
