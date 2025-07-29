import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, MoreHorizontal } from 'lucide-react';

export default function RevenueChart() {
  const monthlyData = [
    { month: 'Jan', revenue: 98000, bookings: 342 },
    { month: 'Feb', revenue: 112000, bookings: 398 },
    { month: 'Mar', revenue: 125000, bookings: 445 },
    { month: 'Apr', revenue: 118000, bookings: 412 },
    { month: 'May', revenue: 135000, bookings: 478 },
    { month: 'Jun', revenue: 142350, bookings: 502 }
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="dashboard-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold">Revenue Analytics</h3>
          <p className="text-sm text-muted-foreground">Monthly performance overview</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="status-success">+12.5% growth</Badge>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-64 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-lg p-4">
        <div className="flex items-end justify-between h-full">
          {monthlyData.map((data, index) => {
            const height = (data.revenue / maxRevenue) * 100;
            return (
              <div key={data.month} className="flex flex-col items-center gap-2 flex-1">
                <div className="relative w-8 bg-slate-700 rounded-t" style={{ height: `${height}%` }}>
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-primary/60 rounded-t transition-all duration-500"
                    style={{ height: '100%' }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-card-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">$142.3K</p>
          <p className="text-xs text-muted-foreground">This Month</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">502</p>
          <p className="text-xs text-muted-foreground">Total Bookings</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-500">$283</p>
          <p className="text-xs text-muted-foreground">Avg per Booking</p>
        </div>
      </div>
    </div>
  );
}