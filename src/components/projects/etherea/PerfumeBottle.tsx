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
  const neckGeometryRef = useRef<THREE.CylinderGeometry>(null);
  const capGeometryRef = useRef<THREE.CylinderGeometry>(null);
  const ringGeometryRef = useRef<THREE.TorusGeometry>(null);
  const labelGeometryRef = useRef<THREE.PlaneGeometry>(null);

  const bodyMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const capMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const goldMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const labelMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    const bottleGeom = bottleGeometryRef.current;
    const neckGeom = neckGeometryRef.current;
    const capGeom = capGeometryRef.current;
    const ringGeom = ringGeometryRef.current;
    const labelGeom = labelGeometryRef.current;

    const bodyMat = bodyMaterialRef.current;
    const capMat = capMaterialRef.current;
    const goldMat = goldMaterialRef.current;
    const labelMat = labelMaterialRef.current;

    return () => {
      bottleGeom?.dispose();
      neckGeom?.dispose();
      capGeom?.dispose();
      ringGeom?.dispose();
      labelGeom?.dispose();

      bodyMat?.dispose();
      capMat?.dispose();
      goldMat?.dispose();
      labelMat?.dispose();
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.12;
    }
  });

  return (
    <>
      <Environment preset="city" />

      <ambientLight intensity={0.4} color="#fff8f0" />
      <spotLight color="#ffffff" intensity={6} position={[5, 8, 5]} angle={0.25} penumbra={0.4} />
      <spotLight color="#c9a84c" intensity={4} position={[-5, 2, 4]} angle={0.35} penumbra={0.6} />
      <spotLight color="#ffffff" intensity={3} position={[0, -6, -4]} angle={0.5} penumbra={0.8} />
      <pointLight color="#c9a84c" intensity={2} position={[2, 0, 5]} />

      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Main Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry ref={bottleGeometryRef} args={[0.45, 0.65, 2.6, 64]} />
          <meshPhysicalMaterial
            ref={bodyMaterialRef}
            color="#080808"
            metalness={1}
            roughness={0.0}
            clearcoat={1}
            clearcoatRoughness={0}
            envMapIntensity={2}
          />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry ref={neckGeometryRef} args={[0.22, 0.45, 0.6, 64]} />
          <meshPhysicalMaterial
            color="#0d0d0d"
            metalness={0.95}
            roughness={0.02}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* Cap */}
        <mesh position={[0, 2.3, 0]}>
          <cylinderGeometry ref={capGeometryRef} args={[0.2, 0.22, 0.8, 64]} />
          <meshPhysicalMaterial
            ref={capMaterialRef}
            color="#c9a84c"
            metalness={1}
            roughness={0}
            reflectivity={1}
          />
        </mesh>

        {/* Gold Ring */}
        <mesh position={[0, 1.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry ref={ringGeometryRef} args={[0.46, 0.025, 16, 64]} />
          <meshStandardMaterial
            ref={goldMaterialRef}
            color="#c9a84c"
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* Label Plane */}
        <mesh position={[0, -0.1, 0.66]}>
          <planeGeometry ref={labelGeometryRef} args={[0.7, 1.0]} />
          <meshStandardMaterial
            ref={labelMaterialRef}
            color="#c9a84c"
            metalness={0.3}
            roughness={0.8}
            opacity={0.15}
            transparent={true}
          />
        </mesh>

        {/* Ground Reflection */}
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial
            color="#000000"
            metalness={1}
            roughness={0.1}
            opacity={0.4}
            transparent={true}
          />
        </mesh>
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.6}
      />
    </>
  );
}

export default function PerfumeBottle() {
  return (
    <div id="bottle" className="relative w-full h-[60vh] md:h-[100vh] bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>

      <div className="absolute bottom-[48px] left-0 right-0 flex flex-col items-center pointer-events-none z-10 text-center">
        <div className="font-inter text-[10px] tracking-[0.6em] text-[rgba(201,168,76,0.5)]">
          ÉTHERÉA · NO.01
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="font-inter text-[11px] text-silver/25 mt-[8px]"
        >
          ↓ Continue
        </motion.div>
      </div>
    </div>
  );
}
