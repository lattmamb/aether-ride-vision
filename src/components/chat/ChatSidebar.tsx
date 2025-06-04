
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Plus, Settings, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const conversations = [
    { id: '1', title: 'Tesla Model S Inquiry', timestamp: '2 hours ago', active: true },
    { id: '2', title: 'Pricing Questions', timestamp: 'Yesterday' },
    { id: '3', title: 'Booking Process', timestamp: '2 days ago' },
  ];

  return (
    <motion.div
      animate={{ width: isCollapsed ? 60 : 280 }}
      transition={{ duration: 0.3 }}
      className="glass-card border-r border-glass-border flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-4 border-b border-glass-border flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-white">Conversations</h2>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white/70 hover:text-white"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
          <Plus className="w-4 h-4 mr-2" />
          {!isCollapsed && 'New Chat'}
        </Button>
      </div>

      {/* Conversations */}
      {!isCollapsed && (
        <div className="flex-1 overflow-y-auto px-2">
          {conversations.map((conv) => (
            <motion.div
              key={conv.id}
              whileHover={{ x: 4 }}
              className={`p-3 m-1 rounded-lg cursor-pointer transition-colors ${
                conv.active ? 'bg-[#9b87f5]/20' : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#9b87f5] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">
                    {conv.title}
                  </div>
                  <div className="text-xs text-white/50">
                    {conv.timestamp}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="p-4 border-t border-glass-border space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-white/70 hover:text-white"
        >
          <User className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Profile'}
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-white/70 hover:text-white"
        >
          <Settings className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Settings'}
        </Button>
      </div>
    </motion.div>
  );
};

export default ChatSidebar;
