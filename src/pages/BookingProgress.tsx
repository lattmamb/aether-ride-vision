import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Clock, 
  Car, 
  Calendar, 
  MapPin,
  Phone,
  Mail,
  ArrowLeft
} from 'lucide-react';

const BookingProgress = () => {
  const location = useLocation();
  const { bookingData } = location.state || {};

  const steps = [
    { id: 1, name: 'Booking Submitted', status: 'completed' },
    { id: 2, name: 'Verification', status: 'completed' },
    { id: 3, name: 'Vehicle Prep', status: 'current' },
    { id: 4, name: 'Delivery Scheduled', status: 'pending' },
    { id: 5, name: 'Ready to Drive', status: 'pending' },
  ];

  if (!bookingData) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 mt-14 md:mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">No Booking Found</h2>
          <p className="mb-8 text-white/70">Please complete a booking first.</p>
          <Button asChild className="bg-unity-purple hover:bg-unity-purple/90">
            <Link to="/vehicles">Browse Vehicles</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 mt-14 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/dashboard" className="flex items-center gap-2 text-white/70 hover:text-white">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-white mb-2">Booking Progress</h1>
            <p className="text-white/70">Track your Unity Fleet booking status</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Steps */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Booking Timeline</h2>
                
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {step.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : step.status === 'current' ? (
                          <Clock className="w-6 h-6 text-unity-purple animate-pulse" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-white/20" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-medium ${
                            step.status === 'completed' ? 'text-green-400' :
                            step.status === 'current' ? 'text-unity-purple' :
                            'text-white/60'
                          }`}>
                            {step.name}
                          </h3>
                          <Badge variant={
                            step.status === 'completed' ? 'default' :
                            step.status === 'current' ? 'secondary' :
                            'outline'
                          }>
                            {step.status}
                          </Badge>
                        </div>
                        
                        {step.status === 'current' && (
                          <p className="text-sm text-white/70 mt-1">
                            Your vehicle is being prepared for delivery
                          </p>
                        )}
                      </div>
                      
                      {index < steps.length - 1 && (
                        <div className="absolute left-3 mt-8 w-px h-6 bg-white/20" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Booking Details */}
            <div className="lg:col-span-1">
              <Card className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Booking Details</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-unity-purple" />
                    <div>
                      <p className="font-medium text-white">{bookingData.vehicle}</p>
                      <p className="text-sm text-white/70">Premium Electric</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-unity-teal" />
                    <div>
                      <p className="font-medium text-white">Start Date</p>
                      <p className="text-sm text-white/70">{bookingData.startDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="font-medium text-white">Delivery Address</p>
                      <p className="text-sm text-white/70">{bookingData.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="font-semibold text-white mb-3">Need Help?</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default BookingProgress;