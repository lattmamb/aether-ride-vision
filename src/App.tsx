
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatInterface from "@/components/chat/ChatInterface";
import Index from "@/pages/Index";
import VehiclesList from "@/pages/VehiclesList";
import VehicleDetails from "@/pages/VehicleDetails";
import BookVehicle from "@/pages/BookVehicle";
import BookingSuccess from "@/pages/BookingSuccess";
import Dashboard from "@/pages/Dashboard";
import Pricing from "@/pages/Pricing";
import Locations from "@/pages/Locations";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/vehicles" element={<VehiclesList />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/book/:id" element={<BookVehicle />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
