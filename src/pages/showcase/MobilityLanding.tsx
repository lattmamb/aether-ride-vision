import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Recreation of the dark green "discover new mobility" landing hero
 * from the reference videos. Oversized thin lowercase headline,
 * green square menu button, car visual, mission copy.
 */

export default function MobilityLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#02120C] flex items-center justify-center p-4 md:p-10">
      <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/10] rounded-sm overflow-hidden bg-gradient-to-b from-[#0B5C40] via-[#06382A] to-black shadow-2xl">
        {/* Brand */}
        <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[#2EE88B] text-xs font-bold tracking-[0.5em]">
          A E T H E R
        </p>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="absolute top-5 right-5 w-12 h-12 bg-[#2EE88B] flex flex-col items-center justify-center gap-1 hover:bg-[#4DF0A0] transition-colors"
        >
          <span className="w-5 h-px bg-[#02120C]" />
          <span className="w-5 h-px bg-[#02120C]" />
          <span className="w-5 h-px bg-[#02120C]" />
        </button>

        {/* Menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 bg-[#02120C]/95 backdrop-blur flex flex-col items-center justify-center gap-6"
            >
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="absolute top-5 right-5 w-12 h-12 bg-[#2EE88B] flex items-center justify-center">
                <X className="h-5 w-5 text-[#02120C]" />
              </button>
              {[
                { label: 'Fleet', to: '/vehicles' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Locations', to: '/locations' },
                { label: 'Dashboard', to: '/dashboard' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl font-extralight hover:text-[#2EE88B] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Headline + car */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-extralight leading-[0.95] text-center"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            discover
          </motion.h1>
          <div className="relative flex items-center justify-center w-full">
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-white font-extralight"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
            >
              new
            </motion.span>
            <motion.img
              src="/vehicles/model-3-white.jpg"
              alt="Electric vehicle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="w-48 md:w-72 rounded-xl mix-blend-screen mx-4"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white font-extralight leading-[0.95] text-center"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            mobility
          </motion.h1>
        </div>

        {/* Mission copy */}
        <p className="absolute bottom-16 right-8 md:right-14 max-w-xs text-white/70 text-sm leading-relaxed">
          We care, we share, we believe. We develop, market, and help operate
          customized mobility solutions in cities across the globe.
        </p>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </div>
    </div>
  );
}
