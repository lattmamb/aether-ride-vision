
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { subscriptionPlans } from '@/data/vehicles';

const PricingPlansComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-6">Subscription Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-effect p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
              plan.recommended 
                ? 'border-[#9b87f5] bg-[#9b87f5]/10' 
                : 'border-glass-border hover:border-[#9b87f5]/50'
            }`}
          >
            {plan.recommended && (
              <div className="flex items-center gap-2 text-[#9b87f5] mb-3">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Recommended</span>
              </div>
            )}
            
            <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
            <div className="text-3xl font-bold text-white mb-1">
              ${plan.price}<span className="text-lg text-white/70">{plan.priceUnit}</span>
            </div>
            <p className="text-white/70 mb-4">{plan.duration}</p>
            
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-white/80">
                  <Check className="w-4 h-4 text-[#9b87f5] flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${
                plan.recommended 
                  ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' 
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingPlansComponent;
