
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { useCursorTracker } from '@/hooks/useCursorTracker';

const ModernCTA: React.FC = () => {
  const { smoothPosition } = useCursorTracker();
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      const rect = ctaRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      ctaRef.current.style.setProperty('--mouse-x', `${x}%`);
      ctaRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition]);

  return (
    <section 
      ref={ctaRef}
      className="py-32 modern-section relative overflow-hidden"
      style={{
        background: `
          radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(155, 135, 245, 0.2), 
            rgba(10, 132, 255, 0.1) 50%,
            transparent 70%),
          linear-gradient(135deg, #000 0%, #1a1a1a 100%)
        `
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Zap className="h-16 w-16 text-[#9b87f5] mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            Ready to Drive Electric?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join the electric revolution today. Experience the future of transportation 
            with our premium fleet of electric vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/vehicles" className="modern-button modern-button-primary modern-button-large">
              <div className="modern-button-content">
                Start Your Journey
                <ArrowRight className="h-6 w-6 ml-3" />
              </div>
            </Link>
            
            <Link to="/pricing" className="modern-button modern-button-secondary modern-button-large">
              <div className="modern-button-content">
                View Pricing
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
