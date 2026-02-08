import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Car, Loader2 } from 'lucide-react';

interface AddVehicleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddVehicleModal({ open, onOpenChange }: AddVehicleModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    model: '',
    type: '',
    vin: '',
    color: '',
    status: 'available',
    licensePlate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.model || !formData.type || !formData.vin) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    toast.success(`${formData.model} added to fleet successfully!`);
    onOpenChange(false);
    setFormData({
      model: '',
      type: '',
      vin: '',
      color: '',
      status: 'available',
      licensePlate: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Add New Vehicle
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="model">Model *</Label>
              <Select value={formData.model} onValueChange={(value) => setFormData({...formData, model: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Model S">Model S</SelectItem>
                  <SelectItem value="Model 3">Model 3</SelectItem>
                  <SelectItem value="Model X">Model X</SelectItem>
                  <SelectItem value="Model Y">Model Y</SelectItem>
                  <SelectItem value="Cybertruck">Cybertruck</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Type *</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Truck">Truck</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vin">VIN Number *</Label>
            <Input 
              id="vin" 
              placeholder="e.g., 5YJ3E1EA1LF000001"
              value={formData.vin}
              onChange={(e) => setFormData({...formData, vin: e.target.value.toUpperCase()})}
              maxLength={17}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Select value={formData.color} onValueChange={(value) => setFormData({...formData, color: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="White">Pearl White</SelectItem>
                  <SelectItem value="Black">Solid Black</SelectItem>
                  <SelectItem value="Red">Red Multi-Coat</SelectItem>
                  <SelectItem value="Blue">Deep Blue</SelectItem>
                  <SelectItem value="Silver">Midnight Silver</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="licensePlate">License Plate</Label>
              <Input 
                id="licensePlate" 
                placeholder="e.g., ABC-1234"
                value={formData.licensePlate}
                onChange={(e) => setFormData({...formData, licensePlate: e.target.value.toUpperCase()})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Initial Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="maintenance">In Maintenance</SelectItem>
                <SelectItem value="charging">Charging</SelectItem>
              </SelectContent>
            </Select>
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
                'Add Vehicle'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
