
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PremiumCard from '@/components/ui/PremiumCard';
import AutomotiveButton from '@/components/ui/AutomotiveButton';
import HUDDisplay from '@/components/ui/HUDDisplay';
import { Zap, Users, Trophy, Star } from 'lucide-react';

const PremiumCTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Luxury Automotive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unity-purple/10 via-unity-signature/5 to-unity-teal/10 rounded-3xl" />
      
      {/* Ambient Lighting Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-unity-signature/20 rounded-full blur-3xl animate-unity-glow" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-unity-purple/20 rounded-full blur-3xl animate-pulse" />

      <PremiumCard variant="premium" className="p-12 relative z-10" glow>
        {/* Premium Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <HUDDisplay
            label="Fleet Size"
            value="25+"
            unit="models"
            status="success"
            icon={<Trophy className="w-4 h-4" />}
          />
          <HUDDisplay
            label="Drivers"
            value="5000+"
            unit="active"
            status="success"
            icon={<Users className="w-4 h-4" />}
          />
          <HUDDisplay
            label="Rating"
            value="4.9"
            unit="stars"
            status="success"
            icon={<Star className="w-4 h-4" />}
          />
          <HUDDisplay
            label="Range"
            value="500+"
            unit="miles"
            status="success"
            icon={<Zap className="w-4 h-4" />}
          />
        </div>

        {/* Luxury CTA Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Zap className="w-20 h-20 mx-auto mb-6 text-unity-teal animate-unity-glow" />
            <h2 className="font-display text-4xl font-bold gradient-text mb-6">
              Experience Automotive Excellence
            </h2>
            <p className="font-body text-xl text-unity-platinum/80 max-w-3xl mx-auto leading-relaxed">
              Join the elite community of drivers who've chosen sustainable luxury. 
              Unity Fleet represents the pinnacle of electric automotive innovation.
            </p>
          </motion.div>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AutomotiveButton 
              variant="luxury" 
              size="lg"
              icon={<Zap className="w-5 h-5" />}
              onClick={() => navigate('/vehicles')}
            >
              Explore Premium Fleet
            </AutomotiveButton>
            
            <AutomotiveButton 
              variant="hud" 
              size="lg"
              icon={<Trophy className="w-5 h-5" />}
              onClick={() => navigate('/pricing')}
            >
              View Elite Plans
            </AutomotiveButton>
          </div>
        </div>

        {/* Luxury Accent Elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-unity-champagne to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-unity-signature to-transparent opacity-60" />
      </PremiumCard>
    </div>
  );
};

export default PremiumCTASection;
