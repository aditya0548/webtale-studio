"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  // Geometries and materials refs for cleanup
  const bodyGeometryRef = useRef<THREE.BoxGeometry>(null);
  const liquidGeometryRef = useRef<THREE.BoxGeometry>(null);
  const edge1GeometryRef = useRef<THREE.BoxGeometry>(null);
  const edge2GeometryRef = useRef<THREE.BoxGeometry>(null);
  const edge3GeometryRef = useRef<THREE.BoxGeometry>(null);
  const edge4GeometryRef = useRef<THREE.BoxGeometry>(null);
  const neckGeometryRef = useRef<THREE.BoxGeometry>(null);
  const collarGeometryRef = useRef<THREE.BoxGeometry>(null);
  const capGeometryRef = useRef<THREE.OctahedronGeometry>(null);
  const labelGeometryRef = useRef<THREE.PlaneGeometry>(null);
  const groundGeometryRef = useRef<THREE.PlaneGeometry>(null);

  const bodyMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const liquidMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  const chromeMat1Ref = useRef<THREE.MeshStandardMaterial>(null);
  const chromeMat2Ref = useRef<THREE.MeshStandardMaterial>(null);
  const chromeMat3Ref = useRef<THREE.MeshStandardMaterial>(null);
  const chromeMat4Ref = useRef<THREE.MeshStandardMaterial>(null);
  const chromeMatNeckRef = useRef<THREE.MeshStandardMaterial>(null);
  const chromeMatCollarRef = useRef<THREE.MeshStandardMaterial>(null);

  const capMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const labelMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
  const groundMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  useEffect(() => {
    const bodyGeom = bodyGeometryRef.current;
    const liquidGeom = liquidGeometryRef.current;
    const edge1Geom = edge1GeometryRef.current;
    const edge2Geom = edge2GeometryRef.current;
    const edge3Geom = edge3GeometryRef.current;
    const edge4Geom = edge4GeometryRef.current;
    const neckGeom = neckGeometryRef.current;
    const collarGeom = collarGeometryRef.current;
    const capGeom = capGeometryRef.current;
    const labelGeom = labelGeometryRef.current;
    const groundGeom = groundGeometryRef.current;

    const bodyMat = bodyMaterialRef.current;
    const liquidMat = liquidMaterialRef.current;
    const cm1 = chromeMat1Ref.current;
    const cm2 = chromeMat2Ref.current;
    const cm3 = chromeMat3Ref.current;
    const cm4 = chromeMat4Ref.current;
    const cmn = chromeMatNeckRef.current;
    const cmc = chromeMatCollarRef.current;
    const capMat = capMaterialRef.current;
    const labelMat = labelMaterialRef.current;
    const groundMat = groundMaterialRef.current;

    return () => {
      bodyGeom?.dispose();
      liquidGeom?.dispose();
      edge1Geom?.dispose();
      edge2Geom?.dispose();
      edge3Geom?.dispose();
      edge4Geom?.dispose();
      neckGeom?.dispose();
      collarGeom?.dispose();
      capGeom?.dispose();
      labelGeom?.dispose();
      groundGeom?.dispose();

      bodyMat?.dispose();
      liquidMat?.dispose();
      cm1?.dispose();
      cm2?.dispose();
      cm3?.dispose();
      cm4?.dispose();
      cmn?.dispose();
      cmc?.dispose();
      capMat?.dispose();
      labelMat?.dispose();
      groundMat?.dispose();
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.008;
    }
  });

  return (
    <>
      <Environment preset="warehouse" />

      {/* LIGHTING */}
      <ambientLight color="#fff0f5" intensity={0.5} />
      <spotLight color="#ffffff" intensity={8} position={[6, 8, 6]} angle={0.2} penumbra={0.5} />
      <spotLight color="#7d2840" intensity={6} position={[-5, 2, 4]} angle={0.3} penumbra={0.7} />
      <spotLight color="#ffffff" intensity={4} position={[0, -5, -4]} angle={0.4} penumbra={0.9} />
      <pointLight color="#c0392b" intensity={3} position={[3, 0, 5]} />
      <pointLight color="#7d2840" intensity={2} position={[-3, 3, -3]} />

      <group ref={groupRef} position={[0, 0, 0]}>
        {/* BODY */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry ref={bodyGeometryRef} args={[1.2, 2.2, 0.8]} />
          <meshPhysicalMaterial
            ref={bodyMaterialRef}
            color="#050305"
            metalness={0.1}
            roughness={0}
            transmission={0.92}
            thickness={1.5}
            ior={1.5}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>

        {/* INNER LIQUID */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry ref={liquidGeometryRef} args={[1.0, 1.8, 0.6]} />
          <meshPhysicalMaterial
            ref={liquidMaterialRef}
            color="#3d0a1a"
            metalness={0}
            roughness={0}
            transmission={0.7}
            thickness={2}
            ior={1.4}
            opacity={0.9}
            transparent={true}
          />
        </mesh>

        {/* CHROME EDGES */}
        <mesh position={[0.6, 0, 0.4]}>
          <boxGeometry ref={edge1GeometryRef} args={[0.04, 2.2, 0.04]} />
          <meshStandardMaterial ref={chromeMat1Ref} color="#d0d0d0" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[-0.6, 0, 0.4]}>
          <boxGeometry ref={edge2GeometryRef} args={[0.04, 2.2, 0.04]} />
          <meshStandardMaterial ref={chromeMat2Ref} color="#d0d0d0" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0.6, 0, -0.4]}>
          <boxGeometry ref={edge3GeometryRef} args={[0.04, 2.2, 0.04]} />
          <meshStandardMaterial ref={chromeMat3Ref} color="#d0d0d0" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[-0.6, 0, -0.4]}>
          <boxGeometry ref={edge4GeometryRef} args={[0.04, 2.2, 0.04]} />
          <meshStandardMaterial ref={chromeMat4Ref} color="#d0d0d0" metalness={1} roughness={0} />
        </mesh>

        {/* NECK */}
        <mesh position={[0, 1.3, 0]}>
          <boxGeometry ref={neckGeometryRef} args={[0.35, 0.4, 0.3]} />
          <meshStandardMaterial ref={chromeMatNeckRef} color="#d0d0d0" metalness={1} roughness={0} />
        </mesh>

        {/* COLLAR */}
        <mesh position={[0, 1.52, 0]}>
          <boxGeometry ref={collarGeometryRef} args={[0.5, 0.06, 0.45]} />
          <meshStandardMaterial ref={chromeMatCollarRef} color="#d0d0d0" metalness={1} roughness={0} />
        </mesh>

        {/* DIAMOND CAP */}
        <mesh position={[0, 2.0, 0]} scale={[1, 0.7, 0.85]}>
          <octahedronGeometry ref={capGeometryRef} args={[0.38, 2]} />
          <meshPhysicalMaterial
            ref={capMaterialRef}
            color="#ffffff"
            metalness={0.2}
            roughness={0}
            transmission={0.95}
            thickness={0.5}
            ior={2.4}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>

        {/* LABEL */}
        <mesh position={[0, -0.1, 0.41]}>
          <planeGeometry ref={labelGeometryRef} args={[0.75, 0.9]} />
          <meshStandardMaterial
            ref={labelMaterialRef}
            color="#f2ece6"
            metalness={0.1}
            roughness={0.8}
            opacity={0.08}
            transparent={true}
          />
        </mesh>

        {/* GROUND REFLECTION */}
        <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry ref={groundGeometryRef} args={[8, 8]} />
          <meshStandardMaterial
            ref={groundMaterialRef}
            color="#0a0608"
            metalness={1}
            roughness={0.05}
            opacity={0.6}
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
    <div id="bottle" className="relative w-full h-[60vh] md:h-[100vh] bg-[#0a0608]">
      <Canvas camera={{ position: [0, 0.3, 5] }} flat={false} frameloop="always">
        <Scene />
      </Canvas>

      <div className="absolute bottom-[48px] left-0 right-0 flex flex-col items-center pointer-events-none z-10 text-center">
        <div className="font-inter text-[10px] tracking-[0.6em] text-[rgba(125,40,64,0.7)]">
          ÉTHERÉA · NO.01
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="font-inter text-[11px] text-[rgba(242,236,230,0.25)] mt-[8px]"
        >
          ↓ Continue
        </motion.div>
      </div>
    </div>
  );
}
