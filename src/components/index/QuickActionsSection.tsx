
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Calendar, MapPin, MessageSquare } from 'lucide-react';

const QuickActionsSection: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold gradient-blue-text mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
            <Car className="h-6 w-6 text-aether-blue" />
          </div>
          <h3 className="font-medium text-white mb-2">Browse Vehicles</h3>
          <p className="text-sm text-white/70 mb-4">Explore our premium electric fleet</p>
          <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
            View Fleet
          </Button>
        </Card>
        
        <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
            <Calendar className="h-6 w-6 text-aether-blue" />
          </div>
          <h3 className="font-medium text-white mb-2">Book a Ride</h3>
          <p className="text-sm text-white/70 mb-4">Schedule your next journey</p>
          <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
            Book Now
          </Button>
        </Card>
        
        <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
            <MapPin className="h-6 w-6 text-aether-blue" />
          </div>
          <h3 className="font-medium text-white mb-2">Find Locations</h3>
          <p className="text-sm text-white/70 mb-4">Discover pickup points nearby</p>
          <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
            View Map
          </Button>
        </Card>
        
        <Card className="neon-card hover:shadow-neon-blue-strong transition-all duration-300 p-5 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-aether-blue/10 mb-4">
            <MessageSquare className="h-6 w-6 text-aether-blue" />
          </div>
          <h3 className="font-medium text-white mb-2">Get Support</h3>
          <p className="text-sm text-white/70 mb-4">We're here to help you</p>
          <Button variant="outline" className="mt-auto bg-transparent border-aether-blue/30 text-aether-blue hover:bg-aether-blue/10">
            Contact Us
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default QuickActionsSection;
