
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

interface Button3DProps {
  label: string;
  position?: [number, number, number];
  width?: number;
  height?: number;
  depth?: number;
  fontSize?: number;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button3D: React.FC<Button3DProps> = ({
  label,
  position = [0, 0, 0],
  width = 1.5,
  height = 0.4,
  depth = 0.1,
  fontSize = 0.1,
  color = "#9b87f5",
  textColor = "#FFFFFF",
  onClick,
  disabled = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useFrame(() => {
    if (groupRef.current && !disabled) {
      if (pressed) {
        groupRef.current.position.z = position[2] - 0.02;
      } else if (hovered) {
        groupRef.current.position.z = position[2] + 0.02;
      } else {
        groupRef.current.position.z = position[2];
      }
    }
  });

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <motion.group
      ref={groupRef}
      position={position}
      onPointerOver={() => !disabled && setHovered(true)}
      onPointerOut={() => {
        setHovered(false);
        setPressed(false);
      }}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={() => {
        setPressed(false);
        handleClick();
      }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {/* Button Base */}
      <RoundedBox
        args={[width, height, depth]}
        radius={0.05}
        smoothness={4}
        castShadow
      >
        <meshStandardMaterial
          color={disabled ? "#666666" : (hovered ? "#7c3aed" : color)}
          metalness={0.3}
          roughness={0.4}
          emissive={hovered && !disabled ? "#9b87f5" : "#000000"}
          emissiveIntensity={hovered && !disabled ? 0.1 : 0}
        />
      </RoundedBox>
      
      {/* Button Text */}
      <Text
        position={[0, 0, depth / 2 + 0.01]}
        fontSize={fontSize}
        color={disabled ? "#999999" : textColor}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      
      {/* Glow Effect */}
      {hovered && !disabled && (
        <RoundedBox
          args={[width + 0.02, height + 0.02, depth + 0.02]}
          radius={0.06}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#9b87f5"
            emissive="#9b87f5"
            emissiveIntensity={0.3}
            transparent
            opacity={0.3}
          />
        </RoundedBox>
      )}
    </motion.group>
  );
};

export default Button3D;
