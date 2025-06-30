
import React from "react";
import { AnimatedNavigation } from "./animated-navigation";

export function AnimatedNavigationDemo() {
  return (
    <>
      <AnimatedNavigation />
      <main className="container mx-auto px-4">
        <div className="h-screen pt-24 flex flex-col items-center justify-center bg-unity-midnight">
          <h1 className="text-6xl font-bold text-center gradient-luxury-text font-display mb-4">
            Unity Fleet Navigation
          </h1>
          <p className="text-center text-unity-platinum/80 mt-4 text-lg font-body max-w-2xl">
            Experience our premium automotive navigation with smooth scroll animations. 
            Scroll down to see the navigation collapse into an elegant floating icon.
          </p>
          <div className="mt-8 glass-card p-6 rounded-luxury">
            <p className="text-unity-platinum/60 text-center">
              Click the collapsed icon to expand the navigation back to full view.
            </p>
          </div>
        </div>
        
        <div className="min-h-[200vh] glass-card rounded-luxury p-8 mb-8 bg-unity-charcoal/20">
          <h2 className="text-4xl font-bold gradient-accent-text font-display mb-6">
            Premium Vehicle Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-unity-signature mb-3 font-display">
                Scroll Animation
              </h3>
              <p className="text-unity-platinum/80 font-body">
                Our navigation uses Framer Motion for fluid, physics-based animations 
                that provide a premium feel worthy of luxury automotive experiences.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-unity-teal mb-3 font-display">
                Glass Morphism Design
              </h3>
              <p className="text-unity-platinum/80 font-body">
                The navigation features Unity Fleet's signature glass morphism effects 
                with backdrop blur and premium shadow systems.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-unity-champagne mb-3 font-display">
                Automotive Branding
              </h3>
              <p className="text-unity-platinum/80 font-body">
                Every element reflects our automotive heritage with premium colors, 
                luxury typography, and sophisticated visual effects.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-unity-signature mb-3 font-display">
                Adaptive Experience
              </h3>
              <p className="text-unity-platinum/80 font-body">
                The navigation adapts intelligently to user behavior, collapsing 
                on scroll down and expanding on scroll up for optimal viewing.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block glass-card p-8 rounded-luxury">
              <h3 className="text-2xl font-bold gradient-purple-text font-display mb-4">
                Continue Scrolling
              </h3>
              <p className="text-unity-platinum/70 font-body">
                Keep scrolling to experience the full navigation animation cycle.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
