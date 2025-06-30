
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';
import AutomotiveDashboardSection from '@/components/automotive/AutomotiveDashboardSection';
import LuxuryFeaturePanel from '@/components/automotive/LuxuryFeaturePanel';
import PremiumCTASection from '@/components/automotive/PremiumCTASection';
import PremiumCard from '@/components/ui/PremiumCard';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Intelligent Discovery",
      description: "Experience our AI-powered vehicle selection system with advanced filtering and personalized recommendations",
      details: ["Advanced AI matching algorithm", "Real-time availability scanning", "3D vehicle visualization"]
    },
    {
      step: 2,
      icon: Calendar,
      title: "Seamless Booking",
      description: "Book your premium Tesla through our streamlined reservation system with flexible plans",
      details: ["Instant booking confirmation", "Flexible subscription options", "Smart scheduling system"]
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Secure Processing",
      description: "Complete transactions through our enterprise-grade security infrastructure",
      details: ["Bank-level encryption", "Multiple payment methods", "Transparent pricing model"]
    },
    {
      step: 4,
      icon: Car,
      title: "Premium Access",
      description: "Receive your Tesla through our white-glove delivery service or premium pickup locations",
      details: ["Contactless key exchange", "Mobile app integration", "24/7 vehicle support"]
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Intelligent Control",
      description: "Complete vehicle management through our advanced mobile platform"
    },
    {
      icon: DollarSign,
      title: "Revenue Generation",
      description: "Maximize earnings through integrated ride-sharing partnerships"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time insights and optimization recommendations"
    },
    {
      icon: MapPin,
      title: "Charging Network",
      description: "Access to premium charging infrastructure nationwide"
    },
    {
      icon: Users,
      title: "Elite Community",
      description: "Connect with Tesla enthusiasts and industry professionals"
    },
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Premium insurance and roadside assistance included"
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
        {/* Premium Hero Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          {/* Luxury Brand Badge */}
          <PremiumCard variant="luxury" className="mb-8 px-6 py-3 inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-unity-champagne" />
            <span className="font-display font-semibold gradient-luxury-text">Premium Process</span>
          </PremiumCard>

          <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-6">
            Automotive Excellence
            <br />
            <span className="gradient-purple-text">Redefined</span>
          </h1>
          <p className="font-body text-xl text-unity-platinum/80 max-w-3xl mx-auto leading-relaxed">
            Experience the future of luxury electric vehicle access through our 
            precision-engineered process, designed for discerning drivers.
          </p>
        </motion.div>

        {/* Automotive Dashboard Steps Section */}
        <motion.div className="mb-24" variants={itemVariants}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold gradient-luxury-text mb-4">
              Precision-Engineered Process
            </h2>
            <p className="font-body text-unity-platinum/70 max-w-2xl mx-auto">
              Four seamlessly integrated phases deliver automotive excellence
            </p>
          </div>
          <AutomotiveDashboardSection steps={steps} />
        </motion.div>

        {/* Luxury Features Panel */}
        <motion.div className="mb-24" variants={itemVariants}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold gradient-accent-text mb-4">
              Luxury Features Suite
            </h2>
            <p className="font-body text-unity-platinum/70 max-w-2xl mx-auto">
              Advanced capabilities designed for the modern electric lifestyle
            </p>
          </div>
          <LuxuryFeaturePanel features={features} />
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div variants={itemVariants}>
          <PremiumCTASection />
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default HowItWorks;
