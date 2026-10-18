import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Mic, Bluetooth, Wifi, Grid3X3, Pause, Heart,
  Plus, Minus, Delete, CornerDownLeft, Calendar, Flag, Wrench, Ticket
} from 'lucide-react';

/**
 * Recreation of the in-car infotainment reference video.
 * Dark portrait display: notification cards, search with on-screen keyboard,
 * map with route, climate controls, music bar. All local demo state.
 */

const NOTIFICATIONS = [
  { icon: Calendar, color: 'bg-red-500', title: 'Kick-off Meeting in Starbucks', sub: '2 MILES AWAY' },
  { icon: Flag, color: 'bg-violet-500', title: 'Bay area street racing event in 2 hour', sub: '2 MILES AWAY' },
  { icon: Wrench, color: 'bg-orange-500', title: 'Vehicle service is in 2 days. Add this event to calendar?', sub: '' },
  { icon: Ticket, color: 'bg-blue-500', title: 'Nils Frahm is in 5 days. Buy tickets for you?', sub: '' },
];

const KEY_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

export default function CockpitDisplay() {
  const [query, setQuery] = useState('');
  const [temp, setTemp] = useState(19);
  const [dismissed, setDismissed] = useState<number[]>([]);

  const visibleNotifications = NOTIFICATIONS.filter((_, i) => !dismissed.includes(i)).slice(0, 3);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0B0E14] rounded-3xl border border-white/10 overflow-hidden flex flex-col" style={{ minHeight: '85vh' }}>
        {/* Status / notifications */}
        <div className="p-3 space-y-2">
          <div className="flex items-center gap-2 overflow-x-auto">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
              <span className="text-[8px] text-white/70 text-center leading-tight">AVAIL<br />ABLE</span>
            </div>
            {visibleNotifications.map((n, i) => (
              <motion.button
                key={n.title}
                layout
                onClick={() => setDismissed((d) => [...d, NOTIFICATIONS.indexOf(n)])}
                className="flex-shrink-0 flex items-center gap-2 bg-[#161B26] rounded-xl px-3 py-2 max-w-[180px] text-left hover:bg-[#1D2432] transition-colors"
                title="Tap to dismiss (demo)"
              >
                <span className={`w-7 h-7 rounded-full ${n.color} flex items-center justify-center flex-shrink-0`}>
                  <n.icon className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-[10px] text-white/80 leading-snug line-clamp-2">{n.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2 bg-[#161B26] rounded-xl px-3 py-2.5">
            <Search className="h-4 w-4 text-white/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search anything..."
              className="bg-transparent flex-1 text-sm text-white placeholder:text-white/40 outline-none"
            />
            <div className="flex items-center gap-2 text-white/40">
              <Mic className="h-3.5 w-3.5" />
              <span className="text-[9px] border border-white/30 rounded px-1">3G</span>
              <Bluetooth className="h-3.5 w-3.5" />
              <Wifi className="h-3.5 w-3.5" />
              <span className="text-xs text-white/70">10:47</span>
              <Grid3X3 className="h-4 w-4 text-white/70" />
            </div>
          </div>
        </div>

        {/* Map area */}
        <div className="relative flex-1 mx-3 rounded-2xl overflow-hidden bg-[#0D1420] border border-white/5">
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-60">
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="300" stroke="#1E2A3A" strokeWidth="1" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} stroke="#1E2A3A" strokeWidth="1" />
            ))}
            <path d="M40 260 Q80 200 120 180 T220 120 T340 60" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="40" cy="260" r="6" fill="#fff" />
            <circle cx="340" cy="60" r="7" fill="#10B981" />
          </svg>
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur rounded-lg px-3 py-1.5">
            <p className="text-white text-xs">Keep left at the fork to continue</p>
          </div>
          <div className="absolute top-3 right-3 text-right">
            <p className="text-white text-sm font-semibold">10,3<span className="text-[10px] text-white/60"> KM</span></p>
            <p className="text-white/50 text-[10px]">Distance to Starbucks</p>
          </div>
          {query && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur rounded-lg px-3 py-2">
              <p className="text-white/70 text-xs">No results for "{query}" (demo map)</p>
            </div>
          )}
        </div>

        {/* Keyboard */}
        <div className="p-3 space-y-1.5">
          {KEY_ROWS.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-1.5">
              {row.map((k) => (
                <button
                  key={k}
                  onClick={() => setQuery((q) => q + k)}
                  className={`flex-1 max-w-9 h-10 rounded-md text-sm font-medium transition-colors ${
                    query.endsWith(k) && query.length > 0 && query[query.length - 1] === k
                      ? 'bg-[#2E5CFF] text-white'
                      : 'bg-[#1A2130] text-white/80 hover:bg-[#232C40]'
                  }`}
                >
                  {k}
                </button>
              ))}
              {ri === 2 && (
                <>
                  <button onClick={() => setQuery((q) => q.slice(0, -1))} aria-label="Delete" className="flex-1 max-w-9 h-10 rounded-md bg-[#1A2130] text-white/80 hover:bg-[#232C40] flex items-center justify-center">
                    <Delete className="h-4 w-4" />
                  </button>
                  <button aria-label="Enter" className="flex-1 max-w-9 h-10 rounded-md bg-[#2E5CFF] text-white flex items-center justify-center">
                    <CornerDownLeft className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Climate + music bar */}
        <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setTemp((t) => t - 1)} aria-label="Cooler" className="w-8 h-8 rounded-full bg-[#1A2130] flex items-center justify-center text-white/80 hover:bg-[#232C40]">
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-white text-lg font-light w-12 text-center">{temp}°</span>
            <button onClick={() => setTemp((t) => t + 1)} aria-label="Warmer" className="w-8 h-8 rounded-full bg-[#1A2130] flex items-center justify-center text-white/80 hover:bg-[#232C40]">
              <Plus className="h-4 w-4" />
            </button>
            <span className="text-white/40 text-xs ml-1">Climate control</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-white text-xs">Jeison Naimain</p>
              <p className="text-white/40 text-[10px]">Can't Deny</p>
            </div>
            <button aria-label="Pause" className="w-9 h-9 rounded-full bg-[#1A2130] flex items-center justify-center text-white hover:bg-[#232C40]">
              <Pause className="h-4 w-4" />
            </button>
            <Heart className="h-4 w-4 text-white/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
