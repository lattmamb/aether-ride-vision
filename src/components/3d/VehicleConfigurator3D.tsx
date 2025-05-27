
import React, { useState, useRef } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const VehicleConfigurator3D: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#ff0000');
  const vehicleRef = useRef<any>(null);

  const colors = ['#ff0000', '#0000ff', '#ffffff', '#000000', '#ffff00'];

  useFrame((state) => {
    if (vehicleRef.current) {
      vehicleRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* Vehicle */}
      <group ref={vehicleRef} position={[0, 0, 0]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[4, 1.2, 1.8]} />
          <meshStandardMaterial
            color={selectedColor}
            metalness={0.8}
            roughness={0.2}
          />
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
              <meshStandardMaterial color="#2c2c2c" />
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
      </group>

      {/* Color Selector */}
      {colors.map((color, index) => (
        <group key={color} position={[index * 1.5 - 3, -2, 0]}>
          <mesh
            onClick={() => setSelectedColor(color)}
            onPointerOver={(e: ThreeEvent<PointerEvent>) => {
              const target = e.eventObject as any;
              if (target) {
                target.scale.setScalar(1.2);
              }
            }}
            onPointerOut={(e: ThreeEvent<PointerEvent>) => {
              const target = e.eventObject as any;
              if (target) {
                target.scale.setScalar(1);
              }
            }}
          >
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial 
              color={color} 
              emissive={selectedColor === color ? color : '#000000'}
              emissiveIntensity={selectedColor === color ? 0.2 : 0}
              transparent={selectedColor !== color}
              opacity={selectedColor === color ? 1 : 0.7}
            />
          </mesh>
          <Text
            position={[0, -0.7, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {color}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default VehicleConfigurator3D;
