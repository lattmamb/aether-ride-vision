
import React from 'react';
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MessageActions: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <Button variant="ghost" size="sm" className="p-1 h-auto text-gray-400 hover:text-white">
        <Copy className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="sm" className="p-1 h-auto text-gray-400 hover:text-white">
        <ThumbsUp className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="sm" className="p-1 h-auto text-gray-400 hover:text-white">
        <ThumbsDown className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="sm" className="p-1 h-auto text-gray-400 hover:text-white">
        <RotateCcw className="w-3 h-3" />
      </Button>
    </div>
  );
};

export default MessageActions;
