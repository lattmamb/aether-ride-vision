
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";

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
      {/* Sparkles background effect */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#0A84FF"
          speed={0.3}
        />
      </div>
      
      {/* Background blur effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-tesla-blue/20 rounded-full blur-[120px] parallax-bg"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tesla-purple/20 rounded-full blur-[120px] parallax-bg"></div>
      </div>
      
      {/* Vehicle background video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/vehicles/model-s-white.jpg"
          className="w-full h-full object-cover opacity-40 parallax-bg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradients */}
      <div className="absolute inset-x-20 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-blue to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-blue to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-purple to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-40 z-0 bg-gradient-to-r from-transparent via-tesla-purple to-transparent h-px w-1/4" />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 rounded-full border border-tesla-blue/30 bg-tesla-blue/10 backdrop-blur-sm">
            <span className="text-tesla-blue text-sm font-medium">🚗 Discover Unity Fleet</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20">
            Your Gateway to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tesla-blue to-tesla-purple">Autonomous Travel</span>
          </h1>
          
          <p className="text-xl md:text-2xl italic text-white/60 mb-6 font-light">
            Your Ride of The Future
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            Experience the future of transportation with our premium autonomous 
            fleet services. Zero emissions, maximum performance, starting at just <span className="text-tesla-blue font-semibold">$189/month</span>.
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-white/60">Vehicle Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500mi</div>
              <div className="text-sm text-white/60">Max Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1.99s</div>
              <div className="text-sm text-white/60">0-60 mph</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Charging Stations</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-tesla-blue hover:bg-tesla-blue/90 text-white font-medium px-8 h-14 text-lg">
              <Link to="/vehicles">Browse Electric Vehicles</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-glass hover:bg-white/10 text-white h-14 text-lg">
              <Link to="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2">✓ No long-term contracts</span>
            <span className="flex items-center gap-2">✓ Insurance included</span>
            <span className="flex items-center gap-2">✓ Free maintenance</span>
            <span className="flex items-center gap-2">✓ 24/7 Roadside assistance</span>
          </div>
        </div>
      </div>
      
      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(600px_400px_at_top,transparent_30%,white)]"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/60" />
      </div>
    </div>
  );
};

export default Hero;
