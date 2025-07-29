import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Users, Car, Battery } from 'lucide-react';

export default function FleetOverviewCards() {
  const metrics = [
    {
      title: 'Monthly Revenue',
      value: '$142,350',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'primary'
    },
    {
      title: 'Active Users',
      value: '1,247',
      change: '+8.2%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Fleet Utilization',
      value: '78.5%',
      change: '+5.1%',
      changeType: 'positive',
      icon: Car,
      color: 'green'
    },
    {
      title: 'Avg Battery Health',
      value: '94.2%',
      change: '-2.1%',
      changeType: 'negative',
      icon: Battery,
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="dashboard-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{metric.title}</p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
              <div className="flex items-center mt-2">
                {metric.changeType === 'positive' ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${
                  metric.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last month</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              metric.color === 'primary' ? 'bg-primary/20' :
              metric.color === 'blue' ? 'bg-blue-500/20' :
              metric.color === 'green' ? 'bg-green-500/20' :
              'bg-orange-500/20'
            }`}>
              <metric.icon className={`h-6 w-6 ${
                metric.color === 'primary' ? 'text-primary' :
                metric.color === 'blue' ? 'text-blue-500' :
                metric.color === 'green' ? 'text-green-500' :
                'text-orange-500'
              }`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}