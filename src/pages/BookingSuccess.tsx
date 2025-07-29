
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

  // Extract booking details for BookingDetails component
  const bookingProps = {
    pickupLocation: bookingDetails.pickupLocation || "Tesla Store, Los Angeles",
    pickupDate: bookingDetails.pickupDate || "May 15, 2023",
    pickupTime: bookingDetails.pickupTime || "10:00 AM",
    returnDate: bookingDetails.returnDate || "May 22, 2023",
    returnTime: bookingDetails.returnTime || "4:00 PM",
    totalAmount: bookingDetails.totalPrice || 699.99,
    bookingId: bookingDetails.bookingId || "TSLA-" + Math.floor(Math.random() * 10000),
    vehicle,
    bookingDetails,
    plan
  };

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
          <BookingDetails {...bookingProps} />
          <ActionButtons />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default BookingSuccess;
