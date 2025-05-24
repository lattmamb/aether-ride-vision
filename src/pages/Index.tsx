
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import { ArrowRight, Zap, Shield, Leaf, Battery, Globe, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdvancedCursor } from '@/hooks/useAdvancedCursor';
import NeumorphicButton from '@/components/neumorphic/NeumorphicButton';
import NeumorphicCard from '@/components/neumorphic/NeumorphicCard';
import NeumorphicInput from '@/components/neumorphic/NeumorphicInput';
import NeumorphicBadge from '@/components/neumorphic/NeumorphicBadge';
import NeumorphicToggle from '@/components/neumorphic/NeumorphicToggle';

const Index = () => {
  const { smoothPosition, velocity } = useAdvancedCursor();

  // Section refs for cursor tracking
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = [heroRef, featuresRef, galleryRef, ctaRef];
    
    sections.forEach(ref => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
        const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
        
        ref.current.style.setProperty('--mouse-x', `${Math.max(0, Math.min(100, x))}%`);
        ref.current.style.setProperty('--mouse-y', `${Math.max(0, Math.min(100, y))}%`);
        ref.current.style.setProperty('--velocity', `${Math.min(Math.abs(velocity.x) + Math.abs(velocity.y), 1)}`);
      }
    });
  }, [smoothPosition, velocity]);

  return (
    <MainLayout>
      <div className="modern-landing overflow-hidden bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative modern-section overflow-hidden py-20"
          style={{
            background: `
              radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(155, 135, 245, calc(0.05 + var(--velocity, 0) * 0.03)), 
                transparent 70%),
              linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)
            `
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Hero badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <NeumorphicBadge variant="info">
                  <Zap className="h-4 w-4" />
                  Instant Power
                </NeumorphicBadge>
                <NeumorphicBadge variant="success">
                  <Leaf className="h-4 w-4" />
                  Zero Emissions
                </NeumorphicBadge>
                <NeumorphicBadge variant="default">
                  <Shield className="h-4 w-4" />
                  Advanced Safety
                </NeumorphicBadge>
              </div>

              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Electric
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Revolution
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the future of mobility with our premium electric fleet. 
                Zero compromises, infinite possibilities.
              </motion.p>
              
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <NeumorphicInput 
                  placeholder="Search our electric fleet..." 
                  variant="search"
                  onSubmit={(value) => console.log('Search:', value)}
                />
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/vehicles">
                  <NeumorphicButton variant="primary" size="large">
                    Explore Fleet
                    <ArrowRight className="h-5 w-5" />
                  </NeumorphicButton>
                </Link>
                
                <Link to="/about">
                  <NeumorphicButton variant="soft" size="large">
                    Learn More
                  </NeumorphicButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          ref={featuresRef}
          className="py-32 modern-section"
          style={{
            background: `
              radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(59, 130, 246, 0.03), 
                transparent 70%),
              linear-gradient(180deg, #e8e8e8 0%, #f0f0f0 100%)
            `
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
                Why Choose Electric?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the perfect fusion of cutting-edge technology, 
                sustainable energy, and unmatched performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Instant Performance",
                  description: "Electric motors deliver immediate torque for lightning-fast acceleration and smooth operation."
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Global Network",
                  description: "Access our worldwide network of charging stations and service centers."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Advanced Safety",
                  description: "State-of-the-art safety features and autonomous driving technology."
                },
                {
                  icon: <Battery className="h-8 w-8" />,
                  title: "Extended Range",
                  description: "Advanced battery technology provides exceptional range and rapid charging."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <NeumorphicCard className="p-8 h-full">
                    <div className="text-purple-500 mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    <NeumorphicButton variant="soft" size="small">
                      Learn More
                    </NeumorphicButton>
                  </NeumorphicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Gallery Section */}
        <section 
          ref={galleryRef}
          className="py-32 modern-section"
          style={{
            background: `
              radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(34, 197, 94, 0.03), 
                transparent 70%),
              linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%)
            `
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-800">
                Premium Fleet
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Choose from our collection of cutting-edge electric vehicles. 
                Each model offers unmatched performance and luxury.
              </p>
              <Link to="/vehicles">
                <NeumorphicButton variant="secondary" size="large">
                  View All Vehicles
                  <ArrowRight className="h-5 w-5" />
                </NeumorphicButton>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  model: "Model S",
                  type: "Luxury Sedan",
                  price: "$150",
                  range: "405 mi",
                  acceleration: "1.99s",
                  topSpeed: "200 mph"
                },
                {
                  model: "Model 3",
                  type: "Performance Sedan", 
                  price: "$120",
                  range: "358 mi",
                  acceleration: "3.1s", 
                  topSpeed: "162 mph"
                },
                {
                  model: "Model X",
                  type: "Luxury SUV",
                  price: "$180", 
                  range: "348 mi",
                  acceleration: "2.5s",
                  topSpeed: "163 mph"
                }
              ].map((vehicle, index) => (
                <motion.div
                  key={vehicle.model}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <NeumorphicCard className="overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-lg font-medium">
                      {vehicle.model} Preview
                    </div>
                    
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{vehicle.model}</h3>
                          <p className="text-gray-600 text-sm uppercase tracking-wide">{vehicle.type}</p>
                        </div>
                        <NeumorphicBadge variant="success" size="small">
                          Available
                        </NeumorphicBadge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                          { icon: Battery, label: "Range", value: vehicle.range, color: "text-blue-500" },
                          { icon: Zap, label: "0-60 mph", value: vehicle.acceleration, color: "text-purple-500" },
                          { icon: Timer, label: "Top Speed", value: vehicle.topSpeed, color: "text-green-500" }
                        ].map(({ icon: Icon, label, value, color }) => (
                          <div key={label} className="text-center">
                            <Icon className={`h-5 w-5 mx-auto mb-2 ${color}`} />
                            <p className="text-xs text-gray-500 mb-1">{label}</p>
                            <p className="text-sm font-semibold text-gray-800">{value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <span className="text-3xl font-bold text-gray-800">{vehicle.price}</span>
                          <span className="text-gray-600 text-sm ml-1">per day</span>
                        </div>
                      </div>
                      
                      <NeumorphicButton variant="primary" className="w-full">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </NeumorphicButton>
                    </div>
                  </NeumorphicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className="py-32 modern-section"
          style={{
            background: `
              radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(155, 135, 245, calc(0.08 + var(--velocity, 0) * 0.05)), 
                rgba(10, 132, 255, calc(0.05 + var(--velocity, 0) * 0.03)) 50%,
                transparent 70%),
              linear-gradient(135deg, #e8e8e8 0%, #f0f0f0 100%)
            `
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <NeumorphicCard className="max-w-4xl mx-auto p-12">
              <div className="mb-8">
                <Zap className="h-16 w-16 text-purple-500 mx-auto mb-6" />
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
                  Ready to Drive Electric?
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join the electric revolution today. Experience the future of transportation 
                  with our premium fleet of electric vehicles.
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <NeumorphicToggle 
                  label="Enable notifications" 
                  size="large"
                  onChange={(checked) => console.log('Notifications:', checked)}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/vehicles">
                  <NeumorphicButton variant="primary" size="large">
                    Start Your Journey
                    <ArrowRight className="h-6 w-6" />
                  </NeumorphicButton>
                </Link>
                
                <Link to="/pricing">
                  <NeumorphicButton variant="secondary" size="large">
                    View Pricing
                  </NeumorphicButton>
                </Link>
              </div>
            </NeumorphicCard>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
