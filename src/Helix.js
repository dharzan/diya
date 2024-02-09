import React from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Helix = ({ images }) => {
  const { viewport } = useThree();
  const textures = useLoader(TextureLoader, images); // Load all images at once

  // Helix parameters
  const radius = 2; // Radius of the helix
  const turnHeight = 0.8; // Vertical distance between each turn

  return textures.map((texture, index) => {
    // Calculate helix position
    const angle = (index / textures.length) * Math.PI * 4; // Full circle every N items
    const x = Math.cos(angle) * radius;
    const y = (index - textures.length / 2) * turnHeight / textures.length; // Center Y around 0
    const z = Math.sin(angle) * radius;

    return (
      <mesh key={index} position={[x, y, z]} rotation={[0, -angle, 0]}>
        <planeGeometry args={[1, 1.5]} /> {/* Adjust plane size as needed */}
        <meshBasicMaterial attach="material" map={texture} transparent />
      </mesh>
    );
  });
};

export default Helix;