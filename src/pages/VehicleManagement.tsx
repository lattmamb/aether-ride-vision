
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VehicleControlPanel from '@/components/vehicle-control/VehicleControlPanel';
import ServicesManager from '@/components/services/ServicesManager';
import { Button } from '@/components/ui/button';
import { Car, Settings, DollarSign, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VehicleManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('control');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <MainLayout>
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
              variants={itemVariants}
            >
              Vehicle Management
            </motion.h1>
            <motion.p 
              className="text-xl text-white/70 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Control your Tesla and manage your ride-sharing services
            </motion.p>
          </div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
            variants={itemVariants}
          >
            <div className="glass-card gradient-border-subtle p-6 text-center">
              <Car className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold gradient-accent-text">1</div>
              <div className="text-sm text-white/60">Active Vehicle</div>
            </div>
            <div className="glass-card gradient-border-subtle p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold gradient-accent-text">$1,247</div>
              <div className="text-sm text-white/60">Monthly Earnings</div>
            </div>
            <div className="glass-card gradient-border-subtle p-6 text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-bold gradient-accent-text">4.9</div>
              <div className="text-sm text-white/60">Average Rating</div>
            </div>
            <div className="glass-card gradient-border-subtle p-6 text-center">
              <Settings className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <div className="text-2xl font-bold gradient-accent-text">87%</div>
              <div className="text-sm text-white/60">Battery Level</div>
            </div>
          </motion.div>

          {/* Main Content Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="glass-effect w-full mb-8">
                <TabsTrigger value="control" className="flex-1">Vehicle Control</TabsTrigger>
                <TabsTrigger value="services" className="flex-1">Service Management</TabsTrigger>
                <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
                <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="control" className="space-y-6">
                <VehicleControlPanel />
              </TabsContent>
              
              <TabsContent value="services" className="space-y-6">
                <ServicesManager />
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-6">
                <div className="glass-card gradient-border-flow p-8 text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
                  <p className="text-white/70 mb-6">
                    Detailed analytics and reporting for your vehicle usage and earnings
                  </p>
                  <Button className="gradient-bg-primary hover:gradient-bg-secondary">
                    View Detailed Analytics
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6">
                <div className="glass-card gradient-border-flow p-8 text-center">
                  <Settings className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                  <h3 className="text-2xl font-bold mb-4">Vehicle Settings</h3>
                  <p className="text-white/70 mb-6">
                    Configure your vehicle preferences and service settings
                  </p>
                  <Button className="gradient-bg-primary hover:gradient-bg-secondary">
                    Open Settings
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            variants={itemVariants}
          >
            <Button 
              variant="outline" 
              className="border-glass-border bg-glass hover:bg-glass-highlight"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </Button>
            <Button 
              className="gradient-bg-primary hover:gradient-bg-secondary"
              onClick={() => navigate('/vehicles')}
            >
              Browse More Vehicles
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default VehicleManagement;
