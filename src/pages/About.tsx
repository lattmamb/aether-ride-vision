import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Zap, Leaf, Shield } from 'lucide-react';
import PremiumCard from '@/components/ui/PremiumCard';

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: '/placeholder-avatar.jpg' },
    { name: 'Jane Smith', role: 'CTO', image: '/placeholder-avatar.jpg' },
    { name: 'Mike Johnson', role: 'Lead Engineer', image: '/placeholder-avatar.jpg' },
  ];

  const coreValues = [
    { title: 'Innovation', description: 'We constantly push the boundaries of what\'s possible.', icon: Zap },
    { title: 'Sustainability', description: 'We are committed to a greener future.', icon: Leaf },
    { title: 'Safety', description: 'Your safety is our top priority.', icon: Shield },
  ];

  const missionStatement = 'To accelerate the world\'s transition to sustainable energy by providing premium electric vehicle rentals.';

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-unity-midnight text-unity-platinum">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-unity-charcoal to-unity-midnight">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              variants={animationVariants}
              initial="hidden"
              animate="visible"
            >
              About Unity Fleet
            </motion.h1>
            <motion.p
              className="text-xl text-unity-platinum/80 max-w-3xl mx-auto leading-relaxed"
              variants={animationVariants}
              initial="hidden"
              animate="visible"
            >
              Learn about our mission, values, and the team behind the premium electric vehicle rental experience.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <motion.section
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
                <p className="text-lg text-unity-platinum/70 leading-relaxed">
                  {missionStatement}
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Target className="w-16 h-16 text-unity-signature mx-auto mb-4" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-unity-midnight to-unity-charcoal"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 rounded-full bg-unity-signature/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-unity-signature" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-unity-platinum/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center"
                  variants={itemVariants}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-unity-platinum/70">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-unity-charcoal to-unity-midnight"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div className="text-center" variants={itemVariants}>
                <Award className="w-12 h-12 text-unity-gold mx-auto mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-unity-platinum/70">Awards Won</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <Users className="w-12 h-12 text-unity-teal mx-auto mb-2" />
                <p className="text-2xl font-bold">5000+</p>
                <p className="text-unity-platinum/70">Happy Customers</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <Heart className="w-12 h-12 text-unity-purple mx-auto mb-2" />
                <p className="text-2xl font-bold">99%</p>
                <p className="text-unity-platinum/70">Customer Satisfaction</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <Zap className="w-12 h-12 text-unity-signature mx-auto mb-2" />
                <p className="text-2xl font-bold">100+</p>
                <p className="text-unity-platinum/70">Charging Stations</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default About;
