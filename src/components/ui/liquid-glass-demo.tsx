
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { Zap, Car, Crown, Sparkles } from "lucide-react";

export default function LiquidGlassDemo() {
  return (
    <div className="min-h-screen bg-unity-midnight flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Unity Fleet Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="font-display text-4xl font-bold gradient-luxury-text mb-4">
            Unity Fleet Premium Buttons
          </h1>
          <p className="font-body text-unity-platinum/80 text-lg max-w-2xl mx-auto">
            Experience the luxury of automotive-inspired liquid glass and metal button designs.
          </p>
        </div>

        {/* Liquid Glass Buttons */}
        <div className="space-y-8">
          <h2 className="font-display text-2xl font-semibold gradient-accent-text text-center">
            Liquid Glass Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center space-y-4">
              <LiquidButton variant="unity" size="xl" className="w-full">
                <Crown className="w-5 h-5 mr-2" />
                Unity Premium
              </LiquidButton>
              <p className="font-body text-sm text-unity-platinum/60">
                Luxury champagne finish
              </p>
            </div>

            <div className="glass-card p-8 text-center space-y-4">
              <LiquidButton variant="automotive" size="xl" className="w-full">
                <Car className="w-5 h-5 mr-2" />
                Automotive Elite
              </LiquidButton>
              <p className="font-body text-sm text-unity-platinum/60">
                Signature blue gradient
              </p>
            </div>

            <div className="glass-card p-8 text-center space-y-4">
              <LiquidButton variant="default" size="xl" className="w-full">
                <Zap className="w-5 h-5 mr-2" />
                Electric Drive
              </LiquidButton>
              <p className="font-body text-sm text-unity-platinum/60">
                Platinum classic
              </p>
            </div>
          </div>
        </div>

        {/* Metal Buttons */}
        <div className="space-y-8">
          <h2 className="font-display text-2xl font-semibold gradient-accent-text text-center">
            Luxury Metal Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <MetalButton variant="unity">
                <Crown className="w-4 h-4 mr-2" />
                Unity Fleet
              </MetalButton>
              <p className="font-body text-xs text-unity-platinum/60">
                Premium Gold
              </p>
            </div>

            <div className="text-center space-y-4">
              <MetalButton variant="automotive">
                <Zap className="w-4 h-4 mr-2" />
                Electric
              </MetalButton>
              <p className="font-body text-xs text-unity-platinum/60">
                Signature Blue
              </p>
            </div>

            <div className="text-center space-y-4">
              <MetalButton variant="gold">
                <Sparkles className="w-4 h-4 mr-2" />
                Luxury
              </MetalButton>
              <p className="font-body text-xs text-unity-platinum/60">
                Champagne Gold
              </p>
            </div>

            <div className="text-center space-y-4">
              <MetalButton variant="success">
                <Car className="w-4 h-4 mr-2" />
                Eco Mode
              </MetalButton>
              <p className="font-body text-xs text-unity-platinum/60">
                Sustainable Green
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="glass-card p-12 text-center space-y-8">
          <h3 className="font-display text-xl font-semibold gradient-text">
            Interactive Premium Experience
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <LiquidButton 
              variant="unity" 
              size="xxl"
              onClick={() => console.log('Unity Fleet Premium activated')}
            >
              <Crown className="w-6 h-6 mr-3" />
              Experience Unity Fleet
            </LiquidButton>
            
            <MetalButton 
              variant="automotive"
              onClick={() => console.log('Automotive mode activated')}
            >
              <Car className="w-4 h-4 mr-2" />
              Drive Premium
            </MetalButton>
          </div>
          
          <p className="font-body text-sm text-unity-platinum/70 max-w-lg mx-auto">
            Click to experience the premium automotive interface design with 3D effects and luxury animations.
          </p>
        </div>
      </div>
    </div>
  );
}
