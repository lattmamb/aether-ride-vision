
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, DollarSign, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Vehicle, SubscriptionPlan } from '@/types';
import { useNavigate } from 'react-router-dom';

interface ConfigurationPanelProps {
  vehicle: Vehicle;
  plans: SubscriptionPlan[];
  selectedPlan: string;
  onPlanChange: (planId: string) => void;
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  vehicle,
  plans,
  selectedPlan,
  onPlanChange
}) => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState([3]);
  const [location, setLocation] = useState('downtown');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const selectedPlanData = plans.find(p => p.id === selectedPlan);
  const basePricePerMonth = selectedPlanData?.price || vehicle.price;
  const totalMonths = duration[0];
  const totalPrice = basePricePerMonth * totalMonths;

  const locations = [
    { id: 'downtown', name: 'Downtown Hub', distance: '2.1 mi', available: true },
    { id: 'airport', name: 'Airport Terminal', distance: '8.5 mi', available: true },
    { id: 'westside', name: 'Westside Center', distance: '4.2 mi', available: false },
    { id: 'marina', name: 'Marina District', distance: '3.8 mi', available: true }
  ];

  const addOnOptions = [
    { id: 'premium-insurance', name: 'Premium Insurance', price: 29 },
    { id: 'concierge', name: 'Concierge Service', price: 49 },
    { id: 'maintenance-plus', name: 'Maintenance Plus', price: 19 },
    { id: 'roadside-24-7', name: '24/7 Roadside', price: 15 }
  ];

  const handleAddOnToggle = (addOnId: string) => {
    setAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleBookNow = () => {
    setIsCalculating(true);
    setTimeout(() => {
      navigate(`/book/${vehicle.id}`, {
        state: {
          planId: selectedPlan,
          duration: totalMonths,
          location,
          addOns,
          totalPrice
        }
      });
    }, 1000);
  };

  const addOnTotal = addOns.reduce((sum, addOnId) => {
    const addOn = addOnOptions.find(a => a.id === addOnId);
    return sum + (addOn?.price || 0);
  }, 0);

  const finalTotal = totalPrice + (addOnTotal * totalMonths);

  return (
    <Card className="glass-card p-6 sticky top-24">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 gradient-purple-text">Configure Your Rental</h3>
        <p className="text-white/70">Customize your Tesla experience</p>
      </div>

      {/* Subscription Plans */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-white">Subscription Plan</h4>
        <div className="space-y-3">
          {plans.map(plan => (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedPlan === plan.id
                  ? 'border-[#9b87f5] bg-[#9b87f5]/10'
                  : 'border-glass-border hover:border-white/30'
              }`}
              onClick={() => onPlanChange(plan.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h5 className="font-medium text-white">{plan.name}</h5>
                  <p className="text-sm text-white/70">{plan.duration}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-white">${plan.price}</span>
                  <span className="text-sm text-white/70">/mo</span>
                  {plan.recommended && (
                    <Badge className="ml-2 bg-[#9b87f5] text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Duration Slider */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-white flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Duration: {duration[0]} month{duration[0] > 1 ? 's' : ''}
        </h4>
        <Slider
          value={duration}
          onValueChange={setDuration}
          max={12}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-white/70 mt-2">
          <span>1 month</span>
          <span>12 months</span>
        </div>
      </div>

      {/* Location Selection */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-white flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          Pickup Location
        </h4>
        <div className="space-y-2">
          {locations.map(loc => (
            <motion.div
              key={loc.id}
              whileHover={{ scale: 1.02 }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                location === loc.id
                  ? 'border-[#9b87f5] bg-[#9b87f5]/10'
                  : 'border-glass-border hover:border-white/30'
              } ${!loc.available ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => loc.available && setLocation(loc.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-white font-medium">{loc.name}</span>
                  <span className="text-sm text-white/70 ml-2">{loc.distance}</span>
                </div>
                {loc.available ? (
                  <Badge variant="outline" className="text-tesla-green border-tesla-green">
                    Available
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-tesla-red border-tesla-red">
                    Unavailable
                  </Badge>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-white">Add-ons</h4>
        <div className="space-y-2">
          {addOnOptions.map(addOn => (
            <motion.div
              key={addOn.id}
              whileHover={{ scale: 1.02 }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                addOns.includes(addOn.id)
                  ? 'border-[#9b87f5] bg-[#9b87f5]/10'
                  : 'border-glass-border hover:border-white/30'
              }`}
              onClick={() => handleAddOnToggle(addOn.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {addOns.includes(addOn.id) && (
                    <Check className="w-4 h-4 text-[#9b87f5] mr-2" />
                  )}
                  <span className="text-white">{addOn.name}</span>
                </div>
                <span className="text-white/70">+${addOn.price}/mo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Price Summary */}
      <div className="mb-6 p-4 glass-card rounded-lg">
        <h4 className="font-semibold mb-3 text-white flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />
          Price Summary
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-white/70">
            <span>Base ({totalMonths} month{totalMonths > 1 ? 's' : ''})</span>
            <span>${totalPrice}</span>
          </div>
          {addOnTotal > 0 && (
            <div className="flex justify-between text-white/70">
              <span>Add-ons ({totalMonths} month{totalMonths > 1 ? 's' : ''})</span>
              <span>${addOnTotal * totalMonths}</span>
            </div>
          )}
          <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-white text-lg">
            <span>Total</span>
            <span>${finalTotal}</span>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <Button
        onClick={handleBookNow}
        disabled={!vehicle.available || isCalculating}
        className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-lg py-6 font-medium"
      >
        {isCalculating ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Processing...
          </div>
        ) : (
          `Book Now - $${finalTotal}`
        )}
      </Button>
    </Card>
  );
};

export default ConfigurationPanel;
