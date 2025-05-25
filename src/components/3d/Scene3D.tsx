
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom, SSAO, DepthOfField } from '@react-three/postprocessing';

interface Scene3DProps {
  children: React.ReactNode;
  enableControls?: boolean;
  environment?: string;
  enablePostProcessing?: boolean;
  className?: string;
}

export const Scene3D: React.FC<Scene3DProps> = ({ 
  children, 
  enableControls = true,
  environment = "studio",
  enablePostProcessing = true,
  className = "w-full h-full"
}) => {
  return (
    <div className={className}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Environment */}
          <Environment preset={environment} />
          
          {/* Ground Plane with Contact Shadows */}
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={20}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
          
          {/* Controls */}
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 4}
            />
          )}
          
          {/* Scene Content */}
          {children}
          
          {/* Post Processing Effects */}
          {enablePostProcessing && (
            <EffectComposer>
              <Bloom intensity={0.5} luminanceThreshold={0.9} />
              <SSAO intensity={0.1} radius={0.1} />
              <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
