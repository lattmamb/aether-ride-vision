
"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { vehicles } from "@/data/vehicles";

const content = [
  {
    title: "Electric Performance",
    description:
      "Experience the future of driving with our cutting-edge electric vehicles. From instant torque to silent acceleration, every ride redefines what performance means in the modern era.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#7c3aed] text-white">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">⚡</div>
          <div className="text-xl font-semibold">Electric Performance</div>
          <div className="text-sm opacity-80">Zero emissions, maximum impact</div>
        </div>
      </div>
    ),
  },
  {
    title: "Seamless Subscriptions",
    description:
      "Say goodbye to traditional car ownership. Our flexible subscription model adapts to your lifestyle, offering premium vehicles without the long-term commitment or maintenance hassles.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={vehicles[0].image}
          width={300}
          height={200}
          className="h-full w-full object-contain"
          alt="Unity Fleet vehicle"
        />
      </div>
    ),
  },
  {
    title: "Smart Technology",
    description:
      "Every vehicle in our fleet features the latest in autonomous driving technology, advanced safety systems, and seamless connectivity. Stay connected, stay safe, stay ahead.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#06b6d4] to-[#10b981] text-white">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">🚗</div>
          <div className="text-xl font-semibold">Autonomous Ready</div>
          <div className="text-sm opacity-80">AI-powered driving assistance</div>
        </div>
      </div>
    ),
  },
  {
    title: "Sustainable Future",
    description:
      "Join the movement towards a cleaner planet. Our commitment to sustainability extends beyond electric powertrains to include renewable energy charging and carbon-neutral operations.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f97316] to-[#eab308] text-white">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">🌱</div>
          <div className="text-xl font-semibold">100% Sustainable</div>
          <div className="text-sm opacity-80">Carbon neutral by design</div>
        </div>
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
