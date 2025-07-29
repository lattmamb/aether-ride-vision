import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Battery, AlertTriangle, CheckCircle } from 'lucide-react';

export default function VehicleStatusChart() {
  const vehicleStatus = [
    { status: 'Available', count: 42, color: 'bg-green-500', icon: CheckCircle },
    { status: 'Rented', count: 23, color: 'bg-primary', icon: Car },
    { status: 'Charging', count: 8, color: 'bg-blue-500', icon: Battery },
    { status: 'Maintenance', count: 3, color: 'bg-orange-500', icon: AlertTriangle }
  ];

  const total = vehicleStatus.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="dashboard-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold">Fleet Status Overview</h3>
          <p className="text-sm text-muted-foreground">Real-time vehicle distribution</p>
        </div>
        <Badge className="status-info">{total} Total Vehicles</Badge>
      </div>

      {/* Donut Chart Visualization */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
          <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold">{total}</p>
              <p className="text-sm text-muted-foreground">Vehicles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="space-y-4">
        {vehicleStatus.map((item, index) => {
          const percentage = ((item.count / total) * 100).toFixed(1);
          return (
            <div key={index} className="flex items-center justify-between p-3 glass-panel rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${item.color}/20 rounded-lg flex items-center justify-center`}>
                  <item.icon className={`h-5 w-5 ${item.color.replace('bg-', 'text-')}`} />
                </div>
                <div>
                  <p className="font-medium">{item.status}</p>
                  <p className="text-sm text-muted-foreground">{percentage}% of fleet</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">{item.count}</p>
                <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}