
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";

// Import immediately needed components directly
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Lazy load less frequently accessed pages for better performance
const VehicleDetails = lazy(() => import("./pages/VehicleDetails"));
const VehiclesList = lazy(() => import("./pages/VehiclesList"));
const BookVehicle = lazy(() => import("./pages/BookVehicle"));
const BookingSuccess = lazy(() => import("./pages/BookingSuccess"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Locations = lazy(() => import("./pages/Locations"));
const About = lazy(() => import("./pages/About"));

// Create QueryClient with better error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
});

// Loading fallback for lazy-loaded components
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-tesla-blue text-xl">Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id" element={<VehicleDetails />} />
            <Route path="/book/:id" element={<BookVehicle />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            {/* Redirect for legacy routes */}
            <Route path="/tesla" element={<Navigate to="/vehicles" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
