import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { LiquidGlassButton } from './LiquidGlassButton';
import { StatsCard } from './StatsCard';
import { SparklesCore } from '@/components/ui/sparkles';

export const UnityHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="unity-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#00E0FF"
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-unity-cyan/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-unity-purple/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-unity-cyan/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-8 backdrop-blur-xl"
          >
            <div className="w-2 h-2 bg-unity-cyan rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-inter">The Future of Connected Living</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl md:text-7xl font-space font-bold text-white mb-6 leading-tight"
          >
            One Platform.
            <br />
            <span className="bg-gradient-to-r from-unity-cyan via-unity-cyan-light to-unity-purple bg-clip-text text-transparent">
              Every Experience.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-white/70 mb-12 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Connect, ride, share, discover, and live — all seamlessly integrated in a revolutionary 
            super-app powered by next-generation technology and liquid glass design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <LiquidGlassButton variant="primary" size="lg" icon={ArrowRight}>
              Experience Unity
            </LiquidGlassButton>
            <LiquidGlassButton variant="ghost" size="lg" icon={Play}>
              Watch Demo
            </LiquidGlassButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <StatsCard value="10M+" label="Active Users" delay={0.5} />
            <StatsCard value="50+" label="Integrated Services" delay={0.6} />
            <StatsCard value="24/7" label="Connected Experience" delay={0.7} />
            <StatsCard value="AI" label="Powered Platform" delay={0.8} />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-unity-dark to-transparent" />
    </section>
  );
};
