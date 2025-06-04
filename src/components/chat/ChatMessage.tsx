
import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import { Message, ChatContext } from '@/types/chat';
import VehicleGalleryComponent from './components/VehicleGalleryComponent';
import PricingPlansComponent from './components/PricingPlansComponent';
import LocationsMapComponent from './components/LocationsMapComponent';
import ThreeDShowcaseComponent from './components/ThreeDShowcaseComponent';
import QuickActionsComponent from './components/QuickActionsComponent';
import BookingFlowComponent from './components/BookingFlowComponent';

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
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-[#9b87f5] flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-4xl ${isUser ? 'order-first' : ''}`}>
        <div className={`glass-card p-4 ${isUser ? 'bg-[#9b87f5]/20 ml-auto' : ''}`}>
          <div className="text-white whitespace-pre-wrap">{message.content}</div>
        </div>
        
        {message.components && message.components.length > 0 && (
          <div className="mt-4 space-y-4">
            {message.components.map((component, index) => (
              <div key={index}>{renderComponent(component)}</div>
            ))}
          </div>
        )}
        
        <div className="text-xs text-white/40 mt-2">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
