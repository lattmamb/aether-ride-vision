import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sections = [
  {
    title: 'Autonomous Ridesharing',
    subtitle: 'Seamless Travel',
    description: 'Experience fully autonomous ridesharing with our cutting-edge fleet. Safe, efficient, and available 24/7 at your fingertips.',
    image: '/images/hero-slide-1.jpg',
    accent: 'from-primary to-cyan-400',
  },
  {
    title: 'Premium Fleet',
    subtitle: 'Latest Models',
    description: 'Access the newest Tesla models through flexible rental plans. From Model 3 to Cybertruck, drive the future today.',
    image: '/images/hero-slide-5.jpg',
    accent: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Smart Charging',
    subtitle: 'Always Ready',
    description: 'Our network of 50+ charging hubs ensures your vehicle is always ready. Real-time availability tracking and route optimization.',
    image: '/images/hero-slide-4.jpg',
    accent: 'from-green-400 to-emerald-400',
  },
  {
    title: 'Employee Benefits',
    subtitle: 'Corporate Solutions',
    description: 'Transform your company benefits package with sustainable transportation. Attract talent with premium EV perks and on-demand rides.',
    image: '/images/hero-slide-7.jpg',
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
