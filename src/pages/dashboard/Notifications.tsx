import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSEO } from '@/hooks/useSEO';
import { toast } from 'sonner';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Calendar,
  Car,
  Wrench,
  Settings,
  Trash2,
  Check,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  type: 'alert' | 'booking' | 'system' | 'maintenance';
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'alert',
    title: 'Low Battery Warning',
    message: 'Vehicle TES-018 battery level is below 20%. Consider scheduling charging.',
    time: '5 minutes ago',
    read: false,
    priority: 'high'
  },
  {
    id: '2',
    type: 'booking',
    title: 'New Booking Confirmed',
    message: 'Sarah Chen booked Model 3 for 3 days starting tomorrow.',
    time: '15 minutes ago',
    read: false,
    priority: 'medium'
  },
  {
    id: '3',
    type: 'maintenance',
    title: 'Scheduled Maintenance Due',
    message: 'Model S (TES-042) is due for scheduled maintenance in 2 days.',
    time: '1 hour ago',
    read: false,
    priority: 'medium'
  },
  {
    id: '4',
    type: 'system',
    title: 'System Update Available',
    message: 'A new system update is available. Update to get the latest features.',
    time: '2 hours ago',
    read: true,
    priority: 'low'
  },
  {
    id: '5',
    type: 'alert',
    title: 'Tire Pressure Alert',
    message: 'Vehicle TES-018 has low tire pressure. Immediate attention required.',
    time: '3 hours ago',
    read: true,
    priority: 'high'
  },
  {
    id: '6',
    type: 'booking',
    title: 'Booking Completed',
    message: 'Michael Rodriguez has returned Model Y. Vehicle ready for inspection.',
    time: '4 hours ago',
    read: true,
    priority: 'low'
  }
];

const typeConfig = {
  alert: { icon: AlertTriangle, color: 'text-destructive', bg: 'bg-destructive/10' },
  booking: { icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
  maintenance: { icon: Wrench, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  system: { icon: Settings, color: 'text-muted-foreground', bg: 'bg-muted' }
};

export default function Notifications() {
  useSEO({ title: 'Notifications | Unity Fleet', description: 'View and manage your notifications' });
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<string>('all');

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
    toast.success('Notification marked as read');
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success('Notification deleted');
  };

  const clearAll = () => {
    setNotifications([]);
    toast.success('All notifications cleared');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground mt-1">
            {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up!'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigate('/dashboard/settings')}>
            <Settings className="h-4 w-4 mr-2" />
            Preferences
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 cursor-pointer hover:border-primary transition-colors" onClick={() => setFilter('all')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="text-2xl font-bold">{notifications.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:border-destructive transition-colors" onClick={() => setFilter('alert')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Alerts</p>
              <p className="text-2xl font-bold">{notifications.filter(n => n.type === 'alert').length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:border-primary transition-colors" onClick={() => setFilter('booking')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bookings</p>
              <p className="text-2xl font-bold">{notifications.filter(n => n.type === 'booking').length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer hover:border-yellow-500 transition-colors" onClick={() => setFilter('maintenance')}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <Wrench className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Maintenance</p>
              <p className="text-2xl font-bold">{notifications.filter(n => n.type === 'maintenance').length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 justify-center">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="alert">Alerts</TabsTrigger>
          <TabsTrigger value="booking">Bookings</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <Card className="p-12 text-center">
            <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No Notifications</h3>
            <p className="text-muted-foreground">
              {filter === 'unread' ? "You're all caught up!" : 'No notifications in this category.'}
            </p>
          </Card>
        ) : (
          filteredNotifications.map((notification) => {
            const config = typeConfig[notification.type];
            const Icon = config.icon;
            
            return (
              <Card 
                key={notification.id} 
                className={`p-4 transition-all hover:shadow-md ${!notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-5 w-5 ${config.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                      
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {notification.priority === 'high' && (
                          <Badge variant="destructive" className="text-xs">High</Badge>
                        )}
                        {!notification.read && (
                          <Button variant="ghost" size="icon" onClick={() => markAsRead(notification.id)}>
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" onClick={() => deleteNotification(notification.id)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {notifications.length > 0 && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={clearAll}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All Notifications
          </Button>
        </div>
      )}
    </div>
  );
}
