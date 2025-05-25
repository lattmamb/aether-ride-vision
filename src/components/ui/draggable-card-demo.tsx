
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "Model S Plaid",
      image:
        "https://images.unsplash.com/photo-1549399148-0c32a42d8b6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Model 3 Performance",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Model X",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Model Y",
      image:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Cybertruck",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Roadster",
      image:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Semi",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-gradient-to-b from-tesla-dark via-tesla-dark-80 to-tesla-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-center z-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white via-white/90 to-[#9b87f5] bg-clip-text text-transparent">
          Accelerating the World's
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white/80">
          Transition to Sustainable Transport
        </h2>
        <p className="text-lg md:text-xl text-white/60 mt-4 max-w-2xl mx-auto">
          Experience Tesla's premium electric fleet through Unity Fleet's innovative subscription platform
        </p>
      </div>

      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
          </div>
          <h3 className="mt-4 text-center text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            {item.title}
          </h3>
          <div className="text-center mt-2">
            <span className="inline-block bg-[#9b87f5]/20 backdrop-blur-sm text-white/90 text-sm px-3 py-1 rounded-full border border-[#9b87f5]/30">
              Available Now
            </span>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
