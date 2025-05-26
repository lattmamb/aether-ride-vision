
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Globe } from 'lucide-react';

interface Scene3DFallbackProps {
  className?: string;
  title?: string;
  description?: string;
  showFeatures?: boolean;
}

export const Scene3DFallback: React.FC<Scene3DFallbackProps> = ({
  className = "w-full h-full min-h-[400px]",
  title = "Premium 3D Experience",
  description = "Experience our vehicles in stunning 3D detail",
  showFeatures = true
}) => {
  return (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800`}>
      <Card className="max-w-md mx-auto p-8 bg-black/50 border-gray-700 backdrop-blur-sm">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#7c3aed]">
              <Globe className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>

          {showFeatures && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Monitor className="h-4 w-4" />
                  <span>Desktop Optimized</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile Ready</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                onClick={() => window.location.reload()}
              >
                Try 3D Mode Again
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Scene3DFallback;
