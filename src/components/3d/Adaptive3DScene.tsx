
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Loader } from '@react-three/drei';
import { useWebGLCapabilities } from '@/hooks/useWebGLCapabilities';
import { WebGLErrorBoundary } from './WebGLErrorBoundary';

interface Adaptive3DSceneProps {
  children: React.ReactNode;
  enableControls?: boolean;
  environment?: "apartment" | "city" | "dawn" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse";
  className?: string;
  fallback?: React.ReactNode;
}

export const Adaptive3DScene: React.FC<Adaptive3DSceneProps> = ({ 
  children, 
  enableControls = true,
  environment = "studio",
  className = "w-full h-full",
  fallback
}) => {
  const capabilities = useWebGLCapabilities();

  const sceneConfig = useMemo(() => {
    if (!capabilities.isWebGLSupported) {
      return null;
    }

    const baseConfig = {
      shadows: capabilities.performanceLevel !== 'low',
      antialias: capabilities.performanceLevel === 'high',
      alpha: true,
      powerPreference: capabilities.performanceLevel === 'high' ? 'high-performance' : 'default'
    };

    const cameraConfig = {
      position: [0, 0, 5] as [number, number, number],
      fov: 45
    };

    const shadowConfig = capabilities.performanceLevel === 'high' 
      ? { mapSize: [2048, 2048] as [number, number] }
      : { mapSize: [1024, 1024] as [number, number] };

    return { baseConfig, cameraConfig, shadowConfig };
  }, [capabilities]);

  if (!capabilities.isWebGLSupported || !sceneConfig) {
    return fallback || (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white`}>
        <div className="text-center p-8">
          <h3 className="text-xl font-bold mb-2">3D Experience Unavailable</h3>
          <p className="text-gray-300">
            Your device doesn't support WebGL or 3D graphics. 
            Please use a modern browser or device to experience the 3D features.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <WebGLErrorBoundary fallback={fallback}>
        <Canvas
          shadows={sceneConfig.baseConfig.shadows}
          camera={sceneConfig.cameraConfig}
          gl={sceneConfig.baseConfig}
          performance={{ min: 0.5 }}
          dpr={capabilities.performanceLevel === 'high' ? [1, 2] : [1, 1.5]}
        >
          <Suspense fallback={null}>
            {/* Adaptive Lighting Setup */}
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow={sceneConfig.baseConfig.shadows}
              shadow-mapSize={sceneConfig.shadowConfig.mapSize}
            />
            {capabilities.performanceLevel === 'high' && (
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
            )}
            
            {/* Environment */}
            <Environment preset={environment} />
            
            {/* Adaptive Ground Plane with Contact Shadows */}
            {sceneConfig.baseConfig.shadows && (
              <ContactShadows
                position={[0, -2, 0]}
                opacity={capabilities.performanceLevel === 'high' ? 0.4 : 0.2}
                scale={20}
                blur={capabilities.performanceLevel === 'high' ? 1 : 2}
                far={10}
                resolution={capabilities.performanceLevel === 'high' ? 256 : 128}
                color="#000000"
              />
            )}
            
            {/* Controls */}
            {enableControls && (
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 4}
                enableDamping={capabilities.performanceLevel !== 'low'}
                dampingFactor={0.05}
              />
            )}
            
            {/* Scene Content with Performance Props */}
            {React.Children.map(children, child => 
              React.isValidElement(child) 
                ? React.cloneElement(child, { 
                    performanceMode: capabilities.performanceLevel === 'low'
                  } as any)
                : child
            )}
          </Suspense>
        </Canvas>
        <Loader />
      </WebGLErrorBoundary>
    </div>
  );
};

export default Adaptive3DScene;
