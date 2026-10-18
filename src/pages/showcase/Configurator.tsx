import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

/**
 * Recreation of the "Customize your car" configurator reference video.
 * Light theme, split layout: vehicle stage left, white control panel right.
 * All state is local demo state.
 */

const BASE_COLORS = [
  { name: 'Vibrant red', hex: '#C8102E', filter: 'none' },
  { name: 'Pearl white', hex: '#E8E8E8', filter: 'grayscale(1) brightness(1.35)' },
  { name: 'Solid black', hex: '#111111', filter: 'grayscale(1) brightness(0.55)' },
];

const RIM_COLORS = [
  { name: 'Dark titanium', hex: '#2B2B2B' },
  { name: 'Graphite', hex: '#4A4A4A' },
  { name: 'Silver', hex: '#9A9A9A' },
  { name: 'Steel blue', hex: '#5A6B7D' },
  { name: 'Ice', hex: '#C9D2DA' },
];

const STEPS = ['Intro', 'Base colour', 'Rim colour', 'Summary'];

export default function Configurator() {
  const [step, setStep] = useState(0);
  const [baseColor, setBaseColor] = useState(0);
  const [rimColor, setRimColor] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const restart = () => { setStep(0); setBaseColor(0); setRimColor(0); };

  return (
    <div className="min-h-screen bg-[#DDE3E8] flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.4em] text-[#8A94A6] font-semibold mb-6 pl-2">UI CONCEPT</p>

        <div className="flex flex-col md:flex-row shadow-2xl shadow-slate-400/40 rounded-sm overflow-hidden">
          {/* Vehicle stage */}
          <div className="relative flex-1 bg-gradient-to-b from-[#C9B8C4] to-[#D8CCD3] min-h-[320px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
            <motion.img
              key={baseColor}
              src="/vehicles/model-3-red.jpg"
              alt="Vehicle preview"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-4/5 max-w-md object-cover rounded-2xl shadow-2xl"
              style={{ filter: BASE_COLORS[baseColor].filter }}
            />
            {/* Progress footer */}
            <div className="absolute bottom-0 inset-x-0 bg-[#E5D9E0]/90 backdrop-blur px-6 py-4 flex items-center gap-4">
              <span className="text-[#C8102E] font-bold text-sm w-8">{String(step + 1).padStart(2, '0')}</span>
              <div className="flex-1 flex gap-2">
                {STEPS.map((_, i) => (
                  <div key={i} className="h-[3px] flex-1 rounded-full bg-[#C4B6C0] overflow-hidden">
                    <motion.div
                      className="h-full bg-[#C8102E]"
                      initial={false}
                      animate={{ width: i <= step ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-[#6B5F68] text-sm">Exterior</span>
            </div>
          </div>

          {/* Control panel */}
          <div className="w-full md:w-[380px] bg-white flex flex-col p-8 md:p-10 relative">
            <button aria-label="Menu" className="absolute top-6 right-6 text-[#333] hover:opacity-60 transition-opacity">
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <div className="flex-1 flex flex-col justify-center min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  {step === 0 && (
                    <h1 className="text-4xl md:text-5xl font-extralight text-[#1A1A1A] leading-tight text-right">
                      Customize<br />your car
                    </h1>
                  )}
                  {step === 1 && (
                    <div className="text-right">
                      <h2 className="text-4xl md:text-5xl font-extralight text-[#1A1A1A] leading-tight mb-10">
                        Base<br />colour
                      </h2>
                      <p className="text-sm text-[#555] mb-3">{BASE_COLORS[baseColor].name}</p>
                      <div className="flex gap-3 justify-end">
                        {BASE_COLORS.map((c, i) => (
                          <button
                            key={c.name}
                            aria-label={c.name}
                            onClick={() => setBaseColor(i)}
                            className={`w-7 h-7 rounded-full transition-transform hover:scale-110 ${i === baseColor ? 'ring-2 ring-offset-2 ring-[#C8102E]' : ''}`}
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="text-right">
                      <h2 className="text-4xl md:text-5xl font-extralight text-[#1A1A1A] leading-tight mb-10">
                        Rim<br />colour
                      </h2>
                      <p className="text-sm text-[#555] mb-3">{RIM_COLORS[rimColor].name}</p>
                      <div className="flex gap-3 justify-end">
                        {RIM_COLORS.map((c, i) => (
                          <button
                            key={c.name}
                            aria-label={c.name}
                            onClick={() => setRimColor(i)}
                            className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${i === rimColor ? 'ring-2 ring-offset-2 ring-[#1A1A1A]' : ''}`}
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="text-right">
                      <h2 className="text-4xl md:text-5xl font-extralight text-[#1A1A1A] leading-tight mb-8">
                        Your<br />build
                      </h2>
                      <p className="text-sm text-[#555]">Base: {BASE_COLORS[baseColor].name}</p>
                      <p className="text-sm text-[#555]">Rims: {RIM_COLORS[rimColor].name}</p>
                      <p className="text-xs text-[#999] mt-4">Demo configuration, local state only</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-end pt-6">
              {step < STEPS.length - 1 ? (
                <button
                  onClick={next}
                  className="px-10 py-2.5 rounded-full border border-[#1A1A1A] text-[#1A1A1A] text-sm hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  {step === 0 ? 'Start' : 'Next'}
                </button>
              ) : (
                <button
                  onClick={restart}
                  className="px-10 py-2.5 rounded-full border border-[#1A1A1A] text-[#1A1A1A] text-sm hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  Restart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
