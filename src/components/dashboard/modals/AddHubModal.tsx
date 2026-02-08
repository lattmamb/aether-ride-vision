import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Zap, Loader2 } from 'lucide-react';

interface AddHubModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const amenityOptions = [
  { id: 'lounge', label: 'Lounge' },
  { id: 'coworking', label: 'Co-working Space' },
  { id: 'cafe', label: 'Café' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'wifi', label: 'Free Wi-Fi' },
  { id: 'evshop', label: 'EV Shop' },
];

export default function AddHubModal({ open, onOpenChange }: AddHubModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    totalStations: '',
    powerOutput: '250',
    operatingHours: '24/7'
  });

  const toggleAmenity = (amenityId: string) => {
    setAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(a => a !== amenityId)
        : [...prev, amenityId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.totalStations) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    toast.success(`Charging hub "${formData.name}" added successfully!`);
    onOpenChange(false);
    setFormData({
      name: '',
      address: '',
      totalStations: '',
      powerOutput: '250',
      operatingHours: '24/7'
    });
    setAmenities([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Add New Charging Hub
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Hub Name *</Label>
            <Input 
              id="name" 
              placeholder="e.g., Downtown Hub"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input 
              id="address" 
              placeholder="Full street address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="stations">Number of Stations *</Label>
              <Input 
                id="stations" 
                type="number"
                placeholder="e.g., 16"
                value={formData.totalStations}
                onChange={(e) => setFormData({...formData, totalStations: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Power Output (kW)</Label>
              <Select value={formData.powerOutput} onValueChange={(value) => setFormData({...formData, powerOutput: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="150">150 kW</SelectItem>
                  <SelectItem value="250">250 kW</SelectItem>
                  <SelectItem value="350">350 kW</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Operating Hours</Label>
            <Select value={formData.operatingHours} onValueChange={(value) => setFormData({...formData, operatingHours: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24/7">24/7</SelectItem>
                <SelectItem value="6am-10pm">6 AM - 10 PM</SelectItem>
                <SelectItem value="8am-8pm">8 AM - 8 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Amenities</Label>
            <div className="grid grid-cols-2 gap-2">
              {amenityOptions.map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={amenity.id}
                    checked={amenities.includes(amenity.id)}
                    onCheckedChange={() => toggleAmenity(amenity.id)}
                  />
                  <label 
                    htmlFor={amenity.id}
                    className="text-sm cursor-pointer"
                  >
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Adding...
                </>
              ) : (
                'Add Hub'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
