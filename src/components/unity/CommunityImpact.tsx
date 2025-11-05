import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Leaf, DollarSign, Zap, Heart, Briefcase } from 'lucide-react';

interface MetricCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  trend: string;
  color: string;
  delay: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon: Icon, value, label, trend, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="liquid-glass liquid-glass-hover rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group"
  >
    {/* Background gradient on hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    
    <div className="relative z-10">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <div className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
        {value}
      </div>
      
      <div className="text-white/60 text-sm font-inter mb-3">
        {label}
      </div>
      
      <div className="flex items-center gap-1 text-unity-cyan text-xs font-medium">
        <TrendingUp className="w-4 h-4" />
        <span>{trend}</span>
      </div>
    </div>
  </motion.div>
);

export const CommunityImpact: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      value: '127K',
      label: 'Community Members',
      trend: '+23% this month',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: DollarSign,
      value: '$2.3M',
      label: 'Revenue Shared',
      trend: '+$420K this month',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: Leaf,
      value: '850T',
      label: 'CO₂ Offset',
      trend: '+127T this month',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Zap,
      value: '1.2M',
      label: 'Rides Completed',
      trend: '+180K this month',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Briefcase,
      value: '1,847',
      label: 'Jobs Created',
      trend: '+212 this month',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Heart,
      value: '98%',
      label: 'Satisfaction Rate',
      trend: '+2% improvement',
      color: 'from-rose-400 to-red-500'
    }
  ];

  return (
    <section className="relative py-32 bg-unity-dark-light overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-unity-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-unity-cyan/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-2 mb-6 backdrop-blur-xl"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-inter">Real Impact. Real Numbers.</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-space font-bold text-white mb-6"
          >
            Powered By{' '}
            <span className="bg-gradient-to-r from-unity-cyan via-unity-cyan-light to-unity-purple bg-clip-text text-transparent">
              Community
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto font-inter"
          >
            Every ride you take, every hub you charge at, every job created—it all flows back 
            to strengthen local communities. This is transportation reimagined as a force for good.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} delay={index * 0.1} />
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="liquid-glass rounded-3xl p-8 md:p-12 backdrop-blur-xl border-unity-cyan/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-space font-bold text-white mb-4">
                  From Decatur to Springfield
                </h3>
                <p className="text-white/70 font-inter leading-relaxed mb-6">
                  What started as a small pilot with 5 vehicles in Decatur has grown into a 
                  thriving network serving 12 cities across Illinois. Today, Unity Fleet isn't 
                  just providing rides—we're building the infrastructure for tomorrow's sustainable 
                  communities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-unity-cyan rounded-full" />
                    <span className="text-white/80 text-sm font-inter">16 charging hubs operational</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-unity-cyan rounded-full" />
                    <span className="text-white/80 text-sm font-inter">100% renewable energy sourced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-unity-cyan rounded-full" />
                    <span className="text-white/80 text-sm font-inter">Local ownership guaranteed</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Community Investment', value: '35%', desc: 'of revenue stays local' },
                  { label: 'Job Creation', value: '1,847', desc: 'positions filled' },
                  { label: 'Carbon Reduction', value: '850T', desc: 'CO₂ emissions avoided' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-unity-cyan text-2xl font-space font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white font-inter font-medium text-sm mb-1">
                      {stat.label}
                    </div>
                    <div className="text-white/50 text-xs font-inter">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
