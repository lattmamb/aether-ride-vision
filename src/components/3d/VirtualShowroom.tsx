
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface VirtualShowroomProps {
  vehicles?: any[];
  onVehicleSelect?: (vehicle: any) => void;
}

const VirtualShowroom: React.FC<VirtualShowroomProps> = ({ 
  vehicles = [], 
  onVehicleSelect 
}) => {
  const platformRef = useRef<THREE.Group>(null);

  const defaultVehicles = [
    { color: '#ff0000', position: [-6, 0, 0] as [number, number, number], name: 'Model S' },
    { color: '#0000ff', position: [0, 0, 0] as [number, number, number], name: 'Model 3' },
    { color: '#ffffff', position: [6, 0, 0] as [number, number, number], name: 'Model X' },
  ];

  const displayVehicles = vehicles.length > 0 ? vehicles.slice(0, 3) : defaultVehicles;

  useFrame((state) => {
    if (platformRef.current) {
      platformRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={platformRef}>
      {/* Platform */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[12, 12, 0.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Vehicles */}
      {displayVehicles.map((vehicle, index) => (
        <group key={index}>
          {/* Simple vehicle representation */}
          <mesh position={vehicle.position || [-6 + index * 6, 0, 0]}>
            <boxGeometry args={[4, 1.2, 1.8]} />
            <meshStandardMaterial color={vehicle.color || '#ff0000'} />
          </mesh>
          <Text
            position={[(vehicle.position?.[0] || -6 + index * 6), 3, vehicle.position?.[2] || 0]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {vehicle.name || `Vehicle ${index + 1}`}
          </Text>
        </group>
      ))}

      {/* Ambient lighting effects */}
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
      />
    </group>
  );
};

export default VirtualShowroom;
