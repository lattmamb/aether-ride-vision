
import React from 'react';
import { motion } from 'framer-motion';

interface NextStepsInfoProps {
  email: string;
  vehicleModel: string;
}

const NextStepsInfo: React.FC<NextStepsInfoProps> = ({ email, vehicleModel }) => {
  return (
    <div>
      <h3 className="font-bold mb-3 text-white">Next Steps</h3>
      <ul className="space-y-4">
        <motion.li 
          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] flex-shrink-0 mt-1">
            1
          </div>
          <div>
            <p className="font-medium text-white">Check your email</p>
            <p className="text-sm text-white/70">
              We've sent a confirmation to {email} with all the details of your booking.
            </p>
          </div>
        </motion.li>
        
        <motion.li 
          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] flex-shrink-0 mt-1">
            2
          </div>
          <div>
            <p className="font-medium text-white">Prepare for delivery</p>
            <p className="text-sm text-white/70">
              One of our representatives will contact you to confirm delivery details and answer any questions.
            </p>
          </div>
        </motion.li>
        
        <motion.li 
          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] flex-shrink-0 mt-1">
            3
          </div>
          <div>
            <p className="font-medium text-white">Welcome aboard!</p>
            <p className="text-sm text-white/70">
              Enjoy your new Tesla {vehicleModel} subscription. You'll receive a walkthrough on delivery day.
            </p>
          </div>
        </motion.li>
      </ul>
    </div>
  );
};

export default NextStepsInfo;
