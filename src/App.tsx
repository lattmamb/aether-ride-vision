
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
import BookVehicle from "./pages/BookVehicle";
import BookingSuccess from "./pages/BookingSuccess";

import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/navigation/BottomNavigation";
import ErrorBoundary from "./components/common/ErrorBoundary";
import CommandMenu from "./components/navigation/CommandMenu";
import { useLastVisitedRoutes } from "./hooks/useLastVisitedRoutes";

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
              <Route path="reservations" element={<DashboardPro />} />
              <Route path="users" element={<DashboardPro />} />
              <Route path="analytics" element={<DashboardPro />} />
              <Route path="locations" element={<DashboardPro />} />
              <Route path="maintenance" element={<DashboardPro />} />
            </Route>
            
            {/* Regular Routes */}
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id" element={<VehicleDetails />} />
            <Route path="/book/:id" element={<BookVehicle />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavGuard />
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
