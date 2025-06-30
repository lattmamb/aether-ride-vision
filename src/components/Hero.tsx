
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Zap, Shield, Sparkles } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import AutomotiveButton from "@/components/ui/AutomotiveButton";
import PremiumCard from "@/components/ui/PremiumCard";
import HUDDisplay from "@/components/ui/HUDDisplay";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      const bgElements = heroRef.current.querySelectorAll('.parallax-bg');
      
      bgElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Sparkles background effect */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.8}
          maxSize={2.0}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#6B46C1"
          speed={0.4}
        />
      </div>
      
      {/* Premium background blur effects with Unity Fleet colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-unity-purple/20 rounded-full blur-[120px] parallax-bg animate-unity-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-unity-signature/20 rounded-full blur-[120px] parallax-bg animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-unity-teal/10 rounded-full blur-[100px] parallax-bg animate-unity-rotate"></div>
      </div>
      
      {/* Premium gradient lines */}
      <div className="absolute inset-x-20 top-40 z-0 bg-gradient-to-r from-transparent via-unity-signature to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-40 z-0 bg-gradient-to-r from-transparent via-unity-signature to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-40 z-0 bg-gradient-to-r from-transparent via-unity-purple to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-40 z-0 bg-gradient-to-r from-transparent via-unity-purple to-transparent h-px w-1/4" />
      
      {/* Main content container */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          {/* Premium Brand Badge */}
          <PremiumCard variant="luxury" className="mb-8 px-6 py-3 inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-unity-champagne" />
            <span className="font-display font-semibold gradient-luxury-text">Premium Electric Fleet</span>
          </PremiumCard>

          {/* Hero Title with Premium Typography */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative z-20">
            <span className="gradient-text">Experience the Future of</span>
            <br />
            <span className="gradient-purple-text">Electric Mobility</span>
          </h1>
          
          {/* Premium Tagline */}
          <p className="font-body text-xl md:text-2xl text-unity-platinum/80 mb-8 max-w-3xl leading-relaxed">
            Discover luxury redefined through sustainable innovation. 
            Unity Fleet delivers premium electric vehicles with uncompromising elegance and performance.
          </p>
          
          {/* Premium Stats Display */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl w-full">
            <HUDDisplay
              label="Range"
              value="500+"
              unit="miles"
              status="success"
              icon={<Zap className="w-4 h-4" />}
            />
            <HUDDisplay
              label="Safety"
              value="5"
              unit="star"
              status="normal"
              icon={<Shield className="w-4 h-4" />}
            />
            <HUDDisplay
              label="Fleet"
              value="25+"
              unit="models"
              status="success"
              icon={<Sparkles className="w-4 h-4" />}
            />
          </div>
          
          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/vehicles">
              <AutomotiveButton 
                variant="primary" 
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Explore Premium Fleet
              </AutomotiveButton>
            </Link>
            
            <Link to="/how-it-works">
              <AutomotiveButton 
                variant="luxury" 
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Discover Excellence
              </AutomotiveButton>
            </Link>
          </div>

          {/* Premium Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
            <PremiumCard variant="default" className="p-6 text-center" hover>
              <div className="w-12 h-12 bg-unity-signature/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-unity-signature" />
              </div>
              <h3 className="font-display font-semibold text-lg gradient-accent-text mb-2">
                Instant Performance
              </h3>
              <p className="font-body text-unity-platinum/70 text-sm">
                Experience instant torque and whisper-quiet acceleration
              </p>
            </PremiumCard>

            <PremiumCard variant="default" className="p-6 text-center" hover>
              <div className="w-12 h-12 bg-unity-champagne/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-unity-champagne" />
              </div>
              <h3 className="font-display font-semibold text-lg gradient-luxury-text mb-2">
                Premium Safety
              </h3>
              <p className="font-body text-unity-platinum/70 text-sm">
                Advanced autopilot and 5-star safety ratings across all models
              </p>
            </PremiumCard>

            <PremiumCard variant="default" className="p-6 text-center" hover>
              <div className="w-12 h-12 bg-unity-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-unity-teal" />
              </div>
              <h3 className="font-display font-semibold text-lg gradient-accent-text mb-2">
                Luxury Experience
              </h3>
              <p className="font-body text-unity-platinum/70 text-sm">
                Premium interiors with cutting-edge technology integration
              </p>
            </PremiumCard>
          </div>
        </div>
      </div>
      
      {/* Enhanced radial gradient mask */}
      <div className="absolute inset-0 w-full h-full bg-unity-midnight [mask-image:radial-gradient(600px_400px_at_top,transparent_30%,white)]"></div>
      
      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="font-display text-xs text-unity-platinum/60 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-6 w-6 text-unity-signature" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
