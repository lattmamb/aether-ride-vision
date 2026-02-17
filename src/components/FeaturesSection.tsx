
import React from 'react';
import { Zap, Leaf, Shield } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:bg-glass-highlight/10 group">
      <div className="mb-4 bg-glass-highlight/10 inline-block p-3 rounded-lg text-tesla-blue group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why Rent a Tesla?</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the future of driving with zero emissions, industry-leading edge technology, and
            unmatched performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Instant Acceleration"
            description="Experience 0 to 60 mph in as little as 1.99 seconds. Electric motors deliver instant torque for unparalleled acceleration."
          />
          <FeatureCard
            icon={<Leaf className="h-8 w-8" />}
            title="Zero Emissions"
            description="Help reduce air pollution and minimize your carbon footprint with zero-emission vehicles powered by clean electricity."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Advanced Technology"
            description="Enjoy cutting-edge technology features including Autopilot, over-the-air updates, and intuitive touchscreen controls."
          />
        </div>

        <div className="mt-16 glass-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-tesla-blue text-sm font-medium uppercase tracking-wider mb-2">Limited Time Offer</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for the future of transportation?</h3>
              <p className="text-white/70 mb-6">
                Join thousands of satisfied customers who have embraced our premium electric vehicle rental service. Your journey to the future begins here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/vehicles" className="bg-tesla-blue hover:bg-tesla-blue/90 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
                  Start Your Trial Now
                </a>
                <a href="/pricing" className="border border-white/20 hover:bg-white/10 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
                  View Pricing
                </a>
              </div>
            </div>
            <div className="relative min-h-[350px] lg:min-h-[400px]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-tesla-dark-80 via-tesla-dark-80/50 to-transparent z-10"></div>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/vehicles/model-s-white.jpg"
                  className="h-full w-full object-cover object-center"
                >
                  <source src="/videos/features-cta.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <div className="text-tesla-blue text-lg font-bold">$189</div>
                  <div className="text-white/60 text-xs">Starting at/mo</div>
                </div>
                <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <div className="text-tesla-blue text-lg font-bold">405mi</div>
                  <div className="text-white/60 text-xs">Max Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
