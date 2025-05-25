
import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshStandardMaterial, Group, Mesh } from 'three';
import { useGLTF, Float, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Vehicle } from '@/types';

interface Vehicle3DModelProps {
  vehicle: Vehicle;
  selectedColor?: string;
  enableInteraction?: boolean;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
}

export const Vehicle3DModel: React.FC<Vehicle3DModelProps> = ({
  vehicle,
  selectedColor = "#FFFFFF",
  enableInteraction = true,
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0]
}) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // For now, we'll create a placeholder 3D vehicle using basic geometry
  // In production, you'd load actual GLTF vehicle models
  useFrame((state) => {
    if (groupRef.current && enableInteraction) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      if (hovered) {
        groupRef.current.scale.setScalar(scale * 1.05);
      } else {
        groupRef.current.scale.setScalar(scale);
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <motion.group
        ref={groupRef}
        position={position}
        rotation={rotation}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        whileHover={{ scale: enableInteraction ? scale * 1.1 : scale }}
        whileTap={{ scale: enableInteraction ? scale * 0.95 : scale }}
      >
        {/* Vehicle Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4, 1.5, 2]} />
          <meshStandardMaterial
            color={selectedColor}
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Vehicle Windows */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[3.5, 0.8, 1.8]} />
          <meshStandardMaterial
            color="#87CEEB"
            metalness={0}
            roughness={0}
            transparent
            opacity={0.3}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Wheels */}
        {[-1.3, 1.3].map((x, index) => (
          <group key={index} position={[x, -0.75, 1.2]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
              <meshStandardMaterial color="#333333" metalness={0.1} roughness={0.8} />
            </mesh>
          </group>
        ))}
        
        {[-1.3, 1.3].map((x, index) => (
          <group key={index + 2} position={[x, -0.75, -1.2]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
              <meshStandardMaterial color="#333333" metalness={0.1} roughness={0.8} />
            </mesh>
          </group>
        ))}
        
        {/* Headlights */}
        <mesh position={[1.8, 0, 0.6]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>
        
        <mesh position={[1.8, 0, -0.6]} castShadow>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>
        
        {/* Sparkle Effects on Hover */}
        {hovered && (
          <Sparkles
            count={50}
            scale={6}
            size={3}
            speed={0.6}
            opacity={0.6}
            color="#9b87f5"
          />
        )}
      </motion.group>
    </Float>
  );
};

export default Vehicle3DModel;
