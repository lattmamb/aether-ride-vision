import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Car, 
  MapPin, 
  Calendar, 
  Zap, 
  Clock, 
  Settings, 
  TrendingUp,
  Battery,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Eye,
  ArrowUpRight,
  User
} from 'lucide-react';

export default function DashboardPro() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Damage Assessment</h1>
          <p className="text-muted-foreground mt-1">Vehicle inspection and cost analysis</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="status-info">Need help? Ask your question!</Badge>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="dashboard-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              <span className="text-sm font-medium">Damage assessment</span>
            </div>
            <div className="w-12 h-0.5 bg-primary"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <span className="text-sm font-medium">Damage survey</span>
            </div>
            <div className="w-12 h-0.5 bg-muted"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-bold">3</div>
              <span className="text-sm text-muted-foreground">Final review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Damage Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Damage Summary */}
          <div className="dashboard-card p-6">
            <h2 className="text-xl font-semibold mb-6">Damage Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cost Estimate */}
              <div className="metric-card bg-primary/5 border-primary/20">
                <div className="metric-value text-primary">$790.58</div>
                <div className="metric-label">Estimated amount</div>
              </div>
              
              {/* Review Time */}
              <div className="metric-card bg-orange-500/5 border-orange-500/20">
                <div className="metric-value text-orange-500">2 weeks</div>
                <div className="metric-label">for review</div>
              </div>
              
              {/* Damaged Parts */}
              <div className="metric-card bg-red-500/5 border-red-500/20">
                <div className="metric-value text-red-500">4 parts</div>
                <div className="metric-label">damaged</div>
              </div>
            </div>
          </div>

          {/* Vehicle Visualization */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Parts overview</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-xs">3D View</Button>
                <Button variant="ghost" size="sm" className="text-xs">Schematic view</Button>
              </div>
            </div>
            
            {/* 3D Vehicle Display */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl h-80 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              <div className="text-center">
                <Car className="h-24 w-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">Interactive 3D vehicle model</p>
                <p className="text-xs text-muted-foreground mt-1">Click and drag to rotate</p>
              </div>
            </div>
          </div>

          {/* Parts Breakdown */}
          <div className="dashboard-card p-6">
            <h2 className="text-xl font-semibold mb-6">Parts overview</h2>
            
            <div className="space-y-4">
              {/* Front Damage */}
              <div className="glass-panel p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">@4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Front</h3>
                      <p className="text-sm text-muted-foreground">1 damage (scratches, dents)</p>
                      <p className="text-sm font-medium text-primary">$280.99 approximate cost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">Customize</Button>
                  </div>
                </div>
              </div>

              {/* Left Side Damage */}
              <div className="glass-panel p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">@5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Left side</h3>
                      <p className="text-sm text-muted-foreground">1 damage (deformations, abrasions)</p>
                      <p className="text-sm font-medium text-primary">$420.90 approximate cost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">Customize</Button>
                  </div>
                </div>
              </div>

              {/* Back Damage */}
              <div className="glass-panel p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">@1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Back</h3>
                      <p className="text-sm text-muted-foreground">2 damages (scratches, dents)</p>
                      <p className="text-sm font-medium text-primary">$89.69 approximate cost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">Customize</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - General Information */}
        <div className="space-y-6">
          {/* Vehicle Info */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">General Information</h2>
              <Badge className="status-info">NM-2548</Badge>
            </div>
            
            <div className="text-center mb-6">
              <Car className="h-20 w-20 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">Audi A4, 2008</h3>
              <p className="text-sm text-muted-foreground">SEDAN • 130,500 MILES DRIVEN • GASOLINE</p>
            </div>

            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Driver information
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Car className="mr-2 h-4 w-4" />
                Car details
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Accident details
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Accident history
              </Button>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Uploaded photos (15)</h2>
              <Button variant="ghost" size="sm">View all</Button>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Service Partners */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Service station partners</h2>
              <Button variant="ghost" size="sm">View all</Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 glass-panel rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">D&J Automotive Repair</p>
                  <p className="text-xs text-muted-foreground">2919 Princeton Dr NE Albuquerque, NM 87107</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 glass-panel rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Compa Customs</p>
                  <p className="text-xs text-muted-foreground">Auto body & paint</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4">
            <span className="text-lg font-semibold">Go to checkout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}