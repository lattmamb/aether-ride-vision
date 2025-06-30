
import React from 'react';
import { ModernPricingPage, PricingCardProps } from '@/components/ui/animated-glassy-pricing';
import { vehicles, subscriptionPlans } from '@/data/vehicles';

const Pricing = () => {
  // Convert subscription plans to pricing cards format
  const pricingPlans: PricingCardProps[] = subscriptionPlans.map((plan, index) => ({
    planName: plan.name,
    description: plan.duration,
    price: plan.price.toString(),
    features: plan.features,
    buttonText: 'Choose Plan',
    isPopular: plan.recommended,
    buttonVariant: plan.recommended ? 'primary' : 'secondary'
  }));

  return (
    <ModernPricingPage
      title={
        <>
          Simple, <span className="gradient-luxury-text">Transparent</span> Pricing
        </>
      }
      subtitle="Choose the perfect subscription plan for your lifestyle with no hidden fees or long-term commitments."
      plans={pricingPlans}
      showAnimatedBackground={true}
    />
  );
};

export default Pricing;
