"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function Scene() {
  return (
    <>
      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* Lighting */}
      <pointLight color="white" intensity={2} position={[3, 3, 3]} />
      <pointLight color="#c9a84c" intensity={1} position={[-3, -1, 2]} />
      <ambientLight intensity={0.2} />

      {/* Bottle */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.4, 0.6, 2.4, 32]} />
        <meshStandardMaterial
          color="#c9a84c"
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={1}
        />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.4, 32]} />
        <meshStandardMaterial
          color="#c9a84c"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.8}
      />
    </>
  );
}

export default function PerfumeBottle() {
  return (
    <div className="w-full h-[80vh] bg-black">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
