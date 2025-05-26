
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import Vehicle3DModel from './Vehicle3DModel';

const VirtualShowroom: React.FC = () => {
  const platformRef = useRef<THREE.Group>(null);

  const vehicles = [
    { color: '#ff0000', position: [-6, 0, 0] as [number, number, number], name: 'Model S' },
    { color: '#0000ff', position: [0, 0, 0] as [number, number, number], name: 'Model 3' },
    { color: '#ffffff', position: [6, 0, 0] as [number, number, number], name: 'Model X' },
  ];

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
      {vehicles.map((vehicle, index) => (
        <group key={index}>
          <Vehicle3DModel
            color={vehicle.color}
            position={vehicle.position}
            scale={0.8}
          />
          <Text
            position={[vehicle.position[0], vehicle.position[1] + 3, vehicle.position[2]]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {vehicle.name}
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
