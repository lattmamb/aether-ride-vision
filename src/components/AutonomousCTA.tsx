import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const AutonomousCTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/highlight-reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
            <span className="text-primary text-sm font-medium">Unity Fleet Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Explore Our Autonomous{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(var(--tesla-purple))]">
              Fleet Services
            </span>
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Embrace flexibility — unlock your potential today! Experience the next generation of sustainable transportation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-14 text-lg"
            >
              <a href="#contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white h-14 text-lg"
            >
              <Link to="/vehicles">
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutonomousCTA;
