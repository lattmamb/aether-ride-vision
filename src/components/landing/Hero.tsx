
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tesla-dark via-tesla-dark-80 to-tesla-dark-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tesla-blue/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#9b87f5]/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Drive Electric.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tesla-blue to-[#9b87f5]">
              Drive Future.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience premium electric vehicles with Unity Fleet. 
            Zero emissions, maximum performance, infinite possibilities.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Zap className="h-5 w-5 text-tesla-blue" />
              <span className="text-white/90">Instant Power</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 text-green-400" />
              <span className="text-white/90">Zero Emissions</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-purple-400" />
              <span className="text-white/90">Advanced Safety</span>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tesla-blue hover:bg-tesla-blue/90 text-white font-medium px-8 py-4 text-lg">
              <Link to="/vehicles" className="flex items-center gap-2">
                Explore Vehicles
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-glass hover:bg-white/10 text-white font-medium px-8 py-4 text-lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
