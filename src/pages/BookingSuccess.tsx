
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Check, Calendar, MapPin, Car, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const BookingSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicle, bookingDetails, plan } = location.state || {};

  useEffect(() => {
    // Show confetti effect when component mounts
    if (vehicle && bookingDetails) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      
      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };
      
      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        
        const particleCount = 50 * (timeLeft / duration);
        
        // Since they are firing from different positions,
        // we need to make separate calls
        confetti({
          particleCount: Math.floor(randomInRange(10, 25)),
          spread: randomInRange(35, 70),
          origin: { x: randomInRange(0.1, 0.3), y: randomInRange(0.3, 0.5) },
          colors: ['#9b87f5', '#6E59A5', '#33C3F0', '#FFFFFF']
        });
        confetti({
          particleCount: Math.floor(randomInRange(10, 25)),
          spread: randomInRange(35, 70),
          origin: { x: randomInRange(0.7, 0.9), y: randomInRange(0.3, 0.5) },
          colors: ['#9b87f5', '#6E59A5', '#33C3F0', '#FFFFFF']
        });
      }, 250);
      
      return () => clearInterval(interval);
    }
  }, [vehicle, bookingDetails]);

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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // If no booking data is found, redirect to homepage
  if (!vehicle || !bookingDetails) {
    return (
      <MainLayout>
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
      </MainLayout>
    );
  }

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
    <MainLayout>
      <motion.div 
        className="container mx-auto px-4 py-16 mt-14 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <motion.div 
            className="glass-card p-8 text-center mb-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 to-transparent opacity-50"></div>
            <motion.div 
              className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-tesla-green/20 text-tesla-green mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, times: [0, 0.6, 1] }}
            >
              <Check className="h-10 w-10" />
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-white to-[#9b87f5]/80 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Booking Confirmed!
            </motion.h1>
            <motion.p 
              className="text-lg text-white/70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Your Tesla {vehicle.model} subscription has been successfully booked.
            </motion.p>
          </motion.div>
          
          {/* Booking Details */}
          <motion.div 
            className="glass-card p-6 mb-8 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6E59A5]/5 to-transparent opacity-30"></div>
            <h2 className="text-xl font-bold mb-4 gradient-purple-text">Booking Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 w-24 bg-white/5 p-2 rounded-lg">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.model} 
                      className="w-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-white">Tesla {vehicle.model}</h3>
                    <p className="text-sm text-white/70">{vehicle.tagline}</p>
                  </div>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Calendar className="h-5 w-5 text-[#9b87f5] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Delivery Date</h4>
                      <p className="text-white/70">
                        {bookingDetails.startDate ? formatDate(bookingDetails.startDate) : 'Not specified'}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="h-5 w-5 text-[#9b87f5] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Delivery Address</h4>
                      <p className="text-white/70">
                        {bookingDetails.address}, {bookingDetails.city}, {bookingDetails.state} {bookingDetails.zipCode}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Car className="h-5 w-5 text-[#9b87f5] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Subscription Plan</h4>
                      <p className="text-white/70">
                        {plan?.name} - ${plan?.price}{plan?.priceUnit}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-3 text-white">Next Steps</h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-white">Check your email</p>
                      <p className="text-sm text-white/70">
                        We've sent a confirmation to {bookingDetails.email} with all the details of your booking.
                      </p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-white">Prepare for delivery</p>
                      <p className="text-sm text-white/70">
                        One of our representatives will contact you to confirm delivery details and answer any questions.
                      </p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9b87f5]/20 text-[#9b87f5] flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-white">Welcome aboard!</p>
                      <p className="text-sm text-white/70">
                        Enjoy your new Tesla {vehicle.model} subscription. You'll receive a walkthrough on delivery day.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              variant="outline" 
              className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 text-white"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              onClick={() => navigate('/')}
            >
              Back to Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default BookingSuccess;
