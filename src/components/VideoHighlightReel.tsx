import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, Cpu, Users } from 'lucide-react';

const highlights = [
  {
    title: 'Performance',
    subtitle: '0-60 in 1.99s',
    description: 'Instant torque. Unmatched acceleration. Pure electric power.',
    icon: <Zap className="w-6 h-6" />,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Sustainability',
    subtitle: 'Zero Emissions',
    description: 'Drive clean. Every mile contributes to a greener planet.',
    icon: <Leaf className="w-6 h-6" />,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Technology',
    subtitle: 'Full Autopilot',
    description: 'Over-the-air updates. Autonomous capabilities. Always evolving.',
    icon: <Cpu className="w-6 h-6" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Community',
    subtitle: '8,500+ Members',
    description: 'Join a growing network of EV enthusiasts and pioneers.',
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
];

const VideoHighlightReel: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ambient video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/videos/highlight-reel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tesla-blue text-sm font-semibold uppercase tracking-[0.2em] mb-3 block"
          >
            Why Go Electric
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold gradient-text"
          >
            Built for Tomorrow
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-tesla-blue mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-tesla-blue text-sm font-medium mb-3">{item.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlightReel;
