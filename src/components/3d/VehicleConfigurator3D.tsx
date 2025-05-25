
import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Vehicle3DModel } from './Vehicle3DModel';
import { Card3D } from './Card3D';
import { Button3D } from './Button3D';
import { Text, Environment, OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { Vehicle } from '@/types';

interface VehicleConfigurator3DProps {
  vehicle: Vehicle;
  onColorChange?: (color: string) => void;
  onConfigurationChange?: (config: any) => void;
}

export const VehicleConfigurator3D: React.FC<VehicleConfigurator3DProps> = ({
  vehicle,
  onColorChange,
  onConfigurationChange
}) => {
  const [selectedColor, setSelectedColor] = useState(vehicle.colors?.[0] || "#FFFFFF");
  const [activeSection, setActiveSection] = useState("colors");
  const groupRef = useRef<Group>(null);

  const colors = vehicle.colors || ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#00FF00"];
  
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group>
      {/* Studio Environment */}
      <Environment preset="studio" />
      
      {/* Advanced Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="#9b87f5" />
      <spotLight
        position={[0, 15, 0]}
        intensity={1}
        angle={0.3}
        penumbra={1}
        castShadow
      />
      
      {/* Floor with Reflection */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Main Vehicle */}
      <group ref={groupRef}>
        <Vehicle3DModel
          vehicle={vehicle}
          selectedColor={selectedColor}
          position={[0, 0, 0]}
          scale={1.2}
          enableInteraction={true}
        />
      </group>
      
      {/* Color Selection Panel */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
        <Card3D
          position={[-5, 2, 0]}
          width={2}
          height={3}
          color="#1a1a1a"
          opacity={0.95}
        >
          <Text
            position={[0, 1.2, 0.06]}
            fontSize={0.12}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
          >
            Colors
          </Text>
          
          {colors.map((color, index) => (
            <group key={color} position={[0, 0.6 - index * 0.3, 0.06]}>
              <mesh
                onClick={() => handleColorSelect(color)}
                onPointerOver={(e) => e.stopPropagation()}
              >
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial
                  color={color}
                  metalness={0.8}
                  roughness={0.2}
                  emissive={selectedColor === color ? color : "#000000"}
                  emissiveIntensity={selectedColor === color ? 0.2 : 0}
                />
              </mesh>
              
              {selectedColor === color && (
                <mesh position={[0, 0, 0]}>
                  <ringGeometry args={[0.12, 0.15, 16]} />
                  <meshStandardMaterial
                    color="#9b87f5"
                    emissive="#9b87f5"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              )}
            </group>
          ))}
        </Card3D>
      </Float>
      
      {/* Vehicle Info Panel */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
        <Card3D
          position={[5, 1, 0]}
          width={2.5}
          height={3.5}
          color="#1a1a1a"
          opacity={0.95}
        >
          <Text
            position={[0, 1.5, 0.06]}
            fontSize={0.15}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.2}
          >
            {vehicle.model}
          </Text>
          
          <Text
            position={[0, 1.2, 0.06]}
            fontSize={0.08}
            color="#9b87f5"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.2}
          >
            {vehicle.tagline}
          </Text>
          
          <Text
            position={[0, 0.8, 0.06]}
            fontSize={0.12}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
          >
            ${vehicle.price}{vehicle.priceUnit}
          </Text>
          
          <Text
            position={[0, 0.3, 0.06]}
            fontSize={0.07}
            color="#888888"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.2}
          >
            Performance Specs:
          </Text>
          
          <Text
            position={[0, -0.1, 0.06]}
            fontSize={0.06}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.2}
          >
            Range: {vehicle.performance?.range} mi{'\n'}
            0-60 mph: {vehicle.performance?.acceleration}s{'\n'}
            Top Speed: {vehicle.performance?.topSpeed} mph
          </Text>
          
          <Button3D
            label="Book Test Drive"
            position={[0, -1.2, 0.1]}
            width={2}
            height={0.3}
            color="#7c3aed"
            onClick={() => console.log('Book test drive')}
          />
        </Card3D>
      </Float>
      
      {/* Interactive Controls */}
      <Text
        position={[0, -3, 0]}
        fontSize={0.08}
        color="#888888"
        anchorX="center"
        anchorY="middle"
      >
        Click and drag to rotate • Scroll to zoom
      </Text>
      
      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -1.99, 0]}
        opacity={0.8}
        scale={15}
        blur={2}
        far={20}
        resolution={512}
        color="#000000"
      />
    </group>
  );
};

export default VehicleConfigurator3D;
