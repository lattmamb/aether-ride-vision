
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, AlertCircle, XCircle, Car } from 'lucide-react';

interface BookingStatusProps {
  booking: {
    id: string;
    status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
    vehicle: string;
    startDate: string;
    endDate: string;
    totalAmount: number;
  };
  onModify?: () => void;
  onCancel?: () => void;
}

const BookingStatus: React.FC<BookingStatusProps> = ({ booking, onModify, onCancel }) => {
  const getStatusIcon = () => {
    switch (booking.status) {
      case 'pending':
        return <Clock className="w-5 h-5" />;
      case 'confirmed':
        return <CheckCircle className="w-5 h-5" />;
      case 'active':
        return <Car className="w-5 h-5" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getStatusColor = () => {
    switch (booking.status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'confirmed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const statusSteps = [
    { key: 'pending', label: 'Booking Submitted' },
    { key: 'confirmed', label: 'Payment Confirmed' },
    { key: 'active', label: 'Vehicle Active' },
    { key: 'completed', label: 'Booking Complete' }
  ];

  const currentStepIndex = statusSteps.findIndex(step => step.key === booking.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card gradient-border-flow p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor()}`}>
            {getStatusIcon()}
          </div>
          <div>
            <h3 className="text-xl font-bold">Booking #{booking.id}</h3>
            <p className="text-white/70">{booking.vehicle}</p>
          </div>
        </div>
        <Badge className={getStatusColor()}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </Badge>
      </div>

      {booking.status !== 'cancelled' && (
        <div className="mb-6">
          <div className="flex items-center justify-between relative">
            {statusSteps.map((step, index) => (
              <div key={step.key} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    index <= currentStepIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 text-white/50'
                  }`}
                >
                  {index < currentStepIndex ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="text-xs mt-2 text-center text-white/70">
                  {step.label}
                </span>
                {index < statusSteps.length - 1 && (
                  <div
                    className={`absolute top-4 h-0.5 transition-all ${
                      index < currentStepIndex ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-white/20'
                    }`}
                    style={{
                      left: `${(100 / (statusSteps.length - 1)) * index + 12.5}%`,
                      width: `${100 / (statusSteps.length - 1) - 25}%`
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="glass-card p-4">
          <div className="text-sm text-white/70">Start Date</div>
          <div className="font-medium">{new Date(booking.startDate).toLocaleDateString()}</div>
        </Card>
        <Card className="glass-card p-4">
          <div className="text-sm text-white/70">End Date</div>
          <div className="font-medium">{new Date(booking.endDate).toLocaleDateString()}</div>
        </Card>
      </div>

      <div className="glass-card p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-white/70">Total Amount</span>
          <span className="text-xl font-bold gradient-accent-text">
            ${booking.totalAmount.toFixed(2)}
          </span>
        </div>
      </div>

      {(booking.status === 'pending' || booking.status === 'confirmed') && (
        <div className="flex gap-3">
          {onModify && (
            <Button
              variant="outline"
              onClick={onModify}
              className="flex-1 border-glass-border bg-glass hover:bg-glass-highlight"
            >
              Modify Booking
            </Button>
          )}
          {onCancel && (
            <Button
              variant="outline"
              onClick={onCancel}
              className="flex-1 border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400"
            >
              Cancel Booking
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default BookingStatus;
