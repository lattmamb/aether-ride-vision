export interface Vehicle {
  id: string;
  model: string;
  type: 'sedan' | 'suv' | 'truck' | 'sports';
  image: string;
  price: number;
  priceUnit: string;
  tagline: string;
  features: string[];
  performance: {
    range: number;
    topSpeed: number;
    acceleration: number;
  };
  available: boolean;
  colors: string[];
  colorImages?: {
    [key: string]: string;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  priceUnit: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export interface ChargingStation {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  available: number;
  total: number;
  chargingSpeed: number;
}

// Vehicle Tracking
export interface VehicleLocation {
  vehicleId: string;
  vehicleName: string;
  latitude: number;
  longitude: number;
  heading: number;
  speed: number;
  batteryLevel: number;
  status: 'active' | 'available' | 'charging' | 'maintenance';
  lastUpdate: Date;
  driverId?: string;
}

// Job Platform
export interface Job {
  id: string;
  title: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  location: string;
  salary: {
    min: number;
    max: number;
    period: 'hourly' | 'yearly';
  };
  description: string;
  requirements: string[];
  postedDate: Date;
  applicants: number;
}

export interface JobApplication {
  id: string;
  jobId: string;
  applicantName: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'interviewed' | 'hired' | 'rejected';
  appliedDate: Date;
}

// Charging Hubs
export interface ChargingHub {
  id: string;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  totalStations: number;
  availableStations: number;
  powerOutput: number;
  amenities: string[];
  operatingHours: string;
  energyDeliveredToday: number;
  revenueToday: number;
  utilization: number;
}

export interface ChargingSession {
  id: string;
  hubId: string;
  stationNumber: number;
  vehicleId: string;
  startTime: Date;
  energyDelivered: number;
  cost: number;
  status: 'active' | 'completed';
}

export interface UserBooking {
  id: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  planId: string;
  totalCost: number;
}
