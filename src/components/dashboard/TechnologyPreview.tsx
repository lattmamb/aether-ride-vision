
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { Battery, Zap, Shield, Cpu } from 'lucide-react';

const TechnologyPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const techFeatures = [
    {
      icon: Battery,
      title: 'Advanced Battery Tech',
      description: 'Next-gen lithium cells with 500+ mile range',
      color: 'from-green-400 to-emerald-600',
      delay: 0
    },
    {
      icon: Zap,
      title: 'Instant Power Delivery',
      description: 'Zero-latency acceleration with dual motors',
      color: 'from-yellow-400 to-orange-600',
      delay: 0.2
    },
    {
      icon: Shield,
      title: 'Autonomous Safety',
      description: 'AI-powered collision avoidance systems',
      color: 'from-blue-400 to-cyan-600',
      delay: 0.4
    },
    {
      icon: Cpu,
      title: 'Neural Processing',
      description: 'Real-time learning and adaptation',
      color: 'from-purple-400 to-pink-600',
      delay: 0.6
    }
  ];

  return (
    <div ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Fixed background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <SparklesCore
          id="tech-background"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#9b87f5"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Technology That Powers Tomorrow
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience cutting-edge automotive innovation with our advanced electric vehicle technology stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Holographic container */}
                <div className="relative glass-card p-8 h-full overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, transparent, transparent)`,
                        `linear-gradient(45deg, rgba(155, 135, 245, 0.1), transparent)`,
                        `linear-gradient(45deg, transparent, transparent)`
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    style={{ width: '100px', transform: 'skewX(-45deg)' }}
                  />

                  {/* Icon with holographic effect */}
                  <motion.div
                    className="relative mb-6"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 relative`}>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm" />
                      <feature.icon className="h-8 w-8 text-white relative z-10" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Holographic border corners */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyPreview;
