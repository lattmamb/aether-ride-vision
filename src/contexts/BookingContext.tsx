import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle, SubscriptionPlan } from '@/types';

interface BookingState {
  vehicle: Vehicle | null;
  selectedPlan: SubscriptionPlan | null;
  bookingDetails: {
    startDate: string;
    endDate: string;
    pickupLocation: string;
    deliveryAddress: string;
  } | null;
  currentStep: number;
}

interface BookingContextType {
  bookingState: BookingState;
  setVehicle: (vehicle: Vehicle) => void;
  setSelectedPlan: (plan: SubscriptionPlan) => void;
  setBookingDetails: (details: BookingState['bookingDetails']) => void;
  setCurrentStep: (step: number) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const initialState: BookingState = {
  vehicle: null,
  selectedPlan: null,
  bookingDetails: null,
  currentStep: 1,
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookingState, setBookingState] = useState<BookingState>(() => {
    const saved = localStorage.getItem('bookingState');
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('bookingState', JSON.stringify(bookingState));
  }, [bookingState]);

  const setVehicle = (vehicle: Vehicle) => {
    setBookingState((prev) => ({ ...prev, vehicle, currentStep: 1 }));
  };

  const setSelectedPlan = (plan: SubscriptionPlan) => {
    setBookingState((prev) => ({ ...prev, selectedPlan: plan, currentStep: 2 }));
  };

  const setBookingDetails = (details: BookingState['bookingDetails']) => {
    setBookingState((prev) => ({ ...prev, bookingDetails: details, currentStep: 3 }));
  };

  const setCurrentStep = (step: number) => {
    setBookingState((prev) => ({ ...prev, currentStep: step }));
  };

  const clearBooking = () => {
    setBookingState(initialState);
    localStorage.removeItem('bookingState');
  };

  return (
    <BookingContext.Provider
      value={{
        bookingState,
        setVehicle,
        setSelectedPlan,
        setBookingDetails,
        setCurrentStep,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
};
