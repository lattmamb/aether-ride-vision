import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Music } from 'lucide-react';

/**
 * Recreation of the digital instrument cluster reference video.
 * Dark green cockpit display: battery/range top-left, large speed readout,
 * music widget, DRIVE indicator. Demo state simulates driving.
 */

export default function InstrumentCluster() {
  const [speed, setSpeed] = useState(0);
  const [driving, setDriving] = useState(false);
  const [battery] = useState(62);
  const [range] = useState(533);

  useEffect(() => {
    if (!driving) { setSpeed(0); return; }
    const id = setInterval(() => {
      setSpeed((s) => {
        const target = 62;
        const next = s + (target - s) * 0.08 + (Math.random() * 2 - 1);
        return Math.max(0, Math.round(next));
      });
    }, 120);
    return () => clearInterval(id);
  }, [driving]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 gap-8">
      {/* Cluster frame */}
      <div
        className="relative w-full max-w-4xl aspect-[16/9] bg-gradient-to-br from-[#0E3D2E] via-[#0A2E22] to-black border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.15)]"
        style={{ clipPath: 'polygon(6% 0, 94% 0, 100% 18%, 100% 82%, 94% 100%, 6% 100%, 0 82%, 0 18%)' }}
      >
        {/* Battery / range */}
        <div className="absolute top-[10%] left-[10%] text-white text-sm font-medium">
          {battery} <span className="text-white/60">%</span>&nbsp;&nbsp;{range} <span className="text-white/60">km</span>
        </div>

        {/* Car silhouette */}
        <motion.img
          src="/vehicles/model-3-white.jpg"
          alt="Vehicle"
          className="absolute left-[8%] bottom-[18%] w-2/5 rounded-xl opacity-90 mix-blend-screen"
          animate={{ y: driving ? [0, -3, 0] : 0 }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        />

        {/* Speed */}
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 flex items-end gap-4">
          <motion.span
            key={speed}
            className="text-white font-extralight leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
          >
            {speed}
          </motion.span>
          <div className="flex flex-col items-center gap-1 pb-4">
            <Zap className="h-6 w-6 text-emerald-400" />
            <span className="text-white/50 text-xs">km/h</span>
          </div>
        </div>

        {/* Music widget */}
        <div className="absolute left-[10%] top-[22%] flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-fuchsia-500 via-emerald-400 to-cyan-400 flex items-center justify-center">
            <Music className="h-5 w-5 text-black/70" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Dance</p>
            <p className="text-white/50 text-xs">Aurora Vibes</p>
          </div>
        </div>

        {/* Gear indicator */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
          <span className={`text-xs tracking-[0.5em] font-semibold ${driving ? 'text-emerald-400' : 'text-white/30'}`}>
            {driving ? 'D R I V E' : 'P A R K'}
          </span>
        </div>
      </div>

      <button
        onClick={() => setDriving((d) => !d)}
        className="px-8 py-2.5 rounded-full border border-emerald-400/60 text-emerald-300 text-sm hover:bg-emerald-400/10 transition-colors"
      >
        {driving ? 'Park' : 'Start driving'} (demo)
      </button>
    </div>
  );
}
