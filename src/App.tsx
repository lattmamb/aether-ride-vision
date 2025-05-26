
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionProvider } from "@/contexts/TransitionContext";
import { GenieTransitionProvider } from "@/contexts/GenieTransitionContext";
import { useEffect } from "react";
import { useGenieTransition } from "@/contexts/GenieTransitionContext";
import GenieTransition from "@/components/ui/genie-transition";
import EnhancedPageTransition from "@/components/ui/enhanced-page-transition";
import Index from "./pages/Index";
import EnhancedDashboard from "./pages/EnhancedDashboard";
import VehicleDetails from "./pages/VehicleDetails";
import VehiclesList from "./pages/VehiclesList";
import BookVehicle from "./pages/BookVehicle";
import BookingSuccess from "./pages/BookingSuccess";
import Pricing from "./pages/Pricing";
import Locations from "./pages/Locations";
import About from "./pages/About";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/navigation/BottomNavigation";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const { showGenie, hideGenie, triggerGenie } = useGenieTransition();

  // Trigger genie effect on route changes
  useEffect(() => {
    triggerGenie();
  }, [location.pathname]);

  return (
    <>
      <GenieTransition isVisible={showGenie} onComplete={hideGenie}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] rounded-full animate-spin" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Unity Fleet
            </h2>
            <p className="text-white/60">Transitioning to the future...</p>
          </div>
        </div>
      </GenieTransition>
      
      <EnhancedPageTransition pathname={location.pathname}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<EnhancedDashboard />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/vehicles" element={<VehiclesList />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/book/:id" element={<BookVehicle />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </EnhancedPageTransition>
      
      <BottomNavigation />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GenieTransitionProvider>
        <TransitionProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TransitionProvider>
      </GenieTransitionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
