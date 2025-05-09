
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';
import BookingDetailItem from './BookingDetailItem';
import NextStepsInfo from './NextStepsInfo';

interface BookingDetailsProps {
  bookingId: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  totalAmount: number;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({
  bookingId,
  pickupLocation,
  pickupDate,
  pickupTime,
  returnDate,
  returnTime,
  totalAmount,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formattedTotal = formatCurrency(totalAmount);

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const detailVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="glass-card p-8 mb-8 relative overflow-hidden">
        {/* Decorative gradient blob in background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#9b87f5]/30 to-[#6E59A5]/20 blur-3xl pointer-events-none"></div>
        
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
          Booking Details
        </h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={detailVariants}>
            <BookingDetailItem 
              icon={MapPin} 
              title="Pickup Location" 
              detail={pickupLocation} 
            />
          </motion.div>
          
          <motion.div variants={detailVariants}>
            <BookingDetailItem 
              icon={Calendar} 
              title="Pickup Date" 
              detail={pickupDate} 
            />
          </motion.div>
          
          <motion.div variants={detailVariants}>
            <BookingDetailItem 
              icon={Clock} 
              title="Pickup Time" 
              detail={pickupTime} 
            />
          </motion.div>
          
          <motion.div variants={detailVariants}>
            <BookingDetailItem 
              icon={Calendar} 
              title="Return Date" 
              detail={returnDate} 
            />
          </motion.div>
          
          <motion.div variants={detailVariants}>
            <BookingDetailItem 
              icon={Clock} 
              title="Return Time" 
              detail={returnTime} 
            />
          </motion.div>
          
          <motion.div variants={detailVariants}>
            <BookingDetailItem 
              icon={CreditCard} 
              title="Total Amount" 
              detail={formattedTotal} 
            />
          </motion.div>
        </motion.div>
        
        <NextStepsInfo />
      </div>
    </div>
  );
};

export default BookingDetails;
