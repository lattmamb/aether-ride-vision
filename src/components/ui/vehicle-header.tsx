
import React from "react";

export const VehicleHeader = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/vehicle-header-bg.mp4" type="video/mp4" />
      </video>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0 z-10">
        <h2 className="text-2xl md:text-5xl font-bold gradient-text text-center mb-2">
          Experience Electric Luxury
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-xl mt-4 text-white/70 text-center">
          Discover our lineup of premium electric vehicles. Cutting-edge technology,
          breathtaking design, and zero emissions. Explore and reserve your Tesla today.
        </p>
      </div>
    </div>
  );
};

export default VehicleHeader;
