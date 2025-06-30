
import React from 'react';
import { Sparkles, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatHeader: React.FC = () => {
  return (
    <div className="h-14 border-b border-[#333] bg-[#0f0f10] flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <h1 className="text-sm font-medium">Unity Fleet Assistant</h1>
          <p className="text-xs text-gray-400">AI-powered vehicle management</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <Search className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
