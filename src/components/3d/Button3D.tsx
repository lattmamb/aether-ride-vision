
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

interface Button3DProps {
  text: string;
  position: [number, number, number];
  onClick: () => void;
}

const Button3D: React.FC<Button3DProps> = ({ text, position, onClick }) => {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} onClick={onClick}>
      <mesh>
        <boxGeometry args={[2, 0.5, 0.2]} />
        <meshStandardMaterial color="#4338ca" metalness={0.7} roughness={0.2} />
      </mesh>
      <Text
        position={[0, 0, 0.11]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

export default Button3D;
