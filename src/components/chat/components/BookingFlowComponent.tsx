
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, User, CreditCard, CheckCircle, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingFlowComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const steps = [
    { icon: Car, title: 'Choose Vehicle', description: 'Select your Tesla model' },
    { icon: User, title: 'Personal Info', description: 'Basic information' },
    { icon: Calendar, title: 'Schedule', description: 'Pickup date & time' },
    { icon: CreditCard, title: 'Payment', description: 'Subscription plan' },
    { icon: CheckCircle, title: 'Confirm', description: 'Review & confirm' },
  ];

  const handleStartBooking = () => {
    navigate('/vehicles');
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card gradient-border-flow p-6 rounded-xl relative overflow-hidden"
    >
      {/* Background enhancement */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #9b87f5, #33C3F0, #D946EF)',
          filter: 'blur(40px)',
        }}
      />
      
      <motion.h3 
        className="text-xl font-bold gradient-purple-text mb-6 text-glow relative z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Booking Process
      </motion.h3>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        {steps.map((stepInfo, index) => (
          <div key={index} className="flex items-center">
            <motion.div 
              className={`w-10 h-10 rounded-full flex items-center justify-center relative ${
                index + 1 <= step ? 'gradient-bg-primary' : 'bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stepInfo.icon className="w-5 h-5 text-white" />
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div 
                className={`w-12 h-0.5 ml-2 ${
                  index + 1 < step ? 'gradient-bg-primary' : 'bg-white/20'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.2 }}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center relative z-10">
        <motion.h4 
          className="text-lg font-medium text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Step {step}: {steps[step - 1].title}
        </motion.h4>
        <motion.p 
          className="text-white/70 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {steps[step - 1].description}
        </motion.p>
        
        <div className="flex justify-center gap-4">
          {step > 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="border-glass-border bg-glass hover:bg-glass-highlight text-white"
              >
                Previous
              </Button>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {step < steps.length ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="gradient-bg-primary hover:gradient-bg-secondary text-white"
              >
                Next Step
              </Button>
            ) : (
              <Button
                onClick={handleStartBooking}
                className="gradient-bg-primary hover:gradient-bg-secondary text-white"
              >
                Start Real Booking
              </Button>
            )}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 pt-4 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={handleGoToDashboard}
              className="border-glass-border bg-glass hover:bg-glass-highlight text-white text-sm"
            >
              <User className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={handleStartBooking}
              className="border-glass-border bg-glass hover:bg-glass-highlight text-white text-sm"
            >
              <Car className="w-4 h-4 mr-2" />
              Browse Vehicles
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BookingFlowComponent;
