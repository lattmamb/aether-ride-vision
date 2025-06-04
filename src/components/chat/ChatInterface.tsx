
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Car, MapPin, Calendar, CreditCard, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ChatMessage from './ChatMessage';
import ChatSidebar from './ChatSidebar';
import { Message, ChatContext } from '@/types/chat';
import { vehicles } from '@/data/vehicles';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Welcome to Unity Fleet! 🚗⚡ I'm your AI assistant. I can help you explore Tesla vehicles, check pricing, find locations, or book your perfect electric ride. What would you like to do today?",
      timestamp: new Date(),
      components: []
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ChatContext>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase();
    
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
      content: "I can help you with:\n• 🚗 Explore Tesla vehicles and specs\n• 💰 View pricing and subscription plans\n• 📍 Find locations and charging stations\n• 📅 Book and manage reservations\n• 🎯 Compare models and features\n\nWhat would you like to know more about?",
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

  const quickActions = [
    { icon: Car, label: 'Browse Vehicles', action: () => handleQuickAction('Show me all Tesla models') },
    { icon: CreditCard, label: 'View Pricing', action: () => handleQuickAction('What are your subscription plans?') },
    { icon: MapPin, label: 'Find Locations', action: () => handleQuickAction('Show me charging stations and locations') },
    { icon: Calendar, label: 'Book Now', action: () => handleQuickAction('I want to book a Tesla') },
  ];

  const handleQuickAction = (message: string) => {
    setInputValue(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="flex h-screen bg-tesla-dark">
      <ChatSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="glass-card border-b border-glass-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] opacity-70 blur-[8px]"></div>
              <div className="text-[#9b87f5] font-bold text-xl relative z-10">U</div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Unity Fleet Assistant</h1>
              <p className="text-sm text-white/60">Your Tesla rental AI companion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} context={context} />
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#9b87f5] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="glass-card p-4 max-w-xs">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#9b87f5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-[#9b87f5] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-[#9b87f5] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 1 && (
          <div className="px-6 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="glass-card border-glass-border h-auto p-4 flex flex-col items-center gap-2 hover:bg-white/5"
                  onClick={action.action}
                >
                  <action.icon className="w-5 h-5 text-[#9b87f5]" />
                  <span className="text-sm">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-glass-border">
          <div className="glass-card p-4 flex gap-3 items-end">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Tesla vehicles, pricing, locations, or booking..."
              className="flex-1 min-h-[44px] max-h-[120px] resize-none bg-transparent border-none focus:ring-0 text-white placeholder-white/50"
              rows={1}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white h-11 w-11 p-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
