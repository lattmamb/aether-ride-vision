
import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot, Copy, ThumbsUp, ThumbsDown, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Message, ChatContext } from '@/types/chat';
import VehicleGalleryComponent from './components/VehicleGalleryComponent';
import PricingPlansComponent from './components/PricingPlansComponent';
import LocationsMapComponent from './components/LocationsMapComponent';
import ThreeDShowcaseComponent from './components/ThreeDShowcaseComponent';
import QuickActionsComponent from './components/QuickActionsComponent';
import BookingFlowComponent from './components/BookingFlowComponent';
import VehicleManagementComponent from './components/VehicleManagementComponent';
import ComprehensiveDashboardComponent from './components/ComprehensiveDashboardComponent';

interface ChatMessageProps {
  message: Message;
  context: ChatContext;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, context }) => {
  const isUser = message.type === 'user';

  const renderComponent = (componentType: string) => {
    switch (componentType) {
      case 'vehicle-gallery':
        return <VehicleGalleryComponent />;
      case 'pricing-plans':
        return <PricingPlansComponent />;
      case 'locations-map':
        return <LocationsMapComponent />;
      case '3d-showcase':
        return <ThreeDShowcaseComponent />;
      case 'quick-actions':
        return <QuickActionsComponent />;
      case 'booking-flow':
        return <BookingFlowComponent />;
      case 'vehicle-management':
        return <VehicleManagementComponent />;
      case 'comprehensive-dashboard':
        return <ComprehensiveDashboardComponent />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'} group`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-[85%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-[#2f2f2f] text-white ml-auto max-w-lg' 
            : 'bg-transparent text-white'
        }`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </div>
        </div>
        
        {message.components && message.components.length > 0 && (
          <motion.div 
            className="mt-4 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {message.components.map((component, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {renderComponent(component)}
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
          <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          {!isUser && (
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          )}
        </div>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-[#2f2f2f] flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
