import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import { vehicles, subscriptionPlans } from '@/data/vehicles';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';
import ProgressStepper from '@/components/booking/ProgressStepper';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';

const SelectPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectedPlan, setVehicle, bookingState } = useBooking();
  const vehicle = vehicles.find((v) => v.id === id);
  const [selectedPlanId, setSelectedPlanId] = useState<string>(bookingState.selectedPlan?.id || '');

  useSEO({
    title: `Select Plan - ${vehicle?.model || 'Vehicle'}`,
    description: `Choose the perfect subscription plan for your ${vehicle?.model || 'Tesla vehicle'}`,
  });

  if (!vehicle) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/vehicles">
            <Button>Browse Vehicles</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const handleContinue = () => {
    const plan = subscriptionPlans.find((p) => p.id === selectedPlanId);
    if (plan) {
      setVehicle(vehicle);
      setSelectedPlan(plan);
      navigate(`/vehicles/${id}/book`);
    }
  };

  const steps = [
    { number: 1, title: 'Select Plan', description: 'Choose subscription' },
    { number: 2, title: 'Details', description: 'Enter information' },
    { number: 3, title: 'Payment', description: 'Complete checkout' },
    { number: 4, title: 'Confirmation', description: 'All set!' },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 mt-20">
        <Breadcrumbs />
        
        <ProgressStepper currentStep={1} steps={steps} />

        <div className="max-w-6xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              for {vehicle.model}
            </p>
            <p className="text-muted-foreground">
              Select the subscription that fits your lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`dashboard-card p-6 cursor-pointer transition-all hover:shadow-xl ${
                  selectedPlanId === plan.id
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/20'
                    : ''
                } ${plan.recommended ? 'relative overflow-hidden' : ''}`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.priceUnit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.duration} commitment
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    selectedPlanId === plan.id
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  {selectedPlanId === plan.id ? 'Selected' : 'Select Plan'}
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-between items-center max-w-4xl mx-auto"
          >
            <Button
              variant="outline"
              onClick={() => navigate(`/vehicles/${id}`)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vehicle
            </Button>

            <Button
              onClick={handleContinue}
              disabled={!selectedPlanId}
              className="gap-2 bg-primary hover:bg-primary/90"
              size="lg"
            >
              Continue to Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SelectPlan;
