
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Vehicle3DModel } from './Vehicle3DModel';
import { Card3D } from './Card3D';
import { Button3D } from './Button3D';
import { Text, Environment, ContactShadows } from '@react-three/drei';
import { Vehicle } from '@/types';

interface VirtualShowroomProps {
  vehicles: Vehicle[];
  onVehicleSelect?: (vehicle: Vehicle) => void;
}

export const VirtualShowroom: React.FC<VirtualShowroomProps> = ({
  vehicles,
  onVehicleSelect
}) => {
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState(0);
  const groupRef = useRef<Group>(null);

  const selectedVehicle = vehicles[selectedVehicleIndex];

  const handlePrevious = () => {
    setSelectedVehicleIndex((prev) => 
      prev > 0 ? prev - 1 : vehicles.length - 1
    );
  };

  const handleNext = () => {
    setSelectedVehicleIndex((prev) => 
      prev < vehicles.length - 1 ? prev + 1 : 0
    );
  };

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Environment Setup */}
      <Environment preset="warehouse" />
      
      {/* Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
      
      {/* Main Vehicle Display */}
      {selectedVehicle && (
        <Vehicle3DModel
          vehicle={selectedVehicle}
          position={[0, 0, 0]}
          scale={0.8}
          enableInteraction={true}
        />
      )}
      
      {/* Vehicle Info Card */}
      {selectedVehicle && (
        <Card3D
          position={[-4, 1, 0]}
          width={2.5}
          height={2}
          color="#1a1a1a"
          opacity={0.9}
        >
          <Text
            position={[0, 0.6, 0.06]}
            fontSize={0.15}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
          >
            {selectedVehicle.model}
          </Text>
          
          <Text
            position={[0, 0.3, 0.06]}
            fontSize={0.08}
            color="#9b87f5"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
          >
            {selectedVehicle.tagline}
          </Text>
          
          <Text
            position={[0, 0, 0.06]}
            fontSize={0.1}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
          >
            ${selectedVehicle.price}{selectedVehicle.priceUnit}
          </Text>
          
          <Text
            position={[0, -0.3, 0.06]}
            fontSize={0.06}
            color="#888888"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.2}
          >
            Range: {selectedVehicle.performance?.range} mi{'\n'}
            0-60: {selectedVehicle.performance?.acceleration}s{'\n'}
            Top Speed: {selectedVehicle.performance?.topSpeed} mph
          </Text>
        </Card3D>
      )}
      
      {/* Navigation Controls */}
      <Button3D
        label="Previous"
        position={[-2, -1, 2]}
        onClick={handlePrevious}
      />
      
      <Button3D
        label="Next"
        position={[2, -1, 2]}
        onClick={handleNext}
      />
      
      <Button3D
        label="Select Vehicle"
        position={[0, -1, 2]}
        width={2}
        color="#7c3aed"
        onClick={() => onVehicleSelect?.(selectedVehicle)}
      />
      
      {/* Vehicle Counter */}
      <Text
        position={[0, -1.5, 2]}
        fontSize={0.08}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        {selectedVehicleIndex + 1} / {vehicles.length}
      </Text>
      
      {/* Contact Shadows */}
      <ContactShadows
        position={[0, -1.99, 0]}
        opacity={0.6}
        scale={20}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </group>
  );
};

export default VirtualShowroom;
