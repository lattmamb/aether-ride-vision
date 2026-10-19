import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import DemoNotice from '@/components/common/DemoNotice';
import { useSEO } from '@/hooks/useSEO';

/**
 * Confirmation can only exist after a verified payment provider response and a
 * persisted booking record. Neither is connected, so this page never shows a
 * confirmation, regardless of route state or refreshes.
 */
const BookingSuccess = () => {
  useSEO({ title: 'Booking status', description: 'Booking confirmation status' });
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 mt-14 md:mt-20">
        <div className="glass-card max-w-lg mx-auto p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold">No confirmed booking</h1>
          <DemoNotice title="Online booking not connected" className="text-left">
            Reservations cannot be confirmed online yet. No booking has been created and no payment was taken.
          </DemoNotice>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild><Link to="/vehicles">Browse vehicles</Link></Button>
            <Button asChild variant="outline"><Link to="/#contact">Contact the team</Link></Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingSuccess;
