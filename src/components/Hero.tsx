
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  { src: "/images/hero-slide-1.jpg", alt: "Autonomous vehicle close-up" },
  { src: "/images/hero-slide-2.png", alt: "Unity Fleet vehicle" },
  { src: "/images/hero-slide-3.png", alt: "Fleet technology" },
  { src: "/images/hero-slide-4.jpg", alt: "Electric vehicle charging" },
  { src: "/images/hero-slide-5.jpg", alt: "Autonomous driving" },
  { src: "/images/hero-slide-6.jpg", alt: "Vehicle interior" },
  { src: "/images/hero-slide-7.jpg", alt: "Fleet on the road" },
  { src: "/images/hero-slide-8.jpg", alt: "Premium EV experience" },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startAutoplay();
  };

  const goNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startAutoplay();
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startAutoplay();
  };

  // Preload images
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fullscreen Image Carousel */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroSlides[currentSlide].src}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 z-[1]" />

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/15 backdrop-blur-md"
          >
            <span className="text-primary text-sm font-semibold tracking-wide">Discover Unity Fleet</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white relative z-20 leading-[0.95]"
          >
            Your Gateway to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(var(--tesla-purple))]">
              Autonomous Travel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-2xl md:text-3xl italic text-white/50 mb-8 font-light"
          >
            Your Ride of The Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-lg rounded-xl"
            >
              <Link to="/vehicles">View Services</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white h-14 text-lg rounded-xl"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/60" />
      </div>
    </div>
  );
};

export default Hero;
