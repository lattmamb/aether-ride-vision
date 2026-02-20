import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Building2, Users } from 'lucide-react';

const services = [
  {
    title: 'Ridesharing',
    description: 'Experience seamless travel with our fully autonomous ridesharing service. Safe, efficient, and eco-friendly transportation at your fingertips.',
    image: '/images/ridesharing-bg.jpg',
    link: '/vehicles',
    icon: Car,
  },
  {
    title: 'Vehicle Rentals',
    description: 'Rent the latest Tesla models easily through flexible plans. Short-term or long-term, designed around your lifestyle.',
    image: '/images/rentals-bg.jpg',
    link: '/vehicles',
    icon: Building2,
  },
  {
    title: 'Employee Benefits Package',
    description: 'Enhance employee satisfaction with on-demand rides and sustainable transportation solutions. Attract top talent with premium EV perks.',
    image: '/images/benefits-bg.jpg',
    link: '/about',
    icon: Users,
  },
];

const ServicesShowcase: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
            <span className="text-primary text-sm font-medium">Discover Unity Fleet</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Your Gateway to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(var(--tesla-purple))]">
              Autonomous Travel
            </span>
          </h2>
          <p className="text-xl italic text-muted-foreground font-light">
            Your Ride of The Future
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link to={service.link} className="block group">
                <div className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />
                  
                  {/* Glass border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
