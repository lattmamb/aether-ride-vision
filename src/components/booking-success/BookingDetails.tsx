
import React from 'react';
import { Calendar, MapPin, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import VehicleInfo from './VehicleInfo';
import BookingDetailItem from './BookingDetailItem';
import NextStepsInfo from './NextStepsInfo';
import { Vehicle, SubscriptionPlan } from '@/types';

interface BookingDetailsProps {
  vehicle: Vehicle;
  bookingDetails: {
    startDate?: Date;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
  };
  plan?: SubscriptionPlan;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ vehicle, bookingDetails, plan }) => {
  // Format booking date for display
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div 
      className="glass-card p-6 mb-8 relative overflow-hidden"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6E59A5]/5 to-transparent opacity-30"></div>
      <h2 className="text-xl font-bold mb-4 gradient-purple-text">Booking Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <VehicleInfo vehicle={vehicle} />
          
          <div className="space-y-4">
            <BookingDetailItem 
              icon={Calendar} 
              title="Delivery Date" 
              detail={bookingDetails.startDate ? formatDate(bookingDetails.startDate) : 'Not specified'} 
            />
            
            <BookingDetailItem 
              icon={MapPin} 
              title="Delivery Address" 
              detail={`${bookingDetails.address}, ${bookingDetails.city}, ${bookingDetails.state} ${bookingDetails.zipCode}`} 
            />
            
            <BookingDetailItem 
              icon={Car} 
              title="Subscription Plan" 
              detail={plan ? `${plan.name} - $${plan.price}${plan.priceUnit}` : 'Not specified'} 
            />
          </div>
        </div>
        
        <NextStepsInfo email={bookingDetails.email} vehicleModel={vehicle.model} />
      </div>
    </motion.div>
  );
};

export default BookingDetails;
