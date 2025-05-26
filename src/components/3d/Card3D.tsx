
import React, { useRef, useState } from 'react';
import { useFrame, GroupProps } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

interface Card3DProps extends GroupProps {
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
  interactive?: boolean;
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
  onClick,
  interactive = true,
  ...props
}) => {
  const groupRef = useRef<THREE.Object3D>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current && hovered && interactive) {
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 2) * 0.05 + position[2] + 0.1;
    }
  });

  const handlePointerOver = () => {
    if (interactive) {
      setHovered(true);
      onHover?.();
    }
  };

  const handlePointerOut = () => {
    if (interactive) {
      setHovered(false);
    }
  };

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  return (
    <motion.group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
      whileHover={interactive ? { scale: 1.05 } : {}}
      whileTap={interactive ? { scale: 0.95 } : {}}
      {...props}
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
          attach="material"
          color={color}
          metalness={metalness}
          roughness={roughness}
          transparent={transparent}
          opacity={hovered && interactive ? opacity * 1.2 : opacity}
          envMapIntensity={1}
        />
      </RoundedBox>
      
      {/* Border Glow */}
      {hovered && interactive && (
        <RoundedBox
          args={[width + 0.02, height + 0.02, depth + 0.02]}
          radius={0.12}
          smoothness={4}
        >
          <meshStandardMaterial
            attach="material"
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
