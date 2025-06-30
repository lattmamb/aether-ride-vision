import { Vehicle, SubscriptionPlan, ChargingStation } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'model-s',
    model: 'Model S',
    type: 'sedan',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
    price: 249,
    priceUnit: '/mo',
    tagline: 'Premium electric sedan with incredible range',
    features: [
      'Range: 405 miles',
      '0-60 mph in 3.1 seconds',
      'Autopilot included',
      'Premium interior',
      'Over-the-air updates'
    ],
    performance: {
      range: 405,
      topSpeed: 149,
      acceleration: 3.1,
    },
    available: true,
    colors: ['#FFFFFF', '#000000', '#C0C0C0', '#FF0000', '#0000FF'],
    colorImages: {
      '#FFFFFF': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
      '#000000': 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
      '#C0C0C0': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
      '#FF0000': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      '#0000FF': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'model-3',
    model: 'Model 3',
    type: 'sedan',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    price: 189,
    priceUnit: '/mo',
    tagline: 'Affordable electric sedan with amazing value',
    features: [
      'Range: 358 miles',
      '0-60 mph in 5.8 seconds',
      'Autopilot included',
      'Minimalist interior',
      'Over-the-air updates'
    ],
    performance: {
      range: 358,
      topSpeed: 140,
      acceleration: 5.8,
    },
    available: true,
    colors: ['#FFFFFF', '#FF0000', '#0000FF'],
    colorImages: {
      '#FFFFFF': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
      '#FF0000': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      '#0000FF': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'model-x',
    model: 'Model X',
    type: 'suv',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    price: 299,
    priceUnit: '/mo',
    tagline: 'Premium SUV with falcon wing doors',
    features: [
      'Range: 348 miles',
      '0-60 mph in 3.8 seconds',
      'Falcon wing doors',
      'Seats up to 7',
      'Autopilot included'
    ],
    performance: {
      range: 348,
      topSpeed: 155,
      acceleration: 3.8,
    },
    available: true,
    colors: ['#FFFFFF', '#000000', '#C0C0C0', '#0000FF'],
    colorImages: {
      '#FFFFFF': 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
      '#000000': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      '#C0C0C0': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      '#0000FF': 'https://images.unsplash.com/photo-1599912027611-404295ca7727?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'model-y',
    model: 'Model Y',
    type: 'suv',
    image: 'https://images.unsplash.com/photo-1599912027611-404295ca7727?w=800&h=600&fit=crop',
    price: 199,
    priceUnit: '/mo',
    tagline: 'Versatile electric crossover SUV',
    features: [
      'Range: 330 miles',
      '0-60 mph in 4.8 seconds',
      'Autopilot included',
      'Spacious interior',
      'Over-the-air updates'
    ],
    performance: {
      range: 330,
      topSpeed: 135,
      acceleration: 4.8,
    },
    available: true,
    colors: ['#FFFFFF', '#000000', '#C0C0C0', '#FF0000'],
    colorImages: {
      '#FFFFFF': 'https://images.unsplash.com/photo-1599912027611-404295ca7727?w=800&h=600&fit=crop',
      '#000000': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      '#C0C0C0': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      '#FF0000': 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&h=600&fit=crop'
    }
  },
  {
    id: 'cybertruck',
    model: 'Cybertruck',
    type: 'truck',
    image: 'https://images.unsplash.com/photo-1609258521614-c7dac3da4ad7?w=800&h=600&fit=crop',
    price: 349,
    priceUnit: '/mo',
    tagline: 'Futuristic electric pickup truck',
    features: [
      'Range: 500+ miles',
      '0-60 mph in 2.9 seconds',
      'Exoskeleton design',
      'Adaptive air suspension',
      'Up to 14,000 lb towing'
    ],
    performance: {
      range: 500,
      topSpeed: 130,
      acceleration: 2.9,
    },
    available: true,
    colors: ['#C0C0C0'],
    colorImages: {
      '#C0C0C0': 'https://images.unsplash.com/photo-1609258521614-c7dac3da4ad7?w=800&h=600&fit=crop'
    }
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'flex-month',
    name: 'Flex Monthly',
    price: 149,
    priceUnit: '/mo',
    duration: 'Monthly',
    features: [
      'Monthly renewal',
      'Switch vehicles once a month',
      'Basic insurance included',
      'Maintenance included',
      'Up to 1,000 miles/month'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 129,
    priceUnit: '/mo',
    duration: '3 Months',
    features: [
      '3-month commitment',
      'Switch vehicles once a month',
      'Standard insurance included',
      'Maintenance included',
      'Up to 1,500 miles/month'
    ],
    recommended: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 109,
    priceUnit: '/mo',
    duration: '6 Months',
    features: [
      '6-month commitment',
      'Switch vehicles anytime',
      'Premium insurance included',
      'Maintenance included',
      'Up to 2,000 miles/month'
    ]
  }
];

export const chargingStations: ChargingStation[] = [
  {
    id: 'cs-1',
    name: 'Downtown Supercharger',
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    address: '123 Market St, San Francisco, CA',
    available: 8,
    total: 12,
    chargingSpeed: 250
  },
  {
    id: 'cs-2',
    name: 'North Beach Station',
    location: {
      lat: 37.8010,
      lng: -122.4119
    },
    address: '456 Bay St, San Francisco, CA',
    available: 3,
    total: 8,
    chargingSpeed: 150
  },
  {
    id: 'cs-3',
    name: 'Mission District Hub',
    location: {
      lat: 37.7599,
      lng: -122.4148
    },
    address: '789 Valencia St, San Francisco, CA',
    available: 5,
    total: 10,
    chargingSpeed: 250
  }
];
