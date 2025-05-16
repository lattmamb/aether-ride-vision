
import React from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchOverlayProps {
  isOpen: boolean;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl p-4 border-t border-white/10 shadow-lg"
        >
          <div className="container mx-auto">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search for vehicles, locations..."
                className="w-full p-3 pr-10 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50"
                autoFocus
              />
              <Search className="absolute right-3 top-3 text-white/60" />
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-sm text-white/60">Popular:</span>
              {["Tesla Model S", "SUVs", "California", "Weekly Rental"].map((term) => (
                <span 
                  key={term}
                  className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full cursor-pointer transition-colors"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
