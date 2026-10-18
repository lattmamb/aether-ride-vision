import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Gauge, MonitorSmartphone, Sparkles } from 'lucide-react';

const ITEMS = [
  {
    to: '/showcase/configurator',
    icon: Car,
    title: 'Car Configurator',
    desc: 'Light split-panel customization flow with color swatches and step progress.',
  },
  {
    to: '/showcase/cluster',
    icon: Gauge,
    title: 'Instrument Cluster',
    desc: 'Dark green cockpit display with live speed, battery, and music widget.',
  },
  {
    to: '/showcase/cockpit',
    icon: MonitorSmartphone,
    title: 'Cockpit Display',
    desc: 'In-car infotainment with notifications, keyboard, map, and climate.',
  },
  {
    to: '/showcase/mobility',
    icon: Sparkles,
    title: 'Mobility Landing',
    desc: 'Dark green editorial hero with oversized thin typography.',
  },
];

export default function ShowcaseIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] text-muted-foreground mb-2">REFERENCE RECREATIONS</p>
        <h1 className="text-4xl font-bold mb-2">Design Showcase</h1>
        <p className="text-muted-foreground mb-10">
          Interfaces recreated from your reference videos. All controls run on local demo state.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.to}
                className="block p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-colors group"
              >
                <item.icon className="h-6 w-6 text-primary mb-4" />
                <h2 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
