
export interface IllinoisLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  county: string;
  type: 'pickup' | 'charging' | 'hybrid';
  coordinates: { lat: number; lng: number };
  renewable_percentage: number;
  energy_source: 'solar' | 'wind' | 'mixed' | 'grid';
  capacity: number;
  available_vehicles: number;
  amenities: string[];
  hours: string;
  cta_connection?: string;
  metra_connection?: string;
}

export const illinoisLocations: IllinoisLocation[] = [
  {
    id: 'chi-downtown',
    name: 'Chicago Downtown Hub',
    address: '200 N Michigan Ave',
    city: 'Chicago',
    county: 'Cook',
    type: 'hybrid',
    coordinates: { lat: 41.8858, lng: -87.6229 },
    renewable_percentage: 85,
    energy_source: 'mixed',
    capacity: 50,
    available_vehicles: 23,
    amenities: ['WiFi', 'Restrooms', 'Coffee', 'Covered Parking'],
    hours: '24/7',
    cta_connection: 'Red, Blue, Brown Lines',
    metra_connection: 'Union Station (0.5 mi)'
  },
  {
    id: 'naperville-transit',
    name: 'Naperville Transit Center',
    address: '105 4th Ave',
    city: 'Naperville',
    county: 'DuPage',
    type: 'pickup',
    coordinates: { lat: 41.7508, lng: -88.1535 },
    renewable_percentage: 92,
    energy_source: 'solar',
    capacity: 25,
    available_vehicles: 12,
    amenities: ['Solar Canopy', 'Bike Racks', 'EV Charging'],
    hours: '5:00 AM - 11:00 PM',
    metra_connection: 'BNSF Railway Station'
  },
  {
    id: 'springfield-capitol',
    name: 'Springfield State Capitol',
    address: '401 S 2nd St',
    city: 'Springfield',
    county: 'Sangamon',
    type: 'charging',
    coordinates: { lat: 39.6981, lng: -89.6501 },
    renewable_percentage: 100,
    energy_source: 'wind',
    capacity: 15,
    available_vehicles: 8,
    amenities: ['Government Employee Access', 'Visitor Center'],
    hours: '6:00 AM - 10:00 PM'
  },
  {
    id: 'rockford-solar',
    name: 'Rockford Solar Station',
    address: '425 E State St',
    city: 'Rockford',
    county: 'Winnebago',
    type: 'charging',
    coordinates: { lat: 42.2711, lng: -89.0940 },
    renewable_percentage: 100,
    energy_source: 'solar',
    capacity: 20,
    available_vehicles: 0,
    amenities: ['Solar Farm Tours', 'Educational Center'],
    hours: '7:00 AM - 9:00 PM'
  },
  {
    id: 'peoria-riverfront',
    name: 'Peoria Riverfront Hub',
    address: '100 Water St',
    city: 'Peoria',
    county: 'Peoria',
    type: 'hybrid',
    coordinates: { lat: 40.6936, lng: -89.6065 },
    renewable_percentage: 78,
    energy_source: 'mixed',
    capacity: 30,
    available_vehicles: 18,
    amenities: ['Riverfront Access', 'Restaurant', 'Event Space'],
    hours: '24/7'
  },
  {
    id: 'champaign-university',
    name: 'University of Illinois Hub',
    address: '1401 W Green St',
    city: 'Champaign',
    county: 'Champaign',
    type: 'pickup',
    coordinates: { lat: 40.1106, lng: -88.2073 },
    renewable_percentage: 88,
    energy_source: 'wind',
    capacity: 35,
    available_vehicles: 22,
    amenities: ['Student Discounts', 'Campus Shuttle', 'Study Areas'],
    hours: '24/7'
  }
];

export const illinoisCleanEnergyFacts = {
  renewable_goal: '100% clean energy by 2050',
  current_renewable: '19.2% (2023)',
  wind_capacity: '6,409 MW',
  solar_capacity: '859 MW',
  ev_registrations: '65,000+ (2023)',
  charging_stations: '3,500+',
  carbon_reduction_goal: '50% by 2030'
};

export const illinoisIncentives = [
  {
    name: 'Illinois EV Rebate',
    description: 'Up to $4,000 rebate for new EV purchases',
    amount: '$4,000',
    type: 'state',
    eligibility: 'Income-qualified residents'
  },
  {
    name: 'ComEd EV Charging Program',
    description: 'Discounted electricity rates for EV charging',
    amount: '15% discount',
    type: 'utility',
    eligibility: 'ComEd customers'
  },
  {
    name: 'Corporate Transit Tax Credit',
    description: 'Business tax credit for employee transit programs',
    amount: '20% credit',
    type: 'federal',
    eligibility: 'Businesses with employee transit benefits'
  },
  {
    name: 'Clean Energy Jobs Act Benefits',
    description: 'Additional incentives through Illinois climate legislation',
    amount: 'Varies',
    type: 'state',
    eligibility: 'Clean energy investments'
  }
];
