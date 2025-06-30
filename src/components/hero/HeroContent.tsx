
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import AutomotiveButton from '@/components/ui/AutomotiveButton';
import PremiumCard from '@/components/ui/PremiumCard';

interface HeroContentProps {
  containerVariants: any;
  itemVariants: any;
}

const HeroContent: React.FC<HeroContentProps> = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div 
      className="container relative z-10 mx-auto px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-12">
        
        {/* Tesla-style minimal badge */}
        <motion.div variants={itemVariants}>
          <PremiumCard variant="luxury" className="px-8 py-4 inline-flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-display font-light text-white tracking-wide text-sm uppercase">Premium Electric Fleet</span>
          </PremiumCard>
        </motion.div>

        {/* Tesla-style bold, minimal headline */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-white leading-none tracking-tight">
            <span className="block">Experience</span>
            <span className="block font-medium">Electric Excellence</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            Premium electric vehicles. Sustainable luxury. Uncompromising performance.
          </p>
        </motion.div>
        
        {/* Tesla-style minimal stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-2xl w-full">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">500+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Miles Range</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">5★</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Safety Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">25+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Fleet Models</div>
          </div>
        </motion.div>
        
        {/* Tesla-style CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-8">
          <Link to="/vehicles">
            <AutomotiveButton variant="primary" size="lg" className="px-12 py-4 text-lg font-light tracking-wide">
              Explore Fleet
            </AutomotiveButton>
          </Link>
          
          <Link to="/how-it-works">
            <AutomotiveButton variant="ghost" size="lg" className="px-12 py-4 text-lg font-light tracking-wide border-white/20 text-white hover:bg-white/10">
              Learn More
            </AutomotiveButton>
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroContent;
