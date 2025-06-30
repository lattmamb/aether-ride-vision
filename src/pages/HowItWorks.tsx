
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import PageTransition from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';
import { Search, Calendar, Car, Key, Smartphone, Shield, Zap, Users } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Browse & Select',
      description: 'Explore our premium Tesla fleet with AI-powered recommendations based on your preferences',
      details: [
        'View real-time availability across all locations',
        'Compare models, features, and pricing',
        'Get personalized recommendations',
        'Read verified customer reviews'
      ],
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Choose Your Plan',
      description: 'Select from flexible subscription options that fit your lifestyle and driving needs',
      details: [
        'Daily, weekly, or monthly subscriptions',
        'Mileage packages to match your usage',
        'Premium insurance included',
        'Free charging network access'
      ],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      icon: Smartphone,
      title: 'Complete Setup',
      description: 'Quick digital onboarding with instant verification and account setup',
      details: [
        'Digital license verification',
        'Secure payment processing',
        'Insurance confirmation',
        'Mobile app download and setup'
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    },
    {
      icon: Key,
      title: 'Pick Up Your Tesla',
      description: 'Seamless vehicle pickup with contactless access and personalized walkthrough',
      details: [
        'Contactless key transfer via app',
        'Pre-delivery inspection completed',
        'Personalized vehicle settings',
        'Emergency support activation'
      ],
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600&h=400&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Full Coverage',
      description: 'Comprehensive insurance, maintenance, and roadside assistance included'
    },
    {
      icon: Zap,
      title: 'Free Charging',
      description: 'Access to Tesla Supercharger network and Unity Fleet charging stations'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency assistance'
    }
  ];

  const faqs = [
    {
      question: 'What happens if I have an accident?',
      answer: 'Our comprehensive insurance covers all accidents. Simply contact our 24/7 support team, and we\'ll handle everything including vehicle replacement if needed.'
    },
    {
      question: 'Can I extend my subscription?',
      answer: 'Absolutely! You can extend your subscription at any time through our mobile app or website. We offer flexible extensions with competitive rates.'
    },
    {
      question: 'What about charging costs?',
      answer: 'All charging is included in your subscription. Use any Tesla Supercharger or Unity Fleet charging station at no additional cost.'
    },
    {
      question: 'Is there a minimum subscription period?',
      answer: 'Our minimum subscription is one day. You have complete flexibility to choose the duration that works best for your needs.'
    }
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
                  How It Works
                </h1>
                <p className="text-xl md:text-2xl text-unity-platinum/80 mb-12 leading-relaxed font-body">
                  Experience the future of mobility in four simple steps. From browsing to driving, 
                  we've streamlined every aspect of your Tesla subscription journey.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Interactive Steps */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Step Navigation */}
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                        activeStep === index ? 'ring-2 ring-unity-signature shadow-unity-glow' : ''
                      }`}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeStep === index ? 'bg-unity-signature' : 'bg-unity-platinum/20'
                        }`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2 font-display">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-unity-platinum/80 font-body">{step.description}</p>
                        </div>
                      </div>
                      
                      {activeStep === index && (
                        <motion.div
                          className="mt-6 pl-16"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center gap-2 text-unity-platinum/70 font-body">
                                <div className="w-2 h-2 bg-unity-teal rounded-full" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Step Visualization */}
                <div className="relative">
                  <motion.div
                    key={activeStep}
                    className="glass-card overflow-hidden rounded-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-white mb-3 font-display">
                        {steps[activeStep].title}
                      </h4>
                      <p className="text-unity-platinum/80 font-body">
                        {steps[activeStep].description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gradient-to-br from-unity-charcoal/30 to-unity-midnight">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-accent-text font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                What's Included
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="glass-card p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <benefit.icon className="w-16 h-16 mx-auto mb-6 text-unity-signature" />
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">{benefit.title}</h3>
                    <p className="text-unity-platinum/80 font-body">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-luxury-text font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 font-display">{faq.question}</h3>
                    <p className="text-unity-platinum/80 font-body">{faq.answer}</p>
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
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-unity-platinum/80 mb-12 max-w-3xl mx-auto font-body">
                  Join thousands of satisfied customers who have discovered the freedom and luxury 
                  of Tesla subscription with Unity Fleet.
                </p>
                <motion.button
                  className="px-12 py-4 bg-gradient-to-r from-unity-signature to-unity-teal text-white font-bold text-lg rounded-xl hover:shadow-unity-glow transition-all duration-300 font-display"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Vehicles
                </motion.button>
              </motion.div>
            </div>
          </section>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default HowItWorks;
