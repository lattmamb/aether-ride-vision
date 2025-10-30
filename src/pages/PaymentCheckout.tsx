import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard, Shield, Lock } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';
import ProgressStepper from '@/components/booking/ProgressStepper';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';

const PaymentCheckout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookingState, clearBooking } = useBooking();
  const { toast } = useToast();

  useSEO({
    title: 'Payment Checkout',
    description: 'Complete your Tesla vehicle booking',
  });

  const { vehicle, selectedPlan, bookingDetails } = bookingState;

  if (!vehicle || !selectedPlan || !bookingDetails) {
    navigate(`/vehicles/${id}`);
    return null;
  }

  const totalCost = selectedPlan.price + vehicle.price;

  const handlePayment = async () => {
    // Simulate payment processing
    toast({
      title: 'Processing payment...',
      description: 'Please wait while we process your payment.',
    });

    setTimeout(() => {
      toast({
        title: 'Payment successful!',
        description: 'Your booking has been confirmed.',
      });

      navigate('/booking-success', {
        state: {
          vehicle,
          plan: selectedPlan,
          bookingDetails: {
            ...bookingDetails,
            bookingId: 'TSLA-' + Math.floor(Math.random() * 100000),
            totalPrice: totalCost,
            pickupDate: bookingDetails.startDate,
            pickupLocation: bookingDetails.pickupLocation,
          },
        },
      });

      clearBooking();
    }, 2000);
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
        
        <ProgressStepper currentStep={3} steps={steps} />

        <div className="max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Secure Payment
            </h1>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Your payment is secure and encrypted
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="dashboard-card p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Payment Method
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Lock className="w-5 h-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="dashboard-card p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle</span>
                    <span className="font-medium">{vehicle.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-medium">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{selectedPlan.duration}</span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Subscription</span>
                      <span>${selectedPlan.price}/mo</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Vehicle Fee</span>
                      <span>${vehicle.price}/mo</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-primary">
                        ${totalCost}/mo
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                >
                  Complete Payment
                </Button>

                <Button
                  variant="outline"
                  onClick={() => navigate(`/vehicles/${id}/book`)}
                  className="w-full mt-3 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Details
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentCheckout;
