
import React, { useEffect, useRef, useState } from 'react';
import { ChargingStation } from '../types';
import { chargingStations } from '../data/vehicles';
import { Zap, MapPin, ExternalLink } from 'lucide-react';

interface MapProps {
  stations?: ChargingStation[];
  vehicleLocation?: { lat: number; lng: number };
  center?: { lat: number; lng: number };
  zoom?: number;
  style?: React.CSSProperties;
  className?: string;
}

const Map: React.FC<MapProps> = ({ 
  stations = chargingStations,
  vehicleLocation,
  center = { lat: 37.7749, lng: -122.4194 },
  zoom = 13,
  style,
  className = ''
}) => {
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null);

  // Generate OpenStreetMap embed URL (no API key needed)
  const getEmbedUrl = () => {
    return `https://www.openstreetmap.org/export/embed.html?bbox=${center.lng - 0.05}%2C${center.lat - 0.03}%2C${center.lng + 0.05}%2C${center.lat + 0.03}&layer=mapnik&marker=${center.lat}%2C${center.lng}`;
  };

  const openInGoogleMaps = (station: ChargingStation) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${station.location.lat},${station.location.lng}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Video ambient background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
      >
        <source src="/videos/map-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Charging Network</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Access our extensive network of Superchargers across the Bay Area. 
            Real-time availability and fast charging speeds up to 250kW.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stations List */}
          <div className="lg:col-span-1 space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-lg font-semibold text-white mb-4 sticky top-0 bg-background/95 backdrop-blur-sm py-2 z-10">
              Nearby Stations ({stations.length})
            </h3>
            {stations.map((station) => (
              <div 
                key={station.id}
                className={`glass-card p-4 cursor-pointer transition-all duration-300 hover:bg-glass-highlight/10 ${
                  selectedStation?.id === station.id ? 'ring-2 ring-tesla-blue bg-tesla-blue/10' : ''
                }`}
                onClick={() => setSelectedStation(station)}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-tesla-blue/20">
                    <Zap className="w-5 h-5 text-tesla-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{station.name}</h4>
                    <p className="text-sm text-white/60 mt-1 flex items-start gap-1">
                      <MapPin className="w-3 h-3 mt-1 shrink-0" />
                      {station.address}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 font-semibold">{station.available}</span>
                        <span className="text-white/50">/ {station.total} available</span>
                      </div>
                      <span className="text-sm text-white/60">{station.chargingSpeed}kW</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openInGoogleMaps(station);
                      }}
                      className="mt-3 text-tesla-blue text-sm hover:underline flex items-center gap-1"
                    >
                      Get Directions <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Map */}
          <div 
            className={`lg:col-span-2 glass-card relative overflow-hidden rounded-2xl ${className}`} 
            style={{ minHeight: '500px', ...style }}
          >
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${center.lng - 0.05}%2C${center.lat - 0.03}%2C${center.lng + 0.05}%2C${center.lat + 0.03}&layer=mapnik&marker=${center.lat}%2C${center.lng}`}
              style={{ 
                width: '100%', 
                height: '100%', 
                minHeight: '500px',
                border: 'none',
                borderRadius: '1rem',
                filter: 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)'
              }}
              title="Charging Stations Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Stats overlay */}
            <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-tesla-blue">{stations.length}</div>
                  <div className="text-xs text-white/60">Stations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {stations.reduce((acc, s) => acc + s.available, 0)}
                  </div>
                  <div className="text-xs text-white/60">Available</div>
                </div>
              </div>
            </div>
            
            {/* Selected station info */}
            {selectedStation && (
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-tesla-blue/20">
                      <Zap className="w-5 h-5 text-tesla-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{selectedStation.name}</h4>
                      <p className="text-sm text-white/60">{selectedStation.address}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openInGoogleMaps(selectedStation)}
                    className="bg-tesla-blue hover:bg-tesla-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    Navigate <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
