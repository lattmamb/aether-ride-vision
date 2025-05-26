
import { 
  Home, 
  Car, 
  DollarSign, 
  MapPin, 
  Info 
} from "lucide-react";

export const navigationItems = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
    type: 'link' as const
  },
  {
    path: '/vehicles',
    label: 'Vehicles',
    icon: Car,
    type: 'dropdown' as const,
    dropdownItems: [
      { label: 'All Vehicles', path: '/vehicles' },
      { label: 'Sedans', path: '/vehicles?type=sedan' },
      { label: 'SUVs', path: '/vehicles?type=suv' },
      { label: 'Sports Cars', path: '/vehicles?type=sports' }
    ]
  },
  {
    path: '/pricing',
    label: 'Pricing',
    icon: DollarSign,
    type: 'dropdown' as const,
    dropdownItems: [
      { label: 'All Plans', path: '/pricing' },
      { label: 'Daily Rental', path: '/pricing#daily' },
      { label: 'Weekly Plans', path: '/pricing#weekly' },
      { label: 'Monthly Subscription', path: '/pricing#monthly' }
    ]
  },
  {
    path: '/locations',
    label: 'Locations',
    icon: MapPin,
    type: 'link' as const
  },
  {
    path: '/about',
    label: 'About',
    icon: Info,
    type: 'link' as const
  }
];
