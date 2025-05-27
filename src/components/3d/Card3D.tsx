
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface Card3DProps {
  title: string;
  description: string;
  position: [number, number, number];
}

const Card3D: React.FC<Card3DProps> = ({ title, description, position }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial 
          color="#1e293b" 
          transparent 
          opacity={0.9} 
        />
      </mesh>
      <Text
        position={[0, 0.3, 0.01]}
        fontSize={0.3}
        color="#f1f5f9"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      <Text
        position={[0, -0.2, 0.01]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
      >
        {description}
      </Text>
    </group>
  );
};

export default Card3D;
