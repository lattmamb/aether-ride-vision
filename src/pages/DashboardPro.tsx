import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useSEO } from '@/hooks/useSEO';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  User,
  FileText,
  History
} from 'lucide-react';

export default function DashboardPro() {
  useSEO({ title: 'Damage Assessment | Unity Fleet', description: 'Vehicle inspection and cost analysis.' });
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'3d' | 'schematic'>('3d');
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handleViewDamage = (partName: string) => {
    setSelectedPart(partName);
    toast.info(`Viewing damage details for ${partName}`);
  };

  const handleCustomize = (partName: string) => {
    setShowCustomize(true);
    toast.info(`Opening customization for ${partName}`);
  };

  const handleGoToCheckout = () => {
    navigate('/vehicles/1/checkout');
  };

  const mockPhotos = Array.from({ length: 15 }, (_, i) => `/placeholder.svg`);

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
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
              <span className="text-sm font-medium">Damage assessment</span>
            </div>
            <div className="w-12 h-0.5 bg-primary"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
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
              <div className="metric-card bg-destructive/5 border-destructive/20">
                <div className="metric-value text-destructive">4 parts</div>
                <div className="metric-label">damaged</div>
              </div>
            </div>
          </div>

          {/* Vehicle Visualization */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Parts overview</h2>
              <div className="flex gap-2">
                <Button 
                  variant={viewMode === '3d' ? 'default' : 'ghost'} 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setViewMode('3d')}
                >
                  3D View
                </Button>
                <Button 
                  variant={viewMode === 'schematic' ? 'default' : 'ghost'} 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setViewMode('schematic')}
                >
                  Schematic view
                </Button>
              </div>
            </div>
            
            {/* 3D Vehicle Display */}
            <div className={`relative rounded-xl h-80 flex items-center justify-center overflow-hidden transition-colors ${
              viewMode === '3d' 
                ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
                : 'bg-gradient-to-br from-slate-800 to-slate-700'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              <div className="text-center">
                <Car className="h-24 w-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  {viewMode === '3d' ? 'Interactive 3D vehicle model' : 'Schematic diagram view'}
                </p>
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
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">@4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Front</h3>
                      <p className="text-sm text-muted-foreground">1 damage (scratches, dents)</p>
                      <p className="text-sm font-medium text-primary">$280.99 approximate cost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleViewDamage('Front')}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleCustomize('Front')}>
                      Customize
                    </Button>
                  </div>
                </div>
              </div>

              {/* Left Side Damage */}
              <div className="glass-panel p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">@5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Left side</h3>
                      <p className="text-sm text-muted-foreground">1 damage (deformations, abrasions)</p>
                      <p className="text-sm font-medium text-primary">$420.90 approximate cost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleViewDamage('Left side')}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleCustomize('Left side')}>
                      Customize
                    </Button>
                  </div>
                </div>
              </div>

              {/* Back Damage */}
              <div className="glass-panel p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">@1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Back</h3>
                      <p className="text-sm text-muted-foreground">2 damages (scratches, dents)</p>
                      <p className="text-sm font-medium text-primary">$89.69 approximate cost</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleViewDamage('Back')}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleCustomize('Back')}>
                      Customize
                    </Button>
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
              <h3 className="font-semibold">Tesla Model S, 2023</h3>
              <p className="text-sm text-muted-foreground">SEDAN • 15,500 MILES DRIVEN • ELECTRIC</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="driver">
                <AccordionTrigger className="text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Driver information
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> John Smith</p>
                    <p><strong>License:</strong> Valid until 2026</p>
                    <p><strong>Phone:</strong> +1 (217) 555-0123</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="car">
                <AccordionTrigger className="text-sm">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Car details
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>VIN:</strong> 5YJ3E1EA1LF000001</p>
                    <p><strong>Color:</strong> Pearl White</p>
                    <p><strong>Year:</strong> 2023</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accident">
                <AccordionTrigger className="text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Accident details
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> January 15, 2025</p>
                    <p><strong>Location:</strong> Decatur, IL</p>
                    <p><strong>Type:</strong> Minor collision</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="history">
                <AccordionTrigger className="text-sm">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4" />
                    Accident history
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <p>No previous accidents on record.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Photo Gallery */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Uploaded photos (15)</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowPhotoGallery(true)}>
                View all
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-muted rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setShowPhotoGallery(true)}
                ></div>
              ))}
            </div>
          </div>

          {/* Service Partners */}
          <div className="dashboard-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Service station partners</h2>
              <Button variant="ghost" size="sm" onClick={() => toast.info('Viewing all service partners')}>
                View all
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 glass-panel rounded-lg cursor-pointer hover:bg-muted/50" onClick={() => toast.info('Opening D&J Automotive Repair details')}>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">D&J Automotive Repair</p>
                  <p className="text-xs text-muted-foreground">2919 Princeton Dr NE Albuquerque, NM 87107</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 glass-panel rounded-lg cursor-pointer hover:bg-muted/50" onClick={() => toast.info('Opening Compa Customs details')}>
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
          <Button className="w-full py-6" onClick={handleGoToCheckout}>
            <span className="text-lg font-semibold">Go to checkout</span>
          </Button>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <Dialog open={showPhotoGallery} onOpenChange={setShowPhotoGallery}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Damage Photos (15)</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {mockPhotos.map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-muted rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              ></div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Customize Modal */}
      <Dialog open={showCustomize} onOpenChange={setShowCustomize}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Customize Part</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p className="text-muted-foreground">Customize repair options for this part.</p>
            <div className="space-y-2">
              <label className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <input type="radio" name="repair" defaultChecked />
                <span>Standard Repair - $280.99</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <input type="radio" name="repair" />
                <span>Premium Repair - $350.00</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <input type="radio" name="repair" />
                <span>Part Replacement - $450.00</span>
              </label>
            </div>
            <Button className="w-full" onClick={() => {
              setShowCustomize(false);
              toast.success('Repair option saved');
            }}>
              Save Selection
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
