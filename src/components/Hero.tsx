import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  { src: "/images/hero-slide-1.jpg", alt: "Autonomous EV cruising a coastal highway at sunset" },
  { src: "/images/hero-slide-2.jpg", alt: "Electric sedan charging at a futuristic station" },
  { src: "/images/hero-slide-3.jpg", alt: "Premium autonomous vehicle interior with city skyline" },
  { src: "/images/hero-slide-4.jpg", alt: "Unity Fleet autonomous vehicles in a modern plaza" },
  { src: "/images/hero-slide-5.jpg", alt: "Black electric sports sedan at speed in the rain" },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoplay();
  };

  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0F] text-white"
      aria-label="Unity Fleet hero"
    >
      {/* Full-bleed cinematic backdrop */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroSlides[currentSlide].src}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic darkening — deep bottom, softer top */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0F]/60 via-[#0A0A0F]/70 to-[#0A0A0F]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0F_85%)]" />

      {/* Ambient cyan glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[110vw] aspect-video z-[2] bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.10)_0%,transparent_70%)] blur-3xl" />

      {/* Vertical rail lines */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-px h-full z-[2] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-1/4 w-px h-full z-[2] bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Live status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00E0FF] opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E0FF] shadow-[0_0_8px_#00E0FF]" />
          </span>
          <span className="font-['DM_Sans'] text-[10px] md:text-xs uppercase tracking-[0.24em] font-medium text-white/70">
            Illinois EV Super-App · Now Live
          </span>
        </motion.div>

        {/* Headline — italic display + upright weight */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-['Space_Grotesk'] font-bold tracking-tighter leading-[0.9] mb-6 text-5xl sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          <span className="block italic bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Unity
          </span>
          <span className="block text-white tracking-[-0.04em]">Fleet</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="font-['DM_Sans'] font-light text-lg md:text-xl text-white/55 max-w-xl leading-relaxed mb-12"
        >
          Unified electric mobility for the Prairie State. Charging, rides, and autonomous‑ready infrastructure in one interface.
        </motion.p>

        {/* CTA — layered offset primary + bordered secondary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/vehicles"
            className="group relative inline-block px-10 py-4 bg-[#00E0FF] text-[#0A0A0F] font-['Space_Grotesk'] font-bold text-sm tracking-[0.2em] uppercase transition-colors hover:bg-white"
          >
            <span className="absolute inset-0 -z-10 bg-white translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
            Reserve a Vehicle
          </Link>
          <a
            href="#services"
            className="px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-['Space_Grotesk'] font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
          >
            The Ecosystem
          </a>
        </motion.div>

        {/* HUD readouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="relative mt-20 w-full max-w-4xl hidden md:block"
        >
          {/* Ground light sweep */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent shadow-[0_0_50px_10px_rgba(0,224,255,0.15)]" />

          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/5">
            <div className="text-left">
              <div className="font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.24em] uppercase text-[#00E0FF]">
                Fleet Uptime
              </div>
              <div className="w-24 h-px bg-[#00E0FF]/30 my-2" />
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">99.9%</div>
              <div className="font-['DM_Sans'] text-[10px] uppercase tracking-widest text-white/40 mt-1">
                Illinois grid
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.24em] uppercase text-[#00E0FF]">
                Active Vehicles
              </div>
              <div className="w-24 h-px bg-[#00E0FF]/30 my-2 mx-auto" />
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">76</div>
              <div className="font-['DM_Sans'] text-[10px] uppercase tracking-widest text-white/40 mt-1">
                across 12 hubs
              </div>
            </div>
            <div className="text-right">
              <div className="font-['Space_Grotesk'] text-[10px] font-medium tracking-[0.24em] uppercase text-[#00E0FF]">
                Carbon Offset
              </div>
              <div className="w-24 h-px bg-[#00E0FF]/30 my-2 ml-auto" />
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-white">1.2M lb</div>
              <div className="font-['DM_Sans'] text-[10px] uppercase tracking-widest text-white/40 mt-1">
                CO₂ avoided
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal slide indicators */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide ? "w-10 bg-[#00E0FF]" : "w-4 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
