
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, User, CreditCard, CheckCircle } from 'lucide-react';

const BookingFlowComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  
  const steps = [
    { icon: User, title: 'Personal Info', description: 'Basic information' },
    { icon: Calendar, title: 'Schedule', description: 'Pickup date & time' },
    { icon: CreditCard, title: 'Payment', description: 'Subscription plan' },
    { icon: CheckCircle, title: 'Confirm', description: 'Review & confirm' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-6">Booking Process</h3>
      
      <div className="flex items-center justify-between mb-8">
        {steps.map((stepInfo, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              index + 1 <= step ? 'bg-[#9b87f5]' : 'bg-white/10'
            }`}>
              <stepInfo.icon className="w-5 h-5 text-white" />
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 ml-2 ${
                index + 1 < step ? 'bg-[#9b87f5]' : 'bg-white/20'
              }`} />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <h4 className="text-lg font-medium text-white mb-2">
          Step {step}: {steps[step - 1].title}
        </h4>
        <p className="text-white/70 mb-6">{steps[step - 1].description}</p>
        
        <div className="flex justify-center gap-4">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="border-glass-border"
            >
              Previous
            </Button>
          )}
          <Button
            onClick={() => step < steps.length ? setStep(step + 1) : null}
            className="bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            {step < steps.length ? 'Next' : 'Complete Booking'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingFlowComponent;
