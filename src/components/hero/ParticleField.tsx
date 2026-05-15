'use client';

import { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSystem = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const count = 1200;

  const { positions, initialPositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // x [-15, 15]
      initialPositions[i3] = (Math.random() - 0.5) * 30;
      // y [-10, 10]
      initialPositions[i3 + 1] = (Math.random() - 0.5) * 20;
      // z [-10, 5]
      initialPositions[i3 + 2] = (Math.random() * 15) - 10;

      positions[i3] = initialPositions[i3];
      positions[i3 + 1] = initialPositions[i3 + 1];
      positions[i3 + 2] = initialPositions[i3 + 2];
    }

    return { positions, initialPositions };
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const geometry = pointsRef.current.geometry;
    const positionsAttribute = geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Update y position (drifting upwards)
      initialPositions[i3 + 1] += 0.0008;

      // Wrap y position
      if (initialPositions[i3 + 1] > 10) {
        initialPositions[i3 + 1] = -10;
      }

      // Apply parallax effect (mouse max shift ±0.5)
      // We apply it to current positions based on initial positions + drift
      positionsAttribute.array[i3] = initialPositions[i3] + mouse.current.x * 0.5;
      positionsAttribute.array[i3 + 1] = initialPositions[i3 + 1] + mouse.current.y * 0.5;
      positionsAttribute.array[i3 + 2] = initialPositions[i3 + 2];
    }

    positionsAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="white"
        opacity={0.4}
        transparent={true}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default function ParticleField() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <color attach="background" args={['black']} />
      <ParticleSystem />
    </Canvas>
  );
}
