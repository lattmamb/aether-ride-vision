
export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  components: string[];
}

export interface ChatContext {
  selectedVehicle?: string;
  bookingStep?: number;
  userPreferences?: {
    priceRange?: [number, number];
    vehicleType?: string;
    location?: string;
  };
}
