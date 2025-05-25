
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';
import ScrollExpandMedia from './scroll-expansion-hero';

const TeslaScrollHero: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen bg-tesla-dark">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1549399148-0c32a42d8b6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageSrc="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Accelerating Sustainable Transport"
        date="Unity Fleet"
        scrollToExpand="Scroll to Explore Tesla's Future"
        textBlend={false}
      >
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Experience Tesla's Innovation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Unity Fleet brings you Tesla's revolutionary electric vehicles through our premium subscription platform. 
              Experience the future of transportation with zero emissions, maximum performance, and cutting-edge technology.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="p-3 rounded-lg bg-tesla-blue/20 text-tesla-blue inline-flex mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Power</h3>
              <p className="text-white/70">Experience immediate torque delivery and lightning-fast acceleration that only electric motors can provide.</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="p-3 rounded-lg bg-green-400/20 text-green-400 inline-flex mb-4">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Emissions</h3>
              <p className="text-white/70">Drive clean with 100% electric vehicles that produce zero local emissions and reduce your carbon footprint.</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="p-3 rounded-lg bg-purple-400/20 text-purple-400 inline-flex mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Safety</h3>
              <p className="text-white/70">Benefit from Tesla's industry-leading safety features and Autopilot technology for enhanced protection.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vehicles" className="futuristic-button">
                <div className="blob1"></div>
                <div className="inner flex items-center justify-center">
                  Explore Tesla Fleet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
              
              <Link to="/about" className="futuristic-button">
                <div className="blob1"></div>
                <div className="inner">
                  Learn More
                </div>
              </Link>
            </div>
          </div>

          {/* Tesla Vehicle Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-tesla-blue mb-2">500+</div>
              <div className="text-white/70">Miles Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tesla-blue mb-2">1.99s</div>
              <div className="text-white/70">0-60 MPH</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tesla-blue mb-2">200+</div>
              <div className="text-white/70">MPH Top Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tesla-blue mb-2">15min</div>
              <div className="text-white/70">Supercharge</div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default TeslaScrollHero;
