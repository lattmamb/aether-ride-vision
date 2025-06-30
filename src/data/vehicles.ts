import { Vehicle, SubscriptionPlan, ChargingStation } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'model-s',
    model: 'Model S',
    type: 'sedan',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png',
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
      '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png',
      '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Pearl-White.png',
      '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Midnight-Silver.png',
      '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Red-Multi-Coat.png',
      '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Deep-Blue.png'
    },
    angleImages: {
      0: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Pearl-White.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Midnight-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Red-Multi-Coat.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Hero-Desktop-Deep-Blue.png'
      },
      45: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Blue.png'
      },
      90: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Blue.png'
      },
      135: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Blue.png'
      },
      180: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-View-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-View-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-View-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-View-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-View-Blue.png'
      },
      225: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Rear-Side-Blue.png'
      },
      270: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Profile-View-Blue.png'
      },
      315: {
        '#FFFFFF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-White.png',
        '#000000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Black.png',
        '#C0C0C0': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Silver.png',
        '#FF0000': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Red.png',
        '#0000FF': 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Side-View-Blue.png'
      }
    },
    interiorImages: {
      0: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Dashboard.png',
      45: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Side.png',
      90: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Profile.png',
      135: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Rear.png',
      180: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Back.png',
      225: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Rear.png',
      270: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Profile.png',
      315: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Side.png'
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
