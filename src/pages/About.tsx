
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';
import { Car, Users, Award, Globe, Battery, Zap, Shield, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Car, value: '50,000+', label: 'Vehicles Delivered', color: 'text-unity-signature' },
    { icon: Users, value: '25,000+', label: 'Happy Customers', color: 'text-unity-teal' },
    { icon: Globe, value: '100+', label: 'Cities Served', color: 'text-unity-champagne' },
    { icon: Battery, value: '10M+', label: 'CO2 Saved (lbs)', color: 'text-green-400' }
  ];

  const leadership = [
    {
      name: 'Marcus Chen',
      role: 'CEO & Founder',
      bio: 'Former Tesla executive with 15 years in automotive innovation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO',
      bio: 'AI and autonomous vehicle systems expert from Google',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612c035?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Park',
      role: 'Head of Operations',
      bio: 'Former Uber fleet operations director with global scaling experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const timeline = [
    { year: '2019', title: 'Founded', description: 'Unity Fleet started with a vision to democratize electric vehicle access' },
    { year: '2020', title: 'First Fleet', description: 'Launched with 100 Tesla vehicles in San Francisco Bay Area' },
    { year: '2021', title: 'AI Integration', description: 'Introduced AI-powered vehicle matching and predictive maintenance' },
    { year: '2022', title: 'National Expansion', description: 'Expanded to 25 major cities across the United States' },
    { year: '2023', title: 'Sustainability Focus', description: 'Achieved carbon-neutral operations and 10M lbs CO2 saved' },
    { year: '2024', title: 'Innovation Leader', description: 'Recognized as the premier electric vehicle subscription platform' }
  ];

  const values = [
    { icon: Zap, title: 'Innovation', description: 'Pioneering the future of mobility through cutting-edge technology' },
    { icon: Shield, title: 'Trust', description: 'Building lasting relationships through transparency and reliability' },
    { icon: Heart, title: 'Sustainability', description: 'Committed to reducing environmental impact for future generations' },
    { icon: Users, title: 'Community', description: 'Creating a connected ecosystem of electric vehicle enthusiasts' }
  ];

  return (
    <MainLayout useAnimatedNav={true}>
      <PageTransition>
        <div className="min-h-screen bg-unity-midnight">
          {/* Hero Section */}
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-unity-purple/10 to-unity-teal/10" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-luxury-text font-display">
                  Revolutionizing Mobility
                </h1>
                <p className="text-xl md:text-2xl text-unity-platinum/80 mb-12 leading-relaxed font-body">
                  Unity Fleet is pioneering the future of transportation through innovative electric vehicle subscriptions, 
                  making premium Tesla experiences accessible to everyone while building a sustainable tomorrow.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-20 bg-gradient-to-br from-unity-charcoal/30 to-unity-midnight">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-accent-text font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Impact
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="glass-card p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <achievement.icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                      {achievement.value}
                    </div>
                    <div className="text-unity-platinum/80 font-body">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-luxury-text font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Leadership Team
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {leadership.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="glass-card p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-unity-signature/20"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">{member.name}</h3>
                    <p className="text-unity-signature font-semibold mb-4 font-body">{member.role}</p>
                    <p className="text-unity-platinum/80 font-body">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Timeline */}
          <section className="py-20 bg-gradient-to-br from-unity-charcoal/20 to-unity-midnight">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-accent-text font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Journey
              </motion.h2>
              <div className="max-w-4xl mx-auto">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.year}
                    className="flex items-start mb-12 last:mb-0"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-unity-signature to-unity-teal flex items-center justify-center mr-8">
                      <span className="text-white font-bold font-display">{event.year}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2 font-display">{event.title}</h3>
                      <p className="text-unity-platinum/80 font-body">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-luxury-text font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Our Values
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <value.icon className="w-16 h-16 mx-auto mb-6 text-unity-signature" />
                    <h3 className="text-xl font-bold text-white mb-4 font-display">{value.title}</h3>
                    <p className="text-unity-platinum/80 font-body">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-br from-unity-signature/10 to-unity-teal/10">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-luxury-text font-display">
                  Join the Revolution
                </h2>
                <p className="text-xl text-unity-platinum/80 mb-12 max-w-3xl mx-auto font-body">
                  Be part of the future of transportation. Experience the freedom, sustainability, 
                  and innovation that comes with Unity Fleet's premium electric vehicle subscriptions.
                </p>
                <motion.button
                  className="px-12 py-4 bg-gradient-to-r from-unity-signature to-unity-teal text-white font-bold text-lg rounded-xl hover:shadow-unity-glow transition-all duration-300 font-display"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
              </motion.div>
            </div>
          </section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default About;
