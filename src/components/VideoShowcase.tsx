import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Zap, Globe, Users, TrendingUp } from 'lucide-react';

const VideoShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 0, 1]);
  const statsY = useTransform(scrollYProgress, [0.3, 0.6], [40, 0]);

  return (
    <section ref={sectionRef} className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/showcase-1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-4">
        <div className="container mx-auto">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <span className="text-tesla-blue text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              The Future of Mobility
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-[1.1] mb-4">
              Redefining the
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tesla-blue to-tesla-purple">
                Driving Experience
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10">
              From instant torque to autonomous driving, our fleet represents the pinnacle of electric vehicle innovation.
            </p>
          </motion.div>

          {/* Glass stats bar */}
          <motion.div
            style={{ y: statsY, opacity: statsOpacity }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
          >
            {[
              { icon: <Zap className="w-5 h-5" />, value: 1200, suffix: '+', label: 'Vehicles Delivered' },
              { icon: <Globe className="w-5 h-5" />, value: 50, suffix: '+', label: 'Charging Hubs' },
              { icon: <Users className="w-5 h-5" />, value: 8500, suffix: '+', label: 'Active Members' },
              { icon: <TrendingUp className="w-5 h-5" />, value: 99, suffix: '%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
              >
                <div className="flex items-center justify-center text-tesla-blue mb-2">
                  {stat.icon}
                </div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl md:text-3xl font-bold text-white"
                />
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
