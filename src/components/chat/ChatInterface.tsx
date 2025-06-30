
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import ChatHeader from './ChatHeader';
import ConversationList from './ConversationList';
import ModelSelector from './ModelSelector';
import SidebarFooter from './SidebarFooter';
import WelcomeScreen from './WelcomeScreen';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import MessageActions from './MessageActions';
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

        <ModelSelector selectedModel={selectedModel} />
        <ConversationList conversations={conversations} />
        <SidebarFooter />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatHeader />

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Welcome Screen with Suggestions */}
            {showSuggestions && messages.length === 1 && (
              <WelcomeScreen 
                suggestedPrompts={suggestedPrompts}
                onSuggestionClick={handleSuggestionClick}
              />
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
                  {message.type === 'assistant' && <MessageActions />}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Typing Indicator */}
            {isTyping && <TypingIndicator />}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        <ChatInput 
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSendMessage={handleSendMessage}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default ChatInterface;
