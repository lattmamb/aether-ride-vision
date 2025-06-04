
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EmptyBookingState: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-16 mt-14 md:mt-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Booking Information Not Found</h2>
      <p className="mb-8 text-white/70">We couldn't find your booking information.</p>
      <Button 
        className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
        onClick={() => navigate('/')}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default EmptyBookingState;
