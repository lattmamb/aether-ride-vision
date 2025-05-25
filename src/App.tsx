
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionProvider } from "@/contexts/TransitionContext";
import { useEffect } from "react";
import { useTransition } from "@/contexts/TransitionContext";
import UnityTransition from "@/components/ui/unity-transition";
import Index from "./pages/Index";
import EnhancedDashboard from "./pages/EnhancedDashboard";
import VehicleDetails from "./pages/VehicleDetails";
import VehiclesList from "./pages/VehiclesList";
import BookVehicle from "./pages/BookVehicle";
import BookingSuccess from "./pages/BookingSuccess";
import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/navigation/BottomNavigation";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const { showTransition, hideTransition, triggerTransition } = useTransition();

  // Trigger transition on initial load
  useEffect(() => {
    triggerTransition();
  }, []);

  // Trigger transition on route changes
  useEffect(() => {
    triggerTransition();
  }, [location.pathname]);

  return (
    <>
      <UnityTransition isVisible={showTransition} onComplete={hideTransition} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<EnhancedDashboard />} />
        <Route path="/vehicles" element={<VehiclesList />} />
        <Route path="/vehicles/:id" element={<VehicleDetails />} />
        <Route path="/book/:id" element={<BookVehicle />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNavigation />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TransitionProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TransitionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
