import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import FleetOverviewCards from '@/components/dashboard/FleetOverviewCards';
import RevenueChart from '@/components/dashboard/RevenueChart';
import VehicleStatusChart from '@/components/dashboard/VehicleStatusChart';
import RecentBookings from '@/components/dashboard/RecentBookings';
import VehicleHealth from '@/components/dashboard/VehicleHealth';
import { 
  Car, 
  Users, 
  DollarSign, 
  TrendingUp,
  Battery,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fleet Management Dashboard</h1>
          <p className="text-muted-foreground mt-1">Comprehensive overview of your Tesla fleet operations</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="status-success">All Systems Operational</Badge>
          <Button variant="outline" size="sm">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <FleetOverviewCards />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Revenue & Analytics */}
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart />
          <VehicleStatusChart />
        </div>

        {/* Right Column - Recent Activity & Alerts */}
        <div className="space-y-6">
          <VehicleHealth />
          <RecentBookings />
          
          {/* Quick Actions */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <Car className="mr-2 h-4 w-4" />
                Add New Vehicle
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                View Reservations
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                Monitor Locations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Real-time Monitoring */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="dashboard-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Rentals</p>
              <p className="text-2xl font-bold">23</p>
            </div>
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Car className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="dashboard-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Charging</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Battery className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>

        <div className="dashboard-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Maintenance</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="dashboard-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Available</p>
              <p className="text-2xl font-bold">42</p>
            </div>
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}