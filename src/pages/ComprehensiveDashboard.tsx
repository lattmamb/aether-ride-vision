
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import EarningsChart from '@/components/dashboard/EarningsChart';
import VehicleMonitor from '@/components/dashboard/VehicleMonitor';
import ServiceDashboard from '@/components/dashboard/ServiceDashboard';
import BookingStatus from '@/components/booking/BookingStatus';
import PaymentForm from '@/components/booking/PaymentForm';
import VehicleControlPanel from '@/components/vehicle-control/VehicleControlPanel';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Car, 
  Calendar, 
  CreditCard, 
  Settings, 
  MessageCircle,
  Bell,
  TrendingUp
} from 'lucide-react';

const ComprehensiveDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Mock booking data
  const currentBooking = {
    id: 'BK001',
    status: 'active' as const,
    vehicle: 'Tesla Model Y',
    startDate: '2024-04-15',
    endDate: '2024-04-22',
    totalAmount: 1299.99
  };

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

  const handlePaymentComplete = (paymentData: any) => {
    console.log('Payment completed:', paymentData);
    setShowPaymentForm(false);
  };

  return (
    <MainLayout>
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-7xl mx-auto" variants={itemVariants}>
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                variants={itemVariants}
              >
                Comprehensive Dashboard
              </motion.h1>
              <motion.p 
                className="text-xl text-white/70"
                variants={itemVariants}
              >
                Complete vehicle and service management hub
              </motion.p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-glass-border bg-glass hover:bg-glass-highlight"
                onClick={() => navigate('/chat')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                AI Chat
              </Button>
              <Button
                className="gradient-bg-primary hover:gradient-bg-secondary"
              >
                <Bell className="w-4 h-4 mr-2" />
                Notifications (3)
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
            variants={itemVariants}
          >
            <Card className="glass-card gradient-border-subtle p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold gradient-accent-text">$2,847</div>
              <div className="text-sm text-white/60">Monthly Earnings</div>
            </Card>
            <Card className="glass-card gradient-border-subtle p-6 text-center">
              <Car className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold gradient-accent-text">87%</div>
              <div className="text-sm text-white/60">Battery Level</div>
            </Card>
            <Card className="glass-card gradient-border-subtle p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-bold gradient-accent-text">24</div>
              <div className="text-sm text-white/60">Active Days</div>
            </Card>
            <Card className="glass-card gradient-border-subtle p-6 text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <div className="text-2xl font-bold gradient-accent-text">4.9</div>
              <div className="text-sm text-white/60">Avg Rating</div>
            </Card>
          </motion.div>

          {/* Main Content Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="glass-effect w-full mb-8">
                <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                <TabsTrigger value="earnings" className="flex-1">Earnings</TabsTrigger>
                <TabsTrigger value="vehicle" className="flex-1">Vehicle</TabsTrigger>
                <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
                <TabsTrigger value="bookings" className="flex-1">Bookings</TabsTrigger>
                <TabsTrigger value="control" className="flex-1">Control</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <VehicleMonitor />
                  <ServiceDashboard />
                </div>
                <EarningsChart />
              </TabsContent>
              
              <TabsContent value="earnings" className="space-y-6">
                <EarningsChart />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card gradient-border-flow p-6">
                    <h3 className="text-xl font-bold mb-4">Payment History</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between items-center glass-effect p-3 rounded">
                          <div>
                            <div className="font-medium">Payment #{i}000{i}</div>
                            <div className="text-sm text-white/70">April {i}, 2024</div>
                          </div>
                          <div className="text-green-400 font-bold">+$1,24{i}.00</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="glass-card gradient-border-flow p-6">
                    <h3 className="text-xl font-bold mb-4">Tax Information</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-white/70">YTD Earnings</span>
                        <span className="font-medium">$31,594.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Tax Withholdings</span>
                        <span className="font-medium">$6,318.90</span>
                      </div>
                      <Button className="w-full mt-4 gradient-bg-primary">
                        Download Tax Documents
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="vehicle" className="space-y-6">
                <VehicleMonitor />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card gradient-border-flow p-6">
                    <h3 className="text-xl font-bold mb-4">Maintenance Schedule</h3>
                    <div className="space-y-3">
                      <div className="glass-effect p-3 rounded border-l-4 border-yellow-500">
                        <div className="font-medium">Tire Rotation</div>
                        <div className="text-sm text-white/70">Due in 500 miles</div>
                      </div>
                      <div className="glass-effect p-3 rounded border-l-4 border-blue-500">
                        <div className="font-medium">Software Update</div>
                        <div className="text-sm text-white/70">Available now</div>
                      </div>
                      <div className="glass-effect p-3 rounded border-l-4 border-green-500">
                        <div className="font-medium">Battery Check</div>
                        <div className="text-sm text-white/70">Completed</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="glass-card gradient-border-flow p-6">
                    <h3 className="text-xl font-bold mb-4">Usage Analytics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-white/70">Miles This Month</span>
                        <span className="font-medium">1,847 mi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Avg Efficiency</span>
                        <span className="font-medium">4.2 mi/kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Charging Sessions</span>
                        <span className="font-medium">12 this month</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="services" className="space-y-6">
                <ServiceDashboard />
              </TabsContent>
              
              <TabsContent value="bookings" className="space-y-6">
                {showPaymentForm ? (
                  <PaymentForm
                    totalAmount={1299.99}
                    onPaymentComplete={handlePaymentComplete}
                    onCancel={() => setShowPaymentForm(false)}
                  />
                ) : (
                  <>
                    <BookingStatus
                      booking={currentBooking}
                      onModify={() => console.log('Modify booking')}
                      onCancel={() => console.log('Cancel booking')}
                    />
                    <Card className="glass-card gradient-border-flow p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Payment Methods</h3>
                        <Button
                          onClick={() => setShowPaymentForm(true)}
                          className="gradient-bg-primary hover:gradient-bg-secondary"
                        >
                          <CreditCard className="w-4 h-4 mr-2" />
                          Add Payment Method
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <div className="glass-effect p-4 rounded flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-6 h-6 text-blue-400" />
                            <div>
                              <div className="font-medium">•••• •••• •••• 4242</div>
                              <div className="text-sm text-white/70">Expires 12/26</div>
                            </div>
                          </div>
                          <div className="text-green-400 text-sm">Primary</div>
                        </div>
                      </div>
                    </Card>
                  </>
                )}
              </TabsContent>
              
              <TabsContent value="control" className="space-y-6">
                <VehicleControlPanel />
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default ComprehensiveDashboard;
