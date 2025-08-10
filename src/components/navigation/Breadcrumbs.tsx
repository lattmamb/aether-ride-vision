
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@/components/ui/breadcrumb';

interface RouteMapping {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const routeMapping: RouteMapping = {
  '': { label: 'Home' },
  'vehicles': { label: 'Vehicles', parent: '' },
  'pricing': { label: 'Pricing', parent: '' },
  'locations': { label: 'Locations', parent: '' },
  'about': { label: 'About', parent: '' },
  'dashboard': { label: 'Dashboard', parent: '' },
  'fleet': { label: 'Fleet', parent: 'dashboard' },
  'reservations': { label: 'Reservations', parent: 'dashboard' },
  'users': { label: 'Users', parent: 'dashboard' },
  'analytics': { label: 'Analytics', parent: 'dashboard' },
  'maintenance': { label: 'Maintenance', parent: 'dashboard' },
  'book': { label: 'Book Vehicle', parent: 'vehicles' },
  'booking-success': { label: 'Booking Confirmation', parent: 'book' },
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  // Build breadcrumb items
  const breadcrumbItems = [];
  let currentPath = '';
  
  // Always add home
  breadcrumbItems.push({
    path: '/',
    label: 'Home',
    isLast: pathSegments.length === 0,
  });

  // Add other segments
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // For vehicle details pages and booking pages, we need to handle the dynamic segments
    let label = routeMapping[segment]?.label || segment;
    
    // If this is a vehicle ID in the URL
    if (segment.includes('model') || segment === 'cybertruck') {
      label = segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    
    breadcrumbItems.push({
      path: currentPath,
      label: label,
      isLast: index === pathSegments.length - 1,
    });
  });

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs on homepage
  }

  return (
    <motion.div 
      className={`${isDashboard ? 'px-6 pt-2 pb-2' : 'container mx-auto px-4 pt-20 pb-2'}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <Breadcrumb className="bg-card/60 border border-border backdrop-blur-sm inline-flex px-3 py-2 rounded-lg text-muted-foreground">
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.path}>
              <BreadcrumbItem>
                {item.isLast ? (
                  <BreadcrumbPage className="text-foreground">{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      to={item.path} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {index === 0 ? (
                        <span className="flex items-center">
                          <Home className="h-3 w-3 mr-1" />
                          {item.label}
                        </span>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              
              {!item.isLast && (
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3 w-3" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </motion.div>
  );
};

export default Breadcrumbs;
