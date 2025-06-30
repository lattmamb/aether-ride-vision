
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, DollarSign, Star, Clock, MapPin, TrendingUp } from 'lucide-react';

const ServiceDashboard: React.FC = () => {
  const [activeServices, setActiveServices] = useState({
    uber: true,
    doordash: false,
    lyft: true
  });

  const serviceStats = {
    uber: {
      status: 'active',
      todayEarnings: 127.50,
      todayTrips: 8,
      rating: 4.9,
      totalTrips: 1247,
      totalEarnings: 15420
    },
    doordash: {
      status: 'inactive',
      todayEarnings: 0,
      todayTrips: 0,
      rating: 4.8,
      totalTrips: 892,
      totalEarnings: 8930
    },
    lyft: {
      status: 'active',
      todayEarnings: 89.25,
      todayTrips: 5,
      rating: 4.7,
      totalTrips: 634,
      totalEarnings: 7240
    }
  };

  const recentRequests = [
    {
      id: 1,
      service: 'uber',
      type: 'ride',
      pickup: '123 Main St',
      destination: 'Airport',
      earnings: 45.50,
      distance: '12.5 mi',
      time: '25 min',
      status: 'completed'
    },
    {
      id: 2,
      service: 'lyft',
      type: 'ride',
      pickup: 'Downtown',
      destination: 'Marina District',
      earnings: 28.75,
      distance: '8.2 mi',
      time: '18 min',
      status: 'active'
    },
    {
      id: 3,
      service: 'doordash',
      type: 'delivery',
      pickup: 'McDonald\'s',
      destination: '456 Oak Ave',
      earnings: 12.25,
      distance: '3.1 mi',
      time: '12 min',
      status: 'pending'
    }
  ];

  const toggleService = (service: string) => {
    setActiveServices(prev => ({
      ...prev,
      [service]: !prev[service as keyof typeof prev]
    }));
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'uber':
        return 'from-black to-gray-800';
      case 'doordash':
        return 'from-red-500 to-red-600';
      case 'lyft':
        return 'from-pink-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card gradient-border-flow p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full gradient-bg-primary flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Service Dashboard</h3>
            <p className="text-white/70">Manage your ride-sharing services</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold gradient-accent-text">
            ${(serviceStats.uber.todayEarnings + serviceStats.lyft.todayEarnings + serviceStats.doordash.todayEarnings).toFixed(2)}
          </div>
          <div className="text-sm text-white/70">Today's Earnings</div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="glass-effect w-full mb-6">
          <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
          <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
          <TabsTrigger value="requests" className="flex-1">Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(serviceStats).map(([service, stats]) => (
              <Card key={service} className="glass-card p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getServiceColor(service)} text-white text-sm font-medium capitalize`}>
                    {service}
                  </div>
                  <Badge className={stats.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}>
                    {stats.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Today</span>
                    <span className="font-medium">${stats.todayEarnings.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Trips</span>
                    <span className="font-medium">{stats.todayTrips}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 text-sm">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="font-medium">{stats.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card p-4">
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                Performance Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Total Trips</span>
                  <span className="font-medium">
                    {serviceStats.uber.totalTrips + serviceStats.lyft.totalTrips + serviceStats.doordash.totalTrips}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Earnings</span>
                  <span className="font-medium">
                    ${(serviceStats.uber.totalEarnings + serviceStats.lyft.totalEarnings + serviceStats.doordash.totalEarnings).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Avg Rating</span>
                  <span className="font-medium">4.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Online Hours</span>
                  <span className="font-medium">6.5h today</span>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-4">
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                Quick Actions
              </h4>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-start glass-card hover:bg-glass-highlight"
                  onClick={() => toggleService('uber')}
                >
                  <div className={`w-3 h-3 rounded-full mr-3 ${activeServices.uber ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  {activeServices.uber ? 'Stop' : 'Start'} Uber
                </Button>
                <Button 
                  className="w-full justify-start glass-card hover:bg-glass-highlight"
                  onClick={() => toggleService('lyft')}
                >
                  <div className={`w-3 h-3 rounded-full mr-3 ${activeServices.lyft ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  {activeServices.lyft ? 'Stop' : 'Start'} Lyft
                </Button>
                <Button 
                  className="w-full justify-start glass-card hover:bg-glass-highlight"
                  onClick={() => toggleService('doordash')}
                >
                  <div className={`w-3 h-3 rounded-full mr-3 ${activeServices.doordash ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  {activeServices.doordash ? 'Stop' : 'Start'} DoorDash
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          {Object.entries(serviceStats).map(([service, stats]) => (
            <Card key={service} className="glass-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getServiceColor(service)} flex items-center justify-center text-white font-bold capitalize`}>
                    {service[0]}
                  </div>
                  <div>
                    <h4 className="font-medium capitalize">{service}</h4>
                    <p className="text-sm text-white/70">
                      {stats.totalTrips} total trips • ${stats.totalEarnings.toLocaleString()} earned
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className={stats.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}>
                    {stats.status}
                  </Badge>
                  <Button
                    size="sm"
                    onClick={() => toggleService(service)}
                    className={stats.status === 'active' ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400' : 'bg-green-500/20 hover:bg-green-500/30 text-green-400'}
                  >
                    {stats.status === 'active' ? 'Stop' : 'Start'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          {recentRequests.map(request => (
            <Card key={request.id} className="glass-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getServiceColor(request.service)} flex items-center justify-center text-white font-bold capitalize`}>
                    {request.service[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium capitalize">{request.type}</span>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {request.pickup} → {request.destination}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {request.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold gradient-accent-text">
                    ${request.earnings.toFixed(2)}
                  </div>
                  <div className="text-sm text-white/70">{request.distance}</div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ServiceDashboard;
