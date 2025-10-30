import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProgressStepperProps {
  currentStep: number;
  steps: Step[];
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-border">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          
          return (
            <div key={step.number} className="relative flex flex-col items-center" style={{ flex: 1 }}>
              {/* Step Circle */}
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors ${
                  isCompleted
                    ? 'bg-primary text-white'
                    : isCurrent
                    ? 'bg-primary text-white'
                    : 'bg-card border-2 border-border text-muted-foreground'
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: step.number * 0.1 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.number}</span>
                )}
              </motion.div>

              {/* Step Label */}
              <div className="absolute top-12 text-center w-32">
                <p
                  className={`text-sm font-medium ${
                    isCurrent ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStepper;
