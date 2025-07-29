import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Clock, MapPin, Car } from 'lucide-react';

export default function RecentBookings() {
  const recentBookings = [
    {
      id: 'BK-1423',
      user: 'Sarah Chen',
      vehicle: 'Model 3 - White',
      location: 'Downtown Station',
      time: '2 hours ago',
      status: 'active',
      duration: '3 days'
    },
    {
      id: 'BK-1422',
      user: 'Michael Rodriguez',
      vehicle: 'Model Y - Black',
      location: 'Airport Location',
      time: '4 hours ago',
      status: 'completed',
      duration: '1 day'
    },
    {
      id: 'BK-1421',
      user: 'Emma Johnson',
      vehicle: 'Model S - Red',
      location: 'Mall Station',
      time: '6 hours ago',
      status: 'active',
      duration: '2 days'
    }
  ];

  return (
    <div className="dashboard-card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Bookings</h3>
        <Button variant="ghost" size="sm">View All</Button>
      </div>

      <div className="space-y-4">
        {recentBookings.map((booking, index) => (
          <div key={index} className="glass-panel p-4 rounded-lg">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">{booking.id}</Badge>
                  <Badge className={`text-xs ${
                    booking.status === 'active' ? 'status-success' : 'status-info'
                  }`}>
                    {booking.status}
                  </Badge>
                </div>
                <p className="font-medium text-sm">{booking.user}</p>
              </div>
              <span className="text-xs text-muted-foreground">{booking.time}</span>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Car className="h-3 w-3" />
                <span>{booking.vehicle}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>{booking.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>{booking.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4">
        <User className="h-4 w-4 mr-2" />
        Manage All Bookings
      </Button>
    </div>
  );
}