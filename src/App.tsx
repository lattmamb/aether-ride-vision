import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";
import ChatPage from "@/pages/ChatPage";
import Index from "@/pages/Index";
import VehiclesList from "@/pages/VehiclesList";
import VehicleDetails from "@/pages/VehicleDetails";
import BookVehicle from "@/pages/BookVehicle";
import BookingSuccess from "@/pages/BookingSuccess";
import BookingProgress from "@/pages/BookingProgress";
import Dashboard from "@/pages/Dashboard";
import ComprehensiveDashboard from "@/pages/ComprehensiveDashboard";
import Pricing from "@/pages/Pricing";
import Locations from "@/pages/Locations";
import About from "@/pages/About";
import HowItWorks from "@/pages/HowItWorks";
import VehicleManagement from "@/pages/VehicleManagement";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id" element={<VehicleDetails />} />
            <Route path="/book/:id" element={<BookVehicle />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/booking-progress" element={<BookingProgress />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/comprehensive-dashboard" element={<ComprehensiveDashboard />} />
            <Route path="/vehicle-management" element={<VehicleManagement />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
