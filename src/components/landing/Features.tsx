
import React from "react";
import { Zap, Globe, Shield, Battery } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-6 rounded-xl hover:bg-glass-highlight/20 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-tesla-blue/20 text-tesla-blue group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-tesla-dark-80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Why Choose Electric?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the future of transportation with cutting-edge technology, 
            sustainable energy, and unmatched performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Instant Performance"
            description="Electric motors deliver immediate torque for lightning-fast acceleration and smooth, silent operation."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Global Network"
            description="Access our worldwide network of charging stations and service centers for seamless travel anywhere."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Advanced Safety"
            description="State-of-the-art safety features and autonomous driving technology keep you protected on every journey."
          />
          <FeatureCard
            icon={<Battery className="h-6 w-6" />}
            title="Extended Range"
            description="Advanced battery technology provides exceptional range and rapid charging for maximum convenience."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
