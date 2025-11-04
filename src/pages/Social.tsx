import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { useSEO } from '@/hooks/useSEO';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2,
  TrendingUp
} from 'lucide-react';

export default function Social() {
  useSEO({ 
    title: 'Unity Social | Connect with Your Community', 
    description: 'Connect, share, and engage with the Unity Fleet community' 
  });

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <Badge className="mb-4 bg-unity-purple">Coming Soon</Badge>
          <h1 className="text-5xl font-bold unity-gradient-purple">Unity Social</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your community, share experiences, and build meaningful relationships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 liquid-glass-hover">
            <div className="w-12 h-12 rounded-lg bg-unity-cyan/20 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-unity-cyan" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Feed</h3>
            <p className="text-muted-foreground">
              Stay updated with your local Unity Fleet community and share your experiences
            </p>
          </Card>

          <Card className="p-6 liquid-glass-hover">
            <div className="w-12 h-12 rounded-lg bg-unity-purple/20 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-unity-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Messaging</h3>
            <p className="text-muted-foreground">
              Connect with other members, share tips, and coordinate rides
            </p>
          </Card>

          <Card className="p-6 liquid-glass-hover">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Rewards</h3>
            <p className="text-muted-foreground">
              Earn rewards for engagement and contributing to the community
            </p>
          </Card>
        </div>

        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">This Platform is Under Development</h2>
          <p className="text-muted-foreground mb-6">
            We're building something amazing! Unity Social will launch soon with powerful features to connect our community.
          </p>
          <Button size="lg" className="liquid-glass-hover">
            Join Waitlist
          </Button>
        </Card>
      </div>
    </div>
  );
}