
import React from 'react';
import { motion } from 'framer-motion';
import PremiumCard from '@/components/ui/PremiumCard';
import HUDDisplay from '@/components/ui/HUDDisplay';
import { CheckCircle } from 'lucide-react';

interface Step {
  step: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

interface AutomotiveDashboardSectionProps {
  steps: Step[];
}

const AutomotiveDashboardSection: React.FC<AutomotiveDashboardSectionProps> = ({ steps }) => {
  return (
    <div className="relative">
      {/* Automotive Dashboard Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unity-charcoal/20 to-unity-midnight/40 rounded-3xl" />
      
      {/* HUD-Style Progress Bar */}
      <div className="relative z-10 mb-12">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.step}>
              <div className="flex flex-col items-center">
                <HUDDisplay
                  label="STEP"
                  value={step.step}
                  status="success"
                  className="w-20 h-20 flex flex-col items-center justify-center"
                />
                <div className="mt-2 text-xs font-mono text-unity-teal uppercase tracking-wider">
                  {step.title.split(' ')[0]}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-unity-teal/40 via-unity-signature/60 to-unity-purple/40 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Dashboard-Style Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <PremiumCard 
              variant={index % 2 === 0 ? "luxury" : "premium"} 
              className="p-8 h-full automotive-panel"
              hover
              glow={index === 0}
            >
              {/* Automotive Panel Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-unity-signature to-unity-teal flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-mono text-xs text-unity-teal/70 uppercase tracking-wider">
                    PHASE {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold gradient-accent-text">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Automotive Description */}
              <p className="font-body text-unity-platinum/80 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* HUD-Style Feature List */}
              <div className="space-y-3">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-unity-teal/5 border border-unity-teal/20">
                    <CheckCircle className="w-4 h-4 text-unity-teal flex-shrink-0" />
                    <span className="font-mono text-sm text-unity-platinum/90">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Automotive Status Indicator */}
              <div className="mt-6 pt-4 border-t border-unity-signature/20">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-unity-teal/70 uppercase">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-unity-teal animate-pulse" />
                    <span className="font-mono text-xs text-unity-teal">READY</span>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutomotiveDashboardSection;
