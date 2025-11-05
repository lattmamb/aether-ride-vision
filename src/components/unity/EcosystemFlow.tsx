import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Zap, Users, Briefcase, Coins, Leaf, ArrowRight } from 'lucide-react';

interface EcosystemNode {
  id: string;
  icon: React.ElementType;
  label: string;
  color: string;
  description: string;
  impact: string;
}

const nodes: EcosystemNode[] = [
  {
    id: 'rides',
    icon: Car,
    label: 'Unity Rides',
    color: 'from-cyan-400 to-blue-500',
    description: 'Book sustainable electric vehicles',
    impact: '1.2M rides taken, 850 tons CO₂ offset'
  },
  {
    id: 'charging',
    icon: Zap,
    label: 'Charging Hubs',
    color: 'from-yellow-400 to-orange-500',
    description: 'Community-powered energy network',
    impact: '16 hubs, 95% uptime, 100% renewable'
  },
  {
    id: 'community',
    icon: Users,
    label: 'Community',
    color: 'from-purple-400 to-pink-500',
    description: 'Local ownership & revenue sharing',
    impact: '$2.3M distributed to communities'
  },
  {
    id: 'jobs',
    icon: Briefcase,
    label: 'Work Platform',
    color: 'from-blue-400 to-indigo-500',
    description: 'Local employment opportunities',
    impact: '1,847 jobs created, $18M in wages'
  },
  {
    id: 'tokens',
    icon: Coins,
    label: 'UnityLink',
    color: 'from-emerald-400 to-teal-500',
    description: 'Ecosystem value & rewards',
    impact: '$129.20 per token, 24% APY'
  },
  {
    id: 'impact',
    icon: Leaf,
    label: 'Impact',
    color: 'from-green-400 to-emerald-500',
    description: 'Measurable sustainability results',
    impact: 'Carbon neutral by 2025'
  }
];

const connections = [
  { from: 'rides', to: 'charging', label: 'Powers' },
  { from: 'charging', to: 'community', label: 'Revenue' },
  { from: 'community', to: 'jobs', label: 'Creates' },
  { from: 'jobs', to: 'tokens', label: 'Earns' },
  { from: 'tokens', to: 'rides', label: 'Subsidizes' },
  { from: 'rides', to: 'impact', label: 'Reduces' },
  { from: 'impact', to: 'community', label: 'Strengthens' }
];

export const EcosystemFlow: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative py-32 bg-gradient-to-b from-unity-dark via-unity-dark-light to-unity-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-unity-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-unity-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-2 mb-6 backdrop-blur-xl"
          >
            <div className="w-2 h-2 bg-unity-cyan rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-inter">Living Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-space font-bold text-white mb-6"
          >
            Everything Is{' '}
            <span className="bg-gradient-to-r from-unity-cyan via-unity-cyan-light to-unity-purple bg-clip-text text-transparent">
              Connected
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto font-inter"
          >
            Every ride powers charging hubs. Every hub generates community revenue. 
            Every dollar creates local jobs. Every job strengthens the ecosystem. 
            This is Unity in action.
          </motion.p>
        </div>

        {/* Ecosystem Visualization */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop: Circular Layout */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Center pulse */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-unity-cyan/20 to-unity-purple/20 blur-3xl"
            />

            {/* Nodes arranged in circle */}
            {nodes.map((node, index) => {
              const angle = (index / nodes.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 240;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                  onHoverStart={() => setActiveNode(node.id)}
                  onHoverEnd={() => setActiveNode(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative cursor-pointer"
                  >
                    {/* Node */}
                    <div className={`liquid-glass rounded-2xl p-6 w-40 backdrop-blur-xl transition-all duration-300 ${
                      activeNode === node.id ? 'border-unity-cyan shadow-glow-cyan' : 'border-white/10'
                    }`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                        <node.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-space font-semibold text-sm text-center mb-1">
                        {node.label}
                      </h3>
                      <p className="text-white/50 text-xs text-center font-inter">
                        {node.description}
                      </p>
                    </div>

                    {/* Impact popup */}
                    <AnimatePresence>
                      {activeNode === node.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 liquid-glass backdrop-blur-xl rounded-lg p-4 border-unity-cyan"
                        >
                          <p className="text-unity-cyan text-xs font-inter font-medium">
                            {node.impact}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Pulse effect */}
                    {activeNode === node.id && (
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 2],
                          opacity: [0.5, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${node.color} opacity-50 -z-10`}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Connection lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E0FF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#667EEA" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {connections.map((conn, index) => {
                const fromIndex = nodes.findIndex(n => n.id === conn.from);
                const toIndex = nodes.findIndex(n => n.id === conn.to);
                
                const fromAngle = (fromIndex / nodes.length) * 2 * Math.PI - Math.PI / 2;
                const toAngle = (toIndex / nodes.length) * 2 * Math.PI - Math.PI / 2;
                
                const radius = 240;
                const centerX = 300;
                const centerY = 300;
                
                const x1 = centerX + Math.cos(fromAngle) * radius;
                const y1 = centerY + Math.sin(fromAngle) * radius;
                const x2 = centerX + Math.cos(toAngle) * radius;
                const y2 = centerY + Math.sin(toAngle) * radius;

                return (
                  <motion.line
                    key={`${conn.from}-${conn.to}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                );
              })}
            </svg>
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="lg:hidden space-y-4">
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="liquid-glass rounded-xl p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <node.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-space font-semibold text-lg mb-1">
                        {node.label}
                      </h3>
                      <p className="text-white/60 text-sm font-inter">
                        {node.description}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-unity-cyan text-sm font-inter font-medium">
                      {node.impact}
                    </p>
                  </div>
                </div>
                {index < nodes.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-unity-cyan rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 font-inter mb-4">
            Join the ecosystem and create impact with every action
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="unity-gradient-cyan text-white px-8 py-4 rounded-xl font-space font-semibold shadow-glow-cyan inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
