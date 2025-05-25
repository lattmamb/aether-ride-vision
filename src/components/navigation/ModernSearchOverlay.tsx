
import React, { useState } from "react";
import { Search, TrendingUp, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModernSearchOverlayProps {
  isOpen: boolean;
}

const ModernSearchOverlay: React.FC<ModernSearchOverlayProps> = ({ isOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = [
    "Tesla Model S",
    "SUV Rentals",
    "California Locations",
    "Weekly Subscription",
    "Autopilot Features"
  ];

  const recentSearches = [
    "Model 3 Performance",
    "Monthly Plans",
    "San Francisco"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 neumorphic-card backdrop-blur-2xl border-t border-white/10 shadow-2xl"
        >
          <div className="container mx-auto p-6">
            {/* Search Input */}
            <div className="relative mb-6">
              <div className="neumorphic-inset rounded-2xl p-1">
                <input 
                  type="text"
                  placeholder="Search vehicles, locations, plans..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-4 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                  autoFocus
                />
              </div>
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 neumorphic-button p-3 rounded-xl">
                <Search className="text-[#9b87f5] h-5 w-5" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#9b87f5]" />
                  <span className="text-white/80 font-medium">Popular Searches</span>
                </div>
                <div className="space-y-2">
                  {popularSearches.map((term, index) => (
                    <motion.button
                      key={term}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block w-full text-left p-3 neumorphic-button rounded-lg hover:neumorphic-hover transition-all duration-200 text-white/90 hover:text-white group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9b87f5]/60 group-hover:bg-[#9b87f5] transition-colors" />
                        {term}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#9b87f5]" />
                  <span className="text-white/80 font-medium">Recent Searches</span>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((term, index) => (
                    <motion.button
                      key={term}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block w-full text-left p-3 neumorphic-button rounded-lg hover:neumorphic-hover transition-all duration-200 text-white/90 hover:text-white group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/60 transition-colors" />
                        {term}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernSearchOverlay;
