
import React from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import SuccessHeader from '@/components/booking-success/SuccessHeader';
import BookingDetails from '@/components/booking-success/BookingDetails';
import ActionButtons from '@/components/booking-success/ActionButtons';
import EmptyBookingState from '@/components/booking-success/EmptyBookingState';

const BookingSuccess = () => {
  const location = useLocation();
  const { vehicle, bookingDetails, plan } = location.state || {};

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // If no booking data is found, show empty state
  if (!vehicle || !bookingDetails) {
    return (
      <MainLayout>
        <EmptyBookingState />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto">
          <SuccessHeader />
          <BookingDetails 
            vehicle={vehicle} 
            bookingDetails={bookingDetails} 
            plan={plan} 
          />
          <ActionButtons />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default BookingSuccess;
