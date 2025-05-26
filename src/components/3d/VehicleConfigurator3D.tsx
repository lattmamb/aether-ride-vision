
import React, { useRef, useState } from 'react';
import { useFrame, GroupProps } from '@react-three/fiber';
import * as THREE from 'three';
import { Vehicle3DModel } from './Vehicle3DModel';
import { Button3D } from './Button3D';
import { Text, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { Vehicle } from '@/types';

interface VehicleConfigurator3DProps extends GroupProps {
  vehicle: Vehicle;
  onColorChange?: (color: string) => void;
  onViewChange?: (view: string) => void;
  performanceMode?: boolean;
}

const availableColors = [
  { name: 'Pearl White', value: '#FFFFFF' },
  { name: 'Solid Black', value: '#000000' },
  { name: 'Midnight Silver', value: '#393C41' },
  { name: 'Deep Blue', value: '#1B365D' },
  { name: 'Red Multi-Coat', value: '#B91C1C' }
];

export const VehicleConfigurator3D: React.FC<VehicleConfigurator3DProps> = ({
  vehicle,
  onColorChange,
  onViewChange,
  performanceMode = false,
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [currentView, setCurrentView] = useState('exterior');
  const groupRef = useRef<THREE.Group>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    onViewChange?.(view);
  };

  useFrame((state) => {
    if (groupRef.current && !performanceMode) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Environment Setup */}
      <Environment preset="studio" />
      <OrbitControls enablePan={false} enableZoom={true} />
      
      {/* Studio Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#f8f9fa"
          metalness={0.1}
          roughness={0.9}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Main Vehicle */}
      <Vehicle3DModel
        vehicle={vehicle}
        selectedColor={selectedColor}
        position={[0, 0, 0]}
        scale={1.2}
        enableInteraction={true}
        performanceMode={performanceMode}
      />
      
      {/* Configuration Panel */}
      <group position={[-6, 0, 0]}>
        {/* Title */}
        <Text
          position={[0, 2, 0]}
          fontSize={0.3}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          maxWidth={4}
        >
          Configure Your {vehicle.model}
        </Text>
        
        {/* Color Selection */}
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.15}
          color="#9b87f5"
          anchorX="center"
          anchorY="middle"
        >
          Select Color
        </Text>
        
        {availableColors.map((color, index) => (
          <group key={color.value} position={[0, 1 - index * 0.3, 0]}>
            <Button3D
              label={color.name}
              width={2}
              height={0.25}
              color={selectedColor === color.value ? "#7c3aed" : "#374151"}
              onClick={() => handleColorChange(color.value)}
            />
            
            {/* Color Preview Sphere */}
            <mesh position={[1.2, 0, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color={color.value}
                metalness={0.8}
                roughness={0.2}
                emissive={selectedColor === color.value ? color.value : "#000000"}
                emissiveIntensity={selectedColor === color.value ? 0.2 : 0}
              />
            </mesh>
            
            {/* Selection Indicator */}
            {selectedColor === color.value && (
              <mesh position={[1.2, 0, 0]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial
                  color="#9b87f5"
                  emissive="#9b87f5"
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.3}
                />
              </mesh>
            )}
          </group>
        ))}
        
        {/* View Controls */}
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.15}
          color="#9b87f5"
          anchorX="center"
          anchorY="middle"
        >
          View Options
        </Text>
        
        <Button3D
          label="Exterior View"
          position={[0, -1.8, 0]}
          width={2}
          color={currentView === 'exterior' ? "#7c3aed" : "#374151"}
          onClick={() => handleViewChange('exterior')}
        />
        
        <Button3D
          label="Interior View"
          position={[0, -2.1, 0]}
          width={2}
          color={currentView === 'interior' ? "#7c3aed" : "#374151"}
          onClick={() => handleViewChange('interior')}
        />
      </group>
      
      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -1.99, 0]}
        opacity={0.4}
        scale={15}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </group>
  );
};

export default VehicleConfigurator3D;
