import React, { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';
import ProgressStepper from '@/components/booking/ProgressStepper';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { useSEO } from '@/hooks/useSEO';
import DemoNotice from '@/components/common/DemoNotice';
import { integrationStatus, NOT_CONNECTED_MESSAGE } from '@/lib/integrationStatus';
import { estimateMonthly, formatUSD, PENDING_EXPLANATION, PENDING_LABEL, isApproved } from '@/data/pricingCatalog';
import { BOOKING_STEPS } from '@/components/booking/steps';

const PaymentCheckout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookingState } = useBooking();
  const { vehicle, selectedPlan, bookingDetails } = bookingState;

  useSEO({ title: 'Checkout', description: 'Review your vehicle subscription request' });

  const incomplete = !vehicle || !selectedPlan || !bookingDetails || vehicle.id !== id;

  useEffect(() => {
    if (!incomplete) return;
    if (!vehicle || vehicle.id !== id || !selectedPlan) navigate(`/vehicles/${id}/plan`, { replace: true });
    else navigate(`/vehicles/${id}/book`, { replace: true });
  }, [incomplete, vehicle, selectedPlan, id, navigate]);

  if (incomplete) return null;

  const estimate = estimateMonthly(vehicle!, selectedPlan!);
  const canPay = integrationStatus.paymentProvider && integrationStatus.liveInventory && integrationStatus.bookingBackend && isApproved();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 mt-20">
        <Breadcrumbs />
        <ProgressStepper currentStep={3} steps={BOOKING_STEPS} />

        <div className="max-w-4xl mx-auto mt-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Review your request</h1>
            <p className="text-muted-foreground">Checkout is not available yet. Your details are saved on this device.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="dashboard-card p-8 space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" aria-hidden="true" />
                  Payment
                </h2>
                <DemoNotice title="Payment not connected">{NOT_CONNECTED_MESSAGE.paymentProvider}</DemoNotice>
                <DemoNotice title="Availability not verified">{NOT_CONNECTED_MESSAGE.liveInventory}</DemoNotice>
                <p className="text-sm text-muted-foreground">
                  Next step: contact the Unity Fleet team to confirm availability, final pricing and terms before any payment.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild><Link to="/#contact">Contact the team</Link></Button>
                  <Button variant="outline" onClick={() => navigate(`/vehicles/${id}/book`)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Edit details
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="dashboard-card p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-1">Estimate</h3>
                <p className="text-xs font-medium text-accent mb-4">{PENDING_LABEL}</p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-muted-foreground">Vehicle</dt><dd>{vehicle!.model}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Plan</dt><dd>{selectedPlan!.name} ({selectedPlan!.duration})</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Requested start</dt><dd>{bookingDetails!.startDate}</dd></div>
                </dl>
                <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
                  {estimate.lines.map((l) => (
                    <div key={l.label} className="flex justify-between"><span className="text-muted-foreground">{l.label}</span><span>{formatUSD(l.amount)}/mo</span></div>
                  ))}
                  <div className="flex justify-between font-bold pt-2 border-t border-border">
                    <span>Estimated monthly</span><span>{formatUSD(estimate.total)}/mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Not included: {estimate.excludes.join(', ').toLowerCase()}. {PENDING_EXPLANATION}
                  </p>
                </div>
                <Button disabled={!canPay} className="w-full mt-6" aria-describedby="pay-disabled-reason">
                  Payment unavailable
                </Button>
                <p id="pay-disabled-reason" className="text-xs text-muted-foreground mt-2">
                  Payment is disabled until a payment provider, live availability and approved pricing are connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentCheckout;
