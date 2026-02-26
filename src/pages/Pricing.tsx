
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { vehicles, subscriptionPlans } from '@/data/vehicles';
import { Check, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('all');
  
  const filteredVehicles = selectedVehicleType === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.type === selectedVehicleType);

  const typeButtons = [
    { value: 'all', label: 'All Vehicles' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'truck', label: 'Truck' },
    { value: 'sports', label: 'Sports' },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 mt-14 md:mt-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect subscription plan for your lifestyle with no hidden fees or long-term commitments.
          </p>
          
          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center mt-8 glass-effect p-1.5 rounded-full">
            <button
              className={`px-4 py-2.5 rounded-full transition-all text-sm ${
                billingCycle === 'monthly' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2.5 rounded-full transition-all text-sm ${
                billingCycle === 'yearly' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-xs text-tesla-green ml-1">Save 15%</span>
            </button>
          </div>
        </div>

        {/* Vehicle Type Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {typeButtons.map((btn) => (
              <button
                key={btn.value}
                className={`px-4 py-2.5 rounded-full transition-all text-sm ${
                  selectedVehicleType === btn.value 
                    ? 'bg-primary text-primary-foreground' 
                    : 'glass-effect text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setSelectedVehicleType(btn.value)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {subscriptionPlans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 relative overflow-hidden rounded-2xl ${
                plan.recommended ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-xl">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="text-muted-foreground text-sm mb-4">{plan.duration}</div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${
                  billingCycle === 'yearly' 
                    ? Math.round(plan.price * 0.85) 
                    : plan.price
                }</span>
                <span className="text-muted-foreground text-sm">{plan.priceUnit}</span>
                {billingCycle === 'yearly' && (
                  <div className="text-tesla-green text-sm mt-1">
                    Save ${Math.round(plan.price * 0.15)}/mo with annual billing
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="p-1 rounded-full bg-primary/20 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full"
                onClick={() => navigate('/vehicles')}
              >
                Choose Vehicle
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* Vehicle Pricing */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Subscription Pricing</h2>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 glass-effect rounded-tl-xl">Model</th>
                  <th className="text-center p-4 glass-effect">Type</th>
                  <th className="text-center p-4 glass-effect">Monthly Price</th>
                  <th className="text-center p-4 glass-effect">Annual Price (Save 15%)</th>
                  <th className="text-center p-4 glass-effect">Availability</th>
                  <th className="text-center p-4 glass-effect rounded-tr-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map((vehicle, index) => (
                  <tr key={vehicle.id} className={index % 2 === 1 ? 'glass-effect' : ''}>
                    <td className="p-4">
                      <div className="flex items-center">
                        <img src={vehicle.image} alt={vehicle.model} className="h-12 mr-3 rounded-lg" />
                        <div>
                          <div className="font-medium">Tesla {vehicle.model}</div>
                          <div className="text-sm text-muted-foreground">{vehicle.tagline}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs glass-effect">
                        {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}
                      </span>
                    </td>
                    <td className="p-4 text-center font-medium">
                      ${vehicle.price}{vehicle.priceUnit}
                    </td>
                    <td className="p-4 text-center">
                      ${Math.round(vehicle.price * 0.85)}{vehicle.priceUnit}
                      <div className="text-tesla-green text-xs">Save ${Math.round(vehicle.price * 0.15)}/mo</div>
                    </td>
                    <td className="p-4 text-center">
                      {vehicle.available ? (
                        <span className="inline-flex items-center text-tesla-green text-sm">
                          <Check className="h-4 w-4 mr-1" />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-tesla-red text-sm">
                          <X className="h-4 w-4 mr-1" />
                          Coming Soon
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/vehicles/${vehicle.id}`)}
                        disabled={!vehicle.available}
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={vehicle.image} alt={vehicle.model} className="h-14 rounded-xl" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">Tesla {vehicle.model}</h3>
                    <p className="text-xs text-muted-foreground truncate">{vehicle.tagline}</p>
                  </div>
                  <span className="inline-block px-2 py-1 rounded-full text-xs glass-effect flex-shrink-0">
                    {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3 py-2 border-t border-b border-white/10">
                  <div>
                    <div className="text-xs text-muted-foreground">Monthly</div>
                    <div className="font-bold text-lg">${vehicle.price}<span className="text-xs text-muted-foreground">{vehicle.priceUnit}</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Annual</div>
                    <div className="font-bold text-lg">${Math.round(vehicle.price * 0.85)}<span className="text-xs text-muted-foreground">{vehicle.priceUnit}</span></div>
                    <div className="text-tesla-green text-xs">Save ${Math.round(vehicle.price * 0.15)}/mo</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  {vehicle.available ? (
                    <span className="inline-flex items-center text-tesla-green text-sm">
                      <Check className="h-4 w-4 mr-1" />
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-tesla-red text-sm">
                      <X className="h-4 w-4 mr-1" />
                      Coming Soon
                    </span>
                  )}
                  <Button
                    size="sm"
                    onClick={() => navigate(`/vehicles/${vehicle.id}`)}
                    disabled={!vehicle.available}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
