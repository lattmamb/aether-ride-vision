
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  CreditCard, 
  Car, 
  MapPin, 
  Smartphone,
  DollarSign,
  BarChart3,
  Users,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Browse & Discover",
      description: "Explore our Tesla fleet with smart filters and AI-powered recommendations",
      details: ["Filter by model, price, and availability", "Get personalized vehicle suggestions", "View detailed specs and 3D previews"]
    },
    {
      step: 2,
      icon: Calendar,
      title: "Book Your Tesla",
      description: "Select dates, choose subscription plans, and customize your experience",
      details: ["Flexible booking options", "Multiple subscription plans", "Instant confirmation"]
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Secure Payment",
      description: "Complete your booking with our secure, encrypted payment system",
      details: ["Multiple payment methods", "Flexible payment options", "Transparent pricing"]
    },
    {
      step: 4,
      icon: Car,
      title: "Vehicle Access",
      description: "Get your Tesla delivered or pick it up from convenient locations",
      details: ["Contactless pickup", "Mobile app integration", "Remote vehicle access"]
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Full vehicle control from your smartphone"
    },
    {
      icon: DollarSign,
      title: "Earn Money",
      description: "Use your Tesla for Uber, DoorDash, and Lyft"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Track earnings and optimize your usage"
    },
    {
      icon: MapPin,
      title: "Charging Network",
      description: "Access to extensive charging infrastructure"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other Tesla enthusiasts"
    },
    {
      icon: Shield,
      title: "Insurance Included",
      description: "Comprehensive coverage for peace of mind"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <MainLayout>
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            How Unity Fleet Works
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Get behind the wheel of a Tesla in just a few simple steps. 
            Our streamlined process makes electric vehicle access effortless.
          </p>
        </motion.div>

        {/* Steps Section */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-12 gradient-purple-text">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <Card className="glass-card gradient-border-subtle p-6 text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full gradient-bg-primary flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 gradient-accent-text">{step.title}</h3>
                  <p className="text-white/70 mb-4">{step.description}</p>
                  <ul className="text-sm text-white/60 text-left space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-12 gradient-purple-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="glass-card gradient-border-subtle p-6 text-center hover:bg-white/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 gradient-accent-text">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center glass-card gradient-border-flow p-12 rounded-xl relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Go Electric?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of drivers who've made the switch to sustainable, 
              intelligent transportation with Unity Fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gradient-bg-primary hover:gradient-bg-secondary text-white px-8"
                onClick={() => navigate('/vehicles')}
              >
                Browse Vehicles
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-glass-border bg-glass hover:bg-glass-highlight px-8"
                onClick={() => navigate('/pricing')}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default HowItWorks;
