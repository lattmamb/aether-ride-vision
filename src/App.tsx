
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DashboardPro from "./pages/DashboardPro";
import DashboardOverview from "./pages/DashboardOverview";
import DashboardLayout from "./layouts/DashboardLayout";
import VehicleDetails from "./pages/VehicleDetails";
import VehiclesList from "./pages/VehiclesList";
import SelectPlan from "./pages/SelectPlan";
import BookVehicle from "./pages/BookVehicle";
import PaymentCheckout from "./pages/PaymentCheckout";
import BookingSuccess from "./pages/BookingSuccess";
import VehicleTracking from "./pages/dashboard/VehicleTracking";
import JobPlatform from "./pages/dashboard/JobPlatform";
import MobilePreview from "./pages/dashboard/MobilePreview";
import ChargingHubs from "./pages/dashboard/ChargingHubs";
import Hub3DDemo from "./pages/dashboard/Hub3DDemo";
import Settings from "./pages/dashboard/Settings";
import Profile from "./pages/dashboard/Profile";
import Notifications from "./pages/dashboard/Notifications";
import Help from "./pages/dashboard/Help";

import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import About from "./pages/About";
import Social from "./pages/Social";
import AetherFlowDemo from "./pages/AetherFlowDemo";
import NavigationDemo from "./pages/NavigationDemo";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/navigation/BottomNavigation";
import ErrorBoundary from "./components/common/ErrorBoundary";
import CommandMenu from "./components/navigation/CommandMenu";
import { useLastVisitedRoutes } from "./hooks/useLastVisitedRoutes";
import { BookingProvider } from "./contexts/BookingContext";
import { UnityProvider } from "./contexts/UnityContext";

const queryClient = new QueryClient();

function RouteMemorySync() {
  useLastVisitedRoutes();
  return null;
}


function BottomNavGuard() {
  const location = useLocation();
  const hide = location.pathname.startsWith('/dashboard');
  if (hide) return null;
  return <BottomNavigation />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UnityProvider>
        <BookingProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ErrorBoundary>
              <RouteMemorySync />
              <CommandMenu />
              <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Dashboard Routes with Sidebar Layout */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="fleet" element={<DashboardPro />} />
                <Route path="tracking" element={<VehicleTracking />} />
                <Route path="jobs" element={<JobPlatform />} />
                <Route path="mobile-preview" element={<MobilePreview />} />
                <Route path="charging-hubs" element={<ChargingHubs />} />
                <Route path="hub-demo" element={<Hub3DDemo />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="help" element={<Help />} />
                <Route path="reservations" element={<DashboardPro />} />
                <Route path="users" element={<DashboardPro />} />
                <Route path="analytics" element={<DashboardPro />} />
                <Route path="locations" element={<DashboardPro />} />
                <Route path="maintenance" element={<DashboardPro />} />
              </Route>
              
              {/* Vehicle Booking Flow Routes */}
              <Route path="/vehicles" element={<VehiclesList />} />
              <Route path="/vehicles/:id" element={<VehicleDetails />} />
              <Route path="/vehicles/:id/plan" element={<SelectPlan />} />
              <Route path="/vehicles/:id/book" element={<BookVehicle />} />
              <Route path="/vehicles/:id/checkout" element={<PaymentCheckout />} />
              <Route path="/booking-success" element={<BookingSuccess />} />
              
              {/* Legacy route for backward compatibility */}
              <Route path="/book/:id" element={<BookVehicle />} />
              
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/social" element={<Social />} />
          <Route path="/aether-flow" element={<AetherFlowDemo />} />
          <Route path="/navigation-demo" element={<NavigationDemo />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNavGuard />
          </ErrorBoundary>
        </BrowserRouter>
      </BookingProvider>
      </UnityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
