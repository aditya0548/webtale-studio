"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  // Geometries and materials refs for cleanup
  const bottleGeometryRef = useRef<THREE.CylinderGeometry>(null);
  const capGeometryRef = useRef<THREE.CylinderGeometry>(null);
  const ringGeometryRef = useRef<THREE.TorusGeometry>(null);

  const bottleMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const capMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const ringMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    const bottleGeom = bottleGeometryRef.current;
    const capGeom = capGeometryRef.current;
    const ringGeom = ringGeometryRef.current;

    const bottleMat = bottleMaterialRef.current;
    const capMat = capMaterialRef.current;
    const ringMat = ringMaterialRef.current;

    return () => {
      bottleGeom?.dispose();
      capGeom?.dispose();
      ringGeom?.dispose();

      bottleMat?.dispose();
      capMat?.dispose();
      ringMat?.dispose();
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // oscillate between -0.1 and 0.1
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  return (
    <>
      <Environment preset="studio" />

      <ambientLight intensity={0.3} />
      <pointLight color="#ffffff" intensity={3} position={[3, 4, 3]} />
      <pointLight color="#c9a84c" intensity={2} position={[-3, -2, 2]} />
      <pointLight color="#c9a84c" intensity={1} position={[0, -4, -2]} />

      <group ref={groupRef}>
        {/* Bottle */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry ref={bottleGeometryRef} args={[0.4, 0.6, 2.4, 64]} />
          <meshStandardMaterial
            ref={bottleMaterialRef}
            color="#1a1a1a"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>

        {/* Gold Ring */}
        {/* Placed at the top of the bottle (height 2.4 / 2 = 1.2) */}
        <mesh position={[0, 1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry ref={ringGeometryRef} args={[0.41, 0.03, 16, 64]} />
          <meshStandardMaterial
            ref={ringMaterialRef}
            color="#c9a84c"
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* Cap */}
        {/* Cap height 0.5. Half of cap height is 0.25. So center is 1.2 + 0.25 = 1.45. Let's add slight margin for the ring if needed, but 1.45 is exact. */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry ref={capGeometryRef} args={[0.3, 0.4, 0.5, 64]} />
          <meshStandardMaterial
            ref={capMaterialRef}
            color="#1a1a1a"
            metalness={0.8}
            roughness={0.05}
          />
        </mesh>
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.2}
      />
    </>
  );
}

export default function PerfumeBottle() {
  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] bg-black">
      <Canvas>
        <Scene />
      </Canvas>

      <div className="absolute bottom-[48px] left-0 right-0 text-center z-10 pointer-events-none flex flex-col items-center">
        <div className="font-inter text-[10px] tracking-[0.6em] text-gold/60 uppercase">
          Étheréa
        </div>
        <div className="font-inter text-[11px] text-silver/30 mt-2">
          Scroll to explore
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mt-2 text-silver/30"
        >
          ↓
        </motion.div>
      </div>
    </div>
  );
}
