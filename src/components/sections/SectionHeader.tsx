
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-20 ${className}`}>
      <motion.h2 
        className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
