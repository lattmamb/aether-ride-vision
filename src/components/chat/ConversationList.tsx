
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Conversation {
  id: string;
  title: string;
  timestamp: string;
  messages: number;
  active: boolean;
}

interface ConversationListProps {
  conversations: Conversation[];
}

const ConversationList: React.FC<ConversationListProps> = ({ conversations }) => {
  return (
    <div className="flex-1 overflow-y-auto p-2">
      <div className="text-xs text-gray-400 px-2 mb-2">Recent</div>
      {conversations.map((conv) => (
        <motion.div
          key={conv.id}
          className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 relative ${
            conv.active ? 'bg-[#2f2f2f]' : 'hover:bg-[#2f2f2f]'
          }`}
          whileHover={{ x: 4 }}
        >
          <MessageSquare className="w-4 h-4 text-gray-400" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">
              {conv.title}
            </div>
            <div className="text-xs text-gray-400">
              {conv.timestamp}
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <MoreHorizontal className="w-3 h-3" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ConversationList;
