import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sections = [
  {
    title: 'Ride Autonomously',
    subtitle: 'On-Demand Mobility',
    description: 'Summon a self-driving vehicle anywhere, anytime. Our fleet navigates city streets with precision while you sit back and enjoy the ride.',
    image: '/images/ridesharing-bg.jpg',
    accent: 'from-primary to-cyan-400',
  },
  {
    title: 'Drive the Future',
    subtitle: 'Premium Electric Fleet',
    description: 'From the nimble Model 3 to the commanding Cybertruck — subscribe to the vehicle that fits your life, swap anytime.',
    image: '/images/rentals-bg.jpg',
    accent: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Charge Everywhere',
    subtitle: 'Supercharger Network',
    description: 'Over 50 fast-charging hubs with real-time availability. Route-optimized charging stops ensure you never run low.',
    image: '/images/hero-slide-2.jpg',
    accent: 'from-green-400 to-emerald-400',
  },
  {
    title: 'Empower Your Team',
    subtitle: 'Corporate Mobility',
    description: 'Offer employees sustainable commute benefits with dedicated fleet access, usage dashboards, and tax-advantaged programs.',
    image: '/images/benefits-bg.jpg',
    accent: 'from-amber-400 to-orange-400',
  },
];

const StickyScrollReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${sections.length * 100}vh` }}>
      {/* Sticky background that transitions */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {sections.map((section, index) => {
          const start = index / sections.length;
          const end = (index + 1) / sections.length;

          return (
            <StickyPanel
              key={index}
              section={section}
              index={index}
              scrollYProgress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}
      </div>
    </section>
  );
};

const StickyPanel: React.FC<{
  section: (typeof sections)[0];
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
}> = ({ section, index, scrollYProgress, start, end }) => {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [1.1, 1, 1, 0.95]
  );
  const textY = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [60, 0, 0, -40]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [start + 0.02, start + 0.12, end - 0.12, end - 0.02],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0"
    >
      {/* Background image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={section.image}
          alt={section.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className={`inline-block text-sm font-semibold uppercase tracking-[0.25em] mb-4 bg-clip-text text-transparent bg-gradient-to-r ${section.accent}`}>
              {section.subtitle}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]">
              {section.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              {section.description}
            </p>

            {/* Progress indicator */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-white/40 text-sm font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${section.accent} rounded-full`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                />
              </div>
              <span className="text-white/40 text-sm font-mono">
                {String(sections.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StickyScrollReveal;
