
import React from 'react';
import { motion } from 'framer-motion';
import PremiumCard from '@/components/ui/PremiumCard';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface LuxuryFeaturePanelProps {
  features: Feature[];
}

const LuxuryFeaturePanel: React.FC<LuxuryFeaturePanelProps> = ({ features }) => {
  return (
    <div className="relative">
      {/* Luxury Car Interior Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unity-champagne/5 via-transparent to-unity-gold/5 rounded-3xl" />
      
      {/* Premium Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <PremiumCard 
              variant="luxury" 
              className="p-6 text-center h-full luxury-interior-panel"
              hover
            >
              {/* Luxury Interior Design Element */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-unity-champagne/20 to-unity-gold/20 flex items-center justify-center mx-auto border border-unity-champagne/30">
                  <feature.icon className="w-8 h-8 text-unity-champagne" />
                </div>
                {/* Ambient Light Effect */}
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-unity-champagne/10 blur-xl mx-auto animate-pulse" />
              </div>

              {/* Premium Typography */}
              <h3 className="font-display text-lg font-semibold gradient-luxury-text mb-3">
                {feature.title}
              </h3>
              
              <p className="font-body text-unity-platinum/70 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Luxury Accent Line */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-unity-champagne/60 to-transparent" />
            </PremiumCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryFeaturePanel;
