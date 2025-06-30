
import React from 'react';
import { Bot, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModelSelectorProps {
  selectedModel: string;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel }) => {
  return (
    <div className="p-4 border-b border-[#333]">
      <div className="relative">
        <Button
          variant="outline"
          className="w-full bg-[#1f1f1f] border-[#444] text-white hover:bg-[#2f2f2f] justify-between"
        >
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4" />
            <span>{selectedModel}</span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ModelSelector;
