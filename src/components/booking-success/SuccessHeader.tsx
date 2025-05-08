
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessHeader = () => {
  return (
    <motion.div 
      className="glass-card p-8 text-center mb-8 relative overflow-hidden"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 to-transparent opacity-50"></div>
      <motion.div 
        className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-tesla-green/20 text-tesla-green mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, times: [0, 0.6, 1] }}
      >
        <Check className="h-10 w-10" />
      </motion.div>
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-white to-[#9b87f5]/80 bg-clip-text text-transparent"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Booking Confirmed!
      </motion.h1>
      <motion.p 
        className="text-lg text-white/70"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Your Tesla subscription has been successfully booked.
      </motion.p>
    </motion.div>
  );
};

export default SuccessHeader;
