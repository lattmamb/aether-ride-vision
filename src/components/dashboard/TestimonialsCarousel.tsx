
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  vehicle: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    avatar: '/placeholder.svg',
    rating: 5,
    text: 'Unity Fleet has transformed my daily commute. The seamless subscription model and incredible vehicle performance make this the future of transportation.',
    vehicle: 'Model Y'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    location: 'Austin, TX',
    avatar: '/placeholder.svg',
    rating: 5,
    text: 'Switching to electric with Unity Fleet was the best decision. Zero emissions, incredible tech, and the flexibility to upgrade as new models arrive.',
    vehicle: 'Cybertruck'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    location: 'Seattle, WA',
    avatar: '/placeholder.svg',
    rating: 5,
    text: 'The holographic dashboard and AI assistance make every drive feel like stepping into the future. Unity Fleet delivers on their promise.',
    vehicle: 'Model S'
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="relative h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 p-8"
        >
          <div className="h-full glass-card p-8 relative overflow-hidden">
            {/* Floating quote icon */}
            <motion.div
              className="absolute top-6 right-6 text-cyan-400/30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Quote className="h-12 w-12" />
            </motion.div>

            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-50" />
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="relative w-16 h-16 rounded-full border-2 border-cyan-400/50"
                  />
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-cyan-400 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>
              </div>

              {/* Testimonial text */}
              <motion.p
                className="text-white/90 text-lg leading-relaxed flex-grow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Vehicle tag */}
              <motion.div
                className="mt-4 inline-flex items-center gap-2 self-start"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30">
                  <span className="text-cyan-400 text-sm font-medium">
                    Driving: {testimonials[currentIndex].vehicle}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsCarousel;
