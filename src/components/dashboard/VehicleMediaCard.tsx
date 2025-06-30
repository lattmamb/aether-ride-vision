
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play, Maximize2, Settings, Zap } from 'lucide-react';
import VideoBackground from '@/components/ui/VideoBackground';

interface VehicleMediaCardProps {
  vehicle: any;
  subscriptionProgress: number;
  remainingMiles: number;
  totalMiles: number;
  remainingDays: number;
}

const VehicleMediaCard: React.FC<VehicleMediaCardProps> = ({
  vehicle,
  subscriptionProgress,
  remainingMiles,
  totalMiles,
  remainingDays
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card className="glass-card overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Vehicle Media Section */}
        <div className="lg:col-span-3 relative">
          <AspectRatio ratio={16/10}>
            {showVideo ? (
              <VideoBackground
                src="/placeholder-tesla-video.mp4"
                fallbackImage={vehicle.image}
                overlay={false}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </VideoBackground>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowVideo(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </Button>
              </div>
            )}
          </AspectRatio>

          {/* Vehicle Controls Overlay */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-red-500/90 text-white">
              <Zap className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Vehicle Details Section */}
        <div className="lg:col-span-2 p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-white">{vehicle.model}</h2>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Manage
              </Button>
            </div>
            <p className="text-white/70">{vehicle.tagline}</p>
          </div>

          {/* Progress Indicators */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-white/70">Subscription Progress</span>
                <span className="font-medium text-white">{remainingDays} days left</span>
              </div>
              <Progress value={subscriptionProgress} className="h-2 bg-white/10" />
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-white/70">Mileage Usage</span>
                <span className="font-medium text-white">{remainingMiles} / {totalMiles} miles</span>
              </div>
              <Progress value={(remainingMiles / totalMiles) * 100} className="h-2 bg-white/10" />
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-white">{vehicle.performance.range}</div>
              <div className="text-sm text-white/70">Range (mi)</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-white">{vehicle.performance.acceleration}s</div>
              <div className="text-sm text-white/70">0-60 mph</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
              Drive Now
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VehicleMediaCard;
