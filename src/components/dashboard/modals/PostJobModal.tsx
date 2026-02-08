import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Briefcase, Loader2, X, Plus } from 'lucide-react';

interface PostJobModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PostJobModal({ open, onOpenChange }: PostJobModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    location: '',
    salaryMin: '',
    salaryMax: '',
    salaryPeriod: 'yearly',
    description: ''
  });

  const addRequirement = () => {
    if (newRequirement.trim() && requirements.length < 6) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.type || !formData.location || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    toast.success(`Job posting "${formData.title}" created successfully!`);
    onOpenChange(false);
    setFormData({
      title: '',
      type: '',
      location: '',
      salaryMin: '',
      salaryMax: '',
      salaryPeriod: 'yearly',
      description: ''
    });
    setRequirements([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Post New Job
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title *</Label>
            <Input 
              id="title" 
              placeholder="e.g., Senior Vehicle Operations Specialist"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Job Type *</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input 
                id="location" 
                placeholder="e.g., Decatur, IL"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Salary Range</Label>
            <div className="flex gap-2 items-center">
              <Input 
                type="number" 
                placeholder="Min"
                value={formData.salaryMin}
                onChange={(e) => setFormData({...formData, salaryMin: e.target.value})}
              />
              <span className="text-muted-foreground">to</span>
              <Input 
                type="number" 
                placeholder="Max"
                value={formData.salaryMax}
                onChange={(e) => setFormData({...formData, salaryMax: e.target.value})}
              />
              <Select value={formData.salaryPeriod} onValueChange={(value) => setFormData({...formData, salaryPeriod: value})}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">per hour</SelectItem>
                  <SelectItem value="yearly">per year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description *</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the role, responsibilities, and ideal candidate..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Requirements (up to 6)</Label>
            <div className="flex gap-2">
              <Input 
                placeholder="Add a requirement"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
              />
              <Button type="button" variant="outline" onClick={addRequirement} disabled={requirements.length >= 6}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {requirements.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {requirements.map((req, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {req}
                    <X 
                      className="h-3 w-3 ml-2 cursor-pointer hover:text-destructive" 
                      onClick={() => removeRequirement(index)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Posting...
                </>
              ) : (
                'Post Job'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
