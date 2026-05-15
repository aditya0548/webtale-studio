"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function OrbScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <pointLight color="#3b82f6" intensity={3} position={[0, 0, 3]} />
      <Environment preset="city" />

      <group ref={groupRef}>
        {/* Inner Solid Sphere */}
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#0a0a1a"
            emissive="#3b82f6"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Wireframe Sphere */}
        <lineSegments>
          <wireframeGeometry args={[new THREE.SphereGeometry(2.1, 32, 32)]} />
          <lineBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.15}
          />
        </lineSegments>
      </group>
    </>
  );
}

export default function AIOrb() {
  return (
    <div className="w-full h-[70vh] bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <OrbScene />
      </Canvas>
    </div>
  );
}
