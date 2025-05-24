
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import NeumorphicButton from "@/components/neumorphic/NeumorphicButton";
import NeumorphicBadge from "@/components/neumorphic/NeumorphicBadge";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <NeumorphicBadge variant="info">
              <Zap className="h-5 w-5" />
              Instant Power
            </NeumorphicBadge>
            <NeumorphicBadge variant="success">
              <Leaf className="h-5 w-5" />
              Zero Emissions
            </NeumorphicBadge>
            <NeumorphicBadge variant="default">
              <Shield className="h-5 w-5" />
              Advanced Safety
            </NeumorphicBadge>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            Drive Electric.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Drive Future.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience premium electric vehicles with Unity Fleet. 
            Zero emissions, maximum performance, infinite possibilities.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vehicles">
              <NeumorphicButton variant="primary" size="large">
                Explore Vehicles
                <ArrowRight className="h-5 w-5" />
              </NeumorphicButton>
            </Link>
            
            <Link to="/about">
              <NeumorphicButton variant="soft" size="large">
                Learn More
              </NeumorphicButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
