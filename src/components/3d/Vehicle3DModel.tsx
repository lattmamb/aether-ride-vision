
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

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
  const vehicleRef = useRef<any>(null);

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
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Windshield */}
      <mesh position={[1.2, 1.3, 0]}>
        <boxGeometry args={[1.2, 0.8, 1.6]} />
        <meshStandardMaterial 
          color="#87ceeb"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Wheels */}
      {[
        [-1.4, 0.3, -1.1],
        [-1.4, 0.3, 1.1],
        [1.4, 0.3, -1.1],
        [1.4, 0.3, 1.1]
      ].map((pos, index) => (
        <group key={index} position={pos as [number, number, number]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.3]} />
            <meshStandardMaterial 
              color="#2c2c2c"
              metalness={0.2}
              roughness={0.8}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.1]}>
            <cylinderGeometry args={[0.25, 0.25, 0.1]} />
            <meshStandardMaterial 
              color="#c0c0c0"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      <mesh position={[2.1, 0.9, -0.6]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[2.1, 0.9, 0.6]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Taillights */}
      <mesh position={[-2.1, 0.9, -0.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial 
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[-2.1, 0.9, 0.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial 
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

export default Vehicle3DModel;
