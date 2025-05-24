
import React, { useRef, useEffect } from 'react';
import { Zap, Globe, Shield, Battery } from 'lucide-react';
import { useCursorTracker } from '@/hooks/useCursorTracker';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const { smoothPosition } = useCursorTracker();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      cardRef.current.style.setProperty('--mouse-x', `${x}%`);
      cardRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition]);

  return (
    <div 
      ref={cardRef}
      className="modern-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="modern-card-content">
        <div className="modern-icon-wrapper">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/70 leading-relaxed mb-6">{description}</p>
        <div className="modern-button modern-button-small">
          <div className="modern-button-content">Learn More</div>
        </div>
      </div>
    </div>
  );
};

const ModernFeatures: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Performance",
      description: "Electric motors deliver immediate torque for lightning-fast acceleration and smooth, silent operation."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Access our worldwide network of charging stations and service centers for seamless travel anywhere."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Safety",
      description: "State-of-the-art safety features and autonomous driving technology keep you protected."
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Extended Range",
      description: "Advanced battery technology provides exceptional range and rapid charging capabilities."
    }
  ];

  return (
    <section className="py-32 modern-section bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Why Choose Electric?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the perfect fusion of cutting-edge technology, 
            sustainable energy, and unmatched performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
