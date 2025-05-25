
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { Group, Vector3 } from 'three';
import { motion } from 'framer-motion-3d';

interface Card3DProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  depth?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  metalness?: number;
  roughness?: number;
  transparent?: boolean;
  opacity?: number;
  onHover?: () => void;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  width = 2,
  height = 1.5,
  depth = 0.1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = "#1a1a1a",
  metalness = 0.1,
  roughness = 0.3,
  transparent = true,
  opacity = 0.9,
  onHover,
  onClick
}) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current && hovered) {
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 2) * 0.05 + position[2] + 0.1;
    }
  });

  return (
    <motion.group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => {
        setHovered(true);
        onHover?.();
      }}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Card Background */}
      <RoundedBox
        args={[width, height, depth]}
        radius={0.1}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={color}
          metalness={metalness}
          roughness={roughness}
          transparent={transparent}
          opacity={hovered ? opacity * 1.2 : opacity}
          envMapIntensity={1}
        />
      </RoundedBox>
      
      {/* Border Glow */}
      {hovered && (
        <RoundedBox
          args={[width + 0.02, height + 0.02, depth + 0.02]}
          radius={0.12}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#9b87f5"
            emissive="#9b87f5"
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
          />
        </RoundedBox>
      )}
      
      {children}
    </motion.group>
  );
};

export default Card3D;
