
import React, { useRef } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSendMessage: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  inputValue, 
  setInputValue, 
  onSendMessage, 
  onKeyDown 
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6 border-t border-[#333] bg-[#0f0f10]">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#1f1f1f] border border-[#333] rounded-2xl overflow-hidden focus-within:border-[#9b87f5] transition-colors">
          <div className="flex items-end gap-3 p-4">
            {/* File Upload */}
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFileUpload}
              className="p-2 text-gray-400 hover:text-white hover:bg-[#2f2f2f] rounded-lg"
            >
              <Paperclip className="w-4 h-4" />
            </Button>

            {/* Text Input */}
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Message Unity Fleet AI..."
              className="flex-1 min-h-[20px] max-h-32 resize-none bg-transparent border-none focus:ring-0 text-white placeholder-gray-400 text-sm py-2"
              rows={1}
            />

            {/* Voice Input */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-gray-400 hover:text-white hover:bg-[#2f2f2f] rounded-lg"
            >
              <Mic className="w-4 h-4" />
            </Button>

            {/* Send Button */}
            <Button
              onClick={onSendMessage}
              disabled={!inputValue.trim()}
              className="p-2 bg-white text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
          <span>Unity Fleet AI can make mistakes. Consider checking important information.</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
