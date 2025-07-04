import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, Home, MapPin, ArrowLeft } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-unity-midnight relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-unity-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-unity-signature/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div 
          className="text-center relative z-10 max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Unity Fleet Logo Animation */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 relative flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-unity-purple to-unity-signature opacity-70 blur-lg animate-pulse"></div>
              <Car className="text-white text-4xl relative z-10" size={48} />
            </div>
          </motion.div>

          {/* 404 Title */}
          <motion.h1 
            className="text-8xl md:text-9xl font-display font-bold gradient-purple-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            404
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-body font-light text-white mb-4">
              Route Not Found
            </h2>
            <p className="text-lg text-white/70 mb-2 max-w-md mx-auto">
              Looks like this Illinois transit route doesn't exist.
            </p>
            <p className="text-sm text-white/50 mb-8">
              Attempted path: <code className="bg-white/10 px-2 py-1 rounded font-mono text-unity-teal">{location.pathname}</code>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              asChild
              className="gradient-bg-primary hover:scale-105 transition-all duration-300 font-display font-semibold px-8 py-3"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Return Home
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3"
            >
              <Link to="/vehicles" className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Browse Vehicles
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/5"
            >
              <Link to="/locations" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Find Locations
              </Link>
            </Button>
          </motion.div>

          {/* Illinois-specific help text */}
          <motion.div 
            className="mt-12 p-6 glass-card rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-unity-teal" />
              Illinois Transit Network
            </h3>
            <p className="text-sm text-white/70 max-w-lg mx-auto">
              Our electric vehicle rental service covers Chicago, Naperville, Springfield, Peoria, and other major Illinois cities. 
              All powered by clean energy for sustainable transportation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
