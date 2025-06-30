import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Search, Calendar, Key, Star, Shield, Zap } from 'lucide-react';
import PremiumCard from '@/components/ui/PremiumCard';
import AutomotiveButton from '@/components/ui/AutomotiveButton';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="h-6 w-6" />,
      title: 'Search & Select',
      description: 'Find the perfect Tesla for your needs using our advanced search filters. Browse available models, locations, and dates.'
    },
    {
      id: 2,
      icon: <Calendar className="h-6 w-6" />,
      title: 'Book Your Ride',
      description: 'Choose your rental period and confirm your booking. Our flexible options fit any schedule, from daily rentals to extended adventures.'
    },
    {
      id: 3,
      icon: <Key className="h-6 w-6" />,
      title: 'Pick Up & Drive',
      description: 'Collect your Tesla from the designated location and experience the thrill of electric driving. Enjoy premium features and zero emissions.'
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: <Star className="h-6 w-6" />,
      title: 'Premium Experience',
      description: 'Enjoy luxury and innovation with our fleet of Tesla vehicles. Experience cutting-edge technology and unparalleled comfort.'
    },
    {
      id: 2,
      icon: <Shield className="h-6 w-6" />,
      title: 'Safety & Reliability',
      description: 'Drive with confidence knowing our vehicles are equipped with advanced safety features and undergo rigorous maintenance checks.'
    },
    {
      id: 3,
      icon: <Zap className="h-6 w-6" />,
      title: 'Eco-Friendly',
      description: 'Contribute to a sustainable future with zero-emission electric vehicles. Reduce your carbon footprint and enjoy guilt-free driving.'
    },
  ];

  const containerVariants = {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-unity-midnight text-unity-platinum">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              How It Works
            </motion.h1>
            <motion.p
              className="text-xl text-unity-platinum/80 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Discover how easy it is to rent a premium Tesla with our seamless process. From search to drive, we make electric mobility accessible to everyone.
            </motion.p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className="glass-card p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="mb-4 bg-unity-signature/20 inline-block p-3 rounded-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-unity-platinum/70">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-unity-charcoal to-unity-midnight">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                Why Choose Unity Fleet?
              </motion.h2>
              <motion.p
                className="text-xl text-unity-platinum/80 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                  Experience the future of driving with zero emissions, industry-leading technology, and unmatched performance.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.id}
                  className="glass-card p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="mb-4 bg-unity-purple/20 inline-block p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-unity-platinum/70">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <PremiumCard variant="luxury" className="mb-8 px-6 py-3 inline-flex items-center gap-2">
                <Star className="w-5 h-5 text-unity-champagne" />
                <span className="font-display font-semibold gradient-luxury-text">Ready to Experience Electric Mobility?</span>
              </PremiumCard>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                Start Your Journey Today
              </motion.h2>
              <motion.p
                className="text-xl text-unity-platinum/80 mb-8 leading-relaxed"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                Join the electric revolution and discover the thrill of driving a premium Tesla. Book your rental now and experience the future of mobility.
              </motion.p>
              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <Link to="/vehicles">
                  <AutomotiveButton variant="primary" size="lg">
                    Explore Our Fleet
                  </AutomotiveButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HowItWorks;
