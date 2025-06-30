import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Car, MapPin, Calendar, CreditCard, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ChatMessage from './ChatMessage';
import ChatSidebar from './ChatSidebar';
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
    { icon: Settings, label: 'Full Dashboard', action: () => handleQuickAction('Show me the comprehensive dashboard') },
  ];

  const handleQuickAction = (message: string) => {
    setInputValue(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="flex h-screen bg-tesla-dark relative overflow-hidden">
      {/* Background Enhancement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9b87f5]/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#33C3F0]/10 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#D946EF]/10 rounded-full blur-3xl floating-slow"></div>
      </div>

      <ChatSidebar />
      
      <div className="flex-1 flex flex-col relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="glass-card seamless-bottom border-b-0 p-4 flex items-center justify-between relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-10 h-10 relative flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute w-10 h-10 rounded-full gradient-bg-primary opacity-80 blur-md"></div>
              <div className="text-white font-bold text-xl relative z-10 text-glow">U</div>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold gradient-purple-text">Unity Fleet Assistant</h1>
              <p className="text-sm text-white/60">Your Tesla rental & management AI companion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white glass-effect">
                <Settings className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 relative">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <ChatMessage message={message} context={context} />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="flex items-center gap-3"
            >
              <motion.div 
                className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <div className="glass-card p-4 max-w-xs message-bubble">
                <div className="flex gap-1">
                  {[0, 150, 300].map((delay, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 gradient-bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: delay / 1000 
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 1 && (
          <motion.div 
            className="px-6 pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="glass-card interactive-card border-0 h-auto p-4 flex flex-col items-center gap-2 hover:bg-white/5 w-full group"
                    onClick={action.action}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <action.icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-sm gradient-accent-text font-medium group-hover:text-glow transition-all duration-300">
                      {action.label}
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input Area */}
        <motion.div 
          className="p-6 seamless-top border-t-0 relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card gradient-border-animated p-4 flex gap-3 items-end group hover:purple-glow transition-all duration-300">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Tesla vehicles, pricing, locations, booking, or vehicle management..."
              className="flex-1 min-h-[44px] max-h-[120px] resize-none bg-transparent border-none focus:ring-0 text-white placeholder-white/50 transition-all duration-300"
              rows={1}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="gradient-bg-primary hover:gradient-bg-secondary text-white h-11 w-11 p-0 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Send className="w-4 h-4 relative z-10" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatInterface;
