
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Car, Leaf, Calendar, MapPin } from 'lucide-react';
import PremiumCard from '@/components/ui/PremiumCard';

interface DashboardSidebarProps {
  variants: any;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ variants }) => {
  return (
    <div className="space-y-6">
      {/* Transit Subscription */}
      <motion.div variants={variants}>
        <PremiumCard variant="premium" className="p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            Transit Subscription
          </h2>
          
          <div className="space-y-4">
            <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-500/20">
                <Car className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-white/70">Current Plan</div>
                <div className="font-medium text-white">Illinois Commuter Pro</div>
              </div>
            </div>
            
            <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
              <div className="p-3 rounded-full bg-green-500/20">
                <Leaf className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-white/70">Clean Energy Goal</div>
                <div className="font-medium text-white">95% Renewable</div>
              </div>
            </div>
            
            <div className="glass-effect p-4 rounded-xl flex items-center gap-3">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Calendar className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-white/70">Next Billing</div>
                <div className="font-medium text-white">April 15, 2025</div>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 glass-effect hover:bg-white/10 text-white border-white/20">
            Manage Transit Plan
          </Button>
        </PremiumCard>
      </motion.div>
      
      {/* Illinois Incentives */}
      <motion.div variants={variants}>
        <PremiumCard variant="luxury" className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Illinois Clean Energy Incentives</h2>
          
          <div className="space-y-3">
            <div className="glass-effect p-3 rounded-lg">
              <div className="font-medium text-white text-sm">State EV Rebate</div>
              <div className="text-green-400 text-xs">Up to $4,000 available</div>
            </div>
            <div className="glass-effect p-3 rounded-lg">
              <div className="font-medium text-white text-sm">ComEd Clean Energy</div>
              <div className="text-blue-400 text-xs">15% discount on charging</div>
            </div>
            <div className="glass-effect p-3 rounded-lg">
              <div className="font-medium text-white text-sm">Corporate Transit Tax Credit</div>
              <div className="text-purple-400 text-xs">20% business deduction</div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-4 border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm">
            Learn About Incentives
          </Button>
        </PremiumCard>
      </motion.div>
      
      {/* Quick Transit Actions */}
      <motion.div variants={variants}>
        <PremiumCard className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <MapPin className="mr-2 h-5 w-5" /> Find Charging Station
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <Calendar className="mr-2 h-5 w-5" /> Schedule Commute
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <Users className="mr-2 h-5 w-5" /> Corporate Program
            </Button>
            <Button variant="outline" className="w-full justify-start border-white/20 bg-white/5 hover:bg-white/10 text-white">
              <Leaf className="mr-2 h-5 w-5" /> Carbon Report
            </Button>
          </div>
        </PremiumCard>
      </motion.div>
    </div>
  );
};

export default DashboardSidebar;
