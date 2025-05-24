
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';
import { useCursorTracker } from '@/hooks/useCursorTracker';

const ModernHero: React.FC = () => {
  const { smoothPosition } = useCursorTracker();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden modern-section"
      style={{
        background: `
          radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(155, 135, 245, 0.15), 
            transparent 40%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
        `
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, #9b87f5, transparent 70%)',
            left: `calc(var(--mouse-x, 50%) - 12rem)`,
            top: `calc(var(--mouse-y, 50%) - 12rem)`,
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Electric
            </span>
            <span className="block bg-gradient-to-r from-[#9b87f5] to-[#0A84FF] bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of mobility with our premium electric fleet. 
            Zero compromises, infinite possibilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Zap, label: "Instant Power", color: "#0A84FF" },
              { icon: Leaf, label: "Zero Emissions", color: "#34C759" },
              { icon: Shield, label: "Advanced Safety", color: "#9b87f5" }
            ].map(({ icon: Icon, label, color }) => (
              <div 
                key={label}
                className="modern-badge"
                style={{ '--accent-color': color } as React.CSSProperties}
              >
                <Icon className="h-5 w-5" style={{ color }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/vehicles" className="modern-button modern-button-primary">
              <div className="modern-button-content">
                Explore Fleet
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </Link>
            
            <Link to="/about" className="modern-button modern-button-secondary">
              <div className="modern-button-content">
                Learn More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
