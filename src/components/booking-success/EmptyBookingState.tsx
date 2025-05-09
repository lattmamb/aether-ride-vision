
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Search } from 'lucide-react';

const EmptyBookingState: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="container mx-auto px-4 py-16 mt-14 md:mt-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card max-w-md mx-auto py-12 px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#9b87f5]/20 flex items-center justify-center"
        >
          <ShieldAlert className="h-8 w-8 text-[#9b87f5]" />
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Booking Information Not Found
        </motion.h2>
        
        <motion.p 
          className="mb-8 text-white/70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We couldn't find your booking information. The reservation may have expired or the link is incorrect.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-3 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <Button 
            variant="outline"
            className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 text-white"
            onClick={() => navigate('/vehicles')}
          >
            <Search className="w-4 h-4 mr-2" />
            Browse Vehicles
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EmptyBookingState;
