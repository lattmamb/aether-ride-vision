
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Car, Calendar, Battery, MapPin, Clock } from 'lucide-react';

interface MediaDashboardStatsProps {
  activeVehicle: any;
  subscriptionProgress: number;
  remainingMiles: number;
  totalMiles: number;
  remainingDays: number;
}

const MediaDashboardStats: React.FC<MediaDashboardStatsProps> = ({
  activeVehicle,
  subscriptionProgress,
  remainingMiles,
  totalMiles,
  remainingDays
}) => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Subscription Progress",
      value: `${remainingDays} days left`,
      progress: subscriptionProgress,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      icon: Car,
      label: "Miles Remaining",
      value: `${remainingMiles} / ${totalMiles}`,
      progress: (remainingMiles / totalMiles) * 100,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: Battery,
      label: "Battery Range",
      value: `${activeVehicle.performance.range} mi`,
      progress: 87,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: Clock,
      label: "Performance",
      value: `${activeVehicle.performance.acceleration}s 0-60`,
      progress: 95,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="glass-card p-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 ${stat.bgColor} opacity-20`} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="border-white/20 text-white/80">
                  Live
                </Badge>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-white/70">{stat.label}</p>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <Progress 
                  value={stat.progress} 
                  className="h-2 bg-white/10"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default MediaDashboardStats;
