
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface Vehicle3DModelProps {
  color?: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

const Vehicle3DModel: React.FC<Vehicle3DModelProps> = ({ 
  color = '#ff0000', 
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0]
}) => {
  const vehicleRef = useRef<THREE.Group>(null);

  // Create materials with proper typing
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1
  }), [color]);

  const glassMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#87ceeb',
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.3,
    envMapIntensity: 1
  }), []);

  const rimMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#c0c0c0',
    metalness: 0.9,
    roughness: 0.1
  }), []);

  const tireMaterial = useMaterial(() => new THREE.MeshStandardMaterial({
    color: '#2c2c2c',
    metalness: 0.2,
    roughness: 0.8
  }), []);

  const headlightMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    emissive: '#ffffff',
    emissiveIntensity: 0.3
  }), []);

  const taillightMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ff0000',
    emissive: '#ff0000',
    emissiveIntensity: 0.5
  }), []);

  useFrame((state) => {
    if (vehicleRef.current) {
      vehicleRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={vehicleRef} position={position} scale={scale} rotation={rotation}>
      {/* Main body */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[4, 1.2, 1.8]} />
        <primitive object={bodyMaterial} />
      </mesh>

      {/* Windshield */}
      <mesh position={[1.2, 1.3, 0]}>
        <boxGeometry args={[1.2, 0.8, 1.6]} />
        <primitive object={glassMaterial} />
      </mesh>

      {/* Wheels */}
      {[
        [-1.4, 0.3, -1.1],
        [-1.4, 0.3, 1.1],
        [1.4, 0.3, -1.1],
        [1.4, 0.3, 1.1]
      ].map((pos, index) => (
        <group key={index} position={pos}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.3]} />
            <primitive object={tireMaterial} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.1]}>
            <cylinderGeometry args={[0.25, 0.25, 0.1]} />
            <primitive object={rimMaterial} />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      <mesh position={[2.1, 0.9, -0.6]}>
        <sphereGeometry args={[0.2]} />
        <primitive object={headlightMaterial} />
      </mesh>
      <mesh position={[2.1, 0.9, 0.6]}>
        <sphereGeometry args={[0.2]} />
        <primitive object={headlightMaterial} />
      </mesh>

      {/* Taillights */}
      <mesh position={[-2.1, 0.9, -0.6]}>
        <sphereGeometry args={[0.15]} />
        <primitive object={taillightMaterial} />
      </mesh>
      <mesh position={[-2.1, 0.9, 0.6]}>
        <sphereGeometry args={[0.15]} />
        <primitive object={taillightMaterial} />
      </mesh>
    </group>
  );
};

export default Vehicle3DModel;
