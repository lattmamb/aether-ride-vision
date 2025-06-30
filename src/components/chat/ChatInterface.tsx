
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Sparkles, 
  Car, 
  MapPin, 
  Calendar, 
  CreditCard, 
  User, 
  Settings,
  MessageSquare,
  Plus,
  Edit3,
  MoreHorizontal,
  Copy,
  Download,
  Share,
  Trash2,
  Bot,
  Mic,
  Paperclip,
  Image,
  Code,
  FileText,
  Search,
  ChevronDown,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  Bookmark
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ChatMessage from './ChatMessage';
import { Message, ChatContext } from '@/types/chat';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Welcome to Unity Fleet! 🚗⚡ I'm your AI assistant. I can help you explore Tesla vehicles, check pricing, find locations, book your perfect electric ride, or manage your vehicle services like Uber, DoorDash, and Lyft. What would you like to do today?",
      timestamp: new Date(),
      components: []
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ChatContext>({});
  const [conversations, setConversations] = useState([
    { id: '1', title: 'Unity Fleet Assistant', timestamp: 'Active', messages: messages.length, active: true },
    { id: '2', title: 'Tesla Model S Inquiry', timestamp: '2 hours ago', messages: 12, active: false },
    { id: '3', title: 'Pricing Questions', timestamp: 'Yesterday', messages: 8, active: false },
    { id: '4', title: 'Booking Process', timestamp: '2 days ago', messages: 15, active: false },
  ]);
  const [selectedModel, setSelectedModel] = useState('Unity Fleet AI');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiModels = [
    { id: 'unity', name: 'Unity Fleet AI', description: 'Specialized for vehicle and fleet management' },
    { id: 'gpt4', name: 'GPT-4 Turbo', description: 'Advanced reasoning and analysis' },
    { id: 'claude', name: 'Claude 3.5 Sonnet', description: 'Creative and analytical tasks' },
    { id: 'gemini', name: 'Gemini Pro', description: 'Multimodal AI capabilities' },
  ];

  const suggestedPrompts = [
    "Show me available Tesla models",
    "Compare pricing plans",
    "Find charging stations near me",
    "Help me book a vehicle",
    "Manage my vehicle services",
    "View my dashboard"
  ];

  const generateResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('dashboard') || message.includes('comprehensive') || message.includes('full dashboard') || message.includes('complete dashboard')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Here's your comprehensive dashboard! This is your complete vehicle and service management hub with advanced analytics, real-time monitoring, payment processing, and full booking management:",
        timestamp: new Date(),
        components: ['comprehensive-dashboard']
      };
    }

    if (message.includes('manage') || message.includes('control') || message.includes('vehicle management') || message.includes('my car')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Here's your vehicle management center! You can control your Tesla remotely, manage ride-sharing services like Uber, DoorDash, and Lyft, track earnings, and monitor your vehicle's status:",
        timestamp: new Date(),
        components: ['vehicle-management']
      };
    }

    if (message.includes('uber') || message.includes('doordash') || message.includes('lyft') || message.includes('earning') || message.includes('service')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Maximize your Tesla's earning potential! Manage your ride-sharing and delivery services, track your earnings, and optimize your service schedule:",
        timestamp: new Date(),
        components: ['vehicle-management']
      };
    }
    
    if (message.includes('tesla') || message.includes('model') || message.includes('vehicle') || message.includes('car')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Here's our complete Tesla lineup. Each vehicle offers incredible performance, cutting-edge technology, and zero emissions. Click on any vehicle to learn more or start your booking!",
        timestamp: new Date(),
        components: ['vehicle-gallery']
      };
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('subscription') || message.includes('plan')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Our flexible subscription plans make Tesla ownership accessible. Choose from monthly, quarterly, or semi-annual options with all-inclusive pricing:",
        timestamp: new Date(),
        components: ['pricing-plans']
      };
    }
    
    if (message.includes('location') || message.includes('charging') || message.includes('station') || message.includes('map')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Our network spans across major cities with convenient pickup locations and comprehensive charging infrastructure. Here are our locations and charging stations:",
        timestamp: new Date(),
        components: ['locations-map']
      };
    }
    
    if (message.includes('book') || message.includes('reserve') || message.includes('rent')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I'd be happy to help you reserve a Tesla! First, let me show you our available vehicles. Which model interests you?",
        timestamp: new Date(),
        components: ['vehicle-gallery', 'booking-flow']
      };
    }
    
    if (message.includes('3d') || message.includes('view') || message.includes('showcase')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Experience our vehicles in stunning 3D! Rotate, zoom, and explore every detail of Tesla's premium design:",
        timestamp: new Date(),
        components: ['3d-showcase']
      };
    }
    
    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: "I can help you with:\n• 🚗 Explore Tesla vehicles and specs\n• 💰 View pricing and subscription plans\n• 📍 Find locations and charging stations\n• 📅 Book and manage reservations\n• 🎯 Compare models and features\n• 🚙 Manage your vehicle and services (Uber, DoorDash, Lyft)\n• 🔧 Vehicle control and settings\n\nWhat would you like to know more about?",
      timestamp: new Date(),
      components: ['quick-actions']
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      components: []
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const assistantMessage = generateResponse(inputValue);
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleNewChat = () => {
    setMessages([{
      id: Date.now().toString(),
      type: 'assistant',
      content: "Welcome to Unity Fleet! 🚗⚡ I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
      components: []
    }]);
    setShowSuggestions(true);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex h-screen bg-[#0f0f10] text-white overflow-hidden">
      {/* Enhanced Sidebar */}
      <div className="w-80 bg-[#171717] border-r border-[#333] flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-[#333]">
          <Button 
            onClick={handleNewChat}
            className="w-full bg-[#2f2f2f] hover:bg-[#3f3f3f] text-white border border-[#444] rounded-lg p-3 flex items-center justify-center gap-2 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            New chat
          </Button>
        </div>

        {/* Model Selector */}
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

        {/* Conversations List */}
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

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#333] space-y-2">
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
            <Settings className="w-4 h-4 mr-3" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
            <User className="w-4 h-4 mr-3" />
            Profile
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
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

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Welcome Screen with Suggestions */}
            {showSuggestions && messages.length === 1 && (
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
                      onClick={() => handleSuggestionClick(prompt)}
                      className="p-4 text-left bg-[#1f1f1f] hover:bg-[#2f2f2f] border border-[#333] rounded-lg transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-sm font-medium">{prompt}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Messages */}
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative group"
                >
                  <ChatMessage message={message} context={context} />
                  
                  {/* Message Actions */}
                  {message.type === 'assistant' && (
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
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-[#1f1f1f] rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
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
                  onKeyDown={handleKeyDown}
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
                  onClick={handleSendMessage}
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
      </div>
    </div>
  );
};

export default ChatInterface;
