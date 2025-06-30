
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardHeaderProps {
  variants: any;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ variants }) => {
  return (
    <motion.div className="mb-10" variants={variants}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Illinois Clean Transit Dashboard</h1>
          <p className="text-white/70">Sustainable mobility solutions across the Prairie State.</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Transit Assistant
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Leaf className="w-4 h-4 mr-2" />
            Book Clean Ride
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
