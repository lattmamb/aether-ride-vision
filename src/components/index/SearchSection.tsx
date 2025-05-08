
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import UserAvatar from './UserAvatar';

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <motion.div 
      className="mb-10 neon-card p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background glow effects */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-aether-blue/5 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-aether-blue/5 rounded-full blur-[100px]"></div>
      
      <UserAvatar />
      
      <h1 className="text-3xl md:text-4xl font-bold text-center text-glow mb-2">
        How can I assist you today?
      </h1>
      
      <div className="max-w-2xl mx-auto mt-8">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for vehicles, locations, or assistance..."
            className="pl-10 py-6 pr-12 bg-aether-panel-light border-aether-blue/20 text-white/90 rounded-xl focus:border-aether-blue focus:ring-1 focus:ring-aether-blue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="h-5 w-5 text-aether-blue/70 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 neon-button">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
            Find a vehicle
          </Button>
          <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
            Charging stations
          </Button>
          <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
            Manage booking
          </Button>
          <Button variant="outline" className="bg-aether-panel-light border-aether-blue/20 text-white/80 hover:bg-aether-blue/10 hover:border-aether-blue/30">
            Support
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchSection;
