
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Award, Users, Shield, Leaf, Gauge, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 mt-14 md:mt-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Unity Fleet</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redefining vehicle ownership through innovative subscription services and sustainable transportation solutions.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2023, Unity Fleet emerged from a simple vision: to transform the way people 
              access and experience electric vehicles. We recognized that traditional ownership and 
              leasing models weren't aligned with the rapidly evolving EV market and consumer needs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of automotive enthusiasts, tech innovators, and sustainability advocates came 
              together to create a flexible subscription service that puts customers in control of their 
              mobility choices while accelerating the transition to sustainable transportation.
            </p>
            <Button 
              onClick={() => navigate('/vehicles')}
            >
              Explore Our Fleet
            </Button>
          </div>
          <div className="glass-card p-0 overflow-hidden h-[300px] md:h-[400px] rounded-2xl relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/showcase-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="glass-card p-8 md:p-12 mb-24 text-center rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            "To accelerate the world's transition to sustainable transportation by making electric 
            vehicles accessible to everyone through flexible, hassle-free subscription services."
          </p>
        </div>
        
        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Leaf, title: 'Sustainability', desc: "We're committed to reducing carbon emissions and promoting eco-friendly transportation options for a greener future." },
              { icon: Clock, title: 'Flexibility', desc: "Our subscription model adapts to your changing needs, giving you the freedom to switch vehicles or pause your subscription when needed." },
              { icon: Shield, title: 'Transparency', desc: "We believe in clear, straightforward pricing with no hidden fees or long-term commitments that lock you in." },
            ].map((item) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center rounded-2xl"
              >
                <div className="rounded-full bg-primary/20 p-4 inline-flex mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Unity Fleet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: Award, title: 'Premium Vehicle Selection', desc: 'Access to the latest Tesla models, regularly maintained and updated to provide you with the best electric driving experience.' },
              { icon: Users, title: 'Exceptional Customer Service', desc: 'Our dedicated team is available 24/7 to assist with any questions or issues you may encounter during your subscription.' },
              { icon: Gauge, title: 'Convenient & Fast', desc: 'From application to delivery, our streamlined process gets you behind the wheel of your new Tesla in as little as 24 hours.' },
              { icon: Shield, title: 'All-Inclusive Subscriptions', desc: 'Insurance, maintenance, roadside assistance, and charging credits all bundled into one simple monthly payment.' },
            ].map((item) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="rounded-full bg-primary/20 p-2 flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="glass-card p-8 text-center rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Future of Mobility?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the freedom of electric vehicle subscription with Unity Fleet. 
            No long-term commitment, no hidden fees, just pure driving pleasure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigate('/vehicles')}>
              Browse Vehicles
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
