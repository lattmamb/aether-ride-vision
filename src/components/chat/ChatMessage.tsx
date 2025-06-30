
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
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'} group`}
    >
      {!isUser && (
        <motion.div 
          className="w-10 h-10 rounded-full gradient-bg-primary flex items-center justify-center flex-shrink-0 relative overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <Sparkles className="w-5 h-5 text-white relative z-10" />
        </motion.div>
      )}
      
      <div className={`max-w-4xl ${isUser ? 'order-first' : ''} space-y-2`}>
        <motion.div 
          className={`glass-card message-bubble p-4 relative group-hover:purple-glow transition-all duration-500 ${
            isUser 
              ? 'gradient-bg-primary ml-auto text-white' 
              : 'hover:bg-white/5'
          }`}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-white whitespace-pre-wrap relative z-10">
            {message.content}
          </div>
          
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              background: isUser 
                ? 'linear-gradient(135deg, #9b87f5, #7E69AB)' 
                : 'linear-gradient(135deg, #33C3F0, #9b87f5)',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
        
        {message.components && message.components.length > 0 && (
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {message.components.map((component, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                {renderComponent(component)}
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="text-xs text-white/40 mt-2 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          {!isUser && (
            <motion.div
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
      
      {isUser && (
        <motion.div 
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden"
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <User className="w-5 h-5 text-white relative z-10" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
