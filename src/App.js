import { Text } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import About, { Timeline } from "./About";
import "./App.css";
import diya from "./diya.png";
import diya2 from "./diya2.jpeg";

export function Cube({ spin }) {
  const meshRef = useRef();

  const texture4 = useLoader(TextureLoader, diya);
  const texture3 = useLoader(TextureLoader, diya2);

  useFrame(() => {
    const rotationSpeed = 0.002;

    meshRef.current.rotation.y += rotationSpeed + 0.01;
    meshRef.current.rotation.x += rotationSpeed - 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />

      <meshBasicMaterial attach="material-0" map={texture3} color={"#999999"} />
      <meshBasicMaterial attach="material-1" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-2" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-3" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-4" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-5" map={texture3} color={"#999999"} />
    </mesh>
  );
}
export function AboutMeMesh({ isDarkMode, isMeshOn }) {
  

  return <>
    <Text color={isDarkMode? 'white':'black'} fontSize={0.2} position={[0,0,0]}> 
  {'Aspring bioengineer, that is determined to create new innovative medical technology'}  </Text>
  
  <Text color={isDarkMode? 'white':'black'} fontSize={0.2} position={[0,0,0]}>  </Text>

  </>
}

export function Scene() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isMeshOn, setMeshOn] = React.useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleMeshOn = () => {
    setMeshOn(!isMeshOn);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{ textAlign: "start" }}>
          <button onClick={toggleMeshOn}>
            {!isMeshOn ? "Pictures" : "About Me"}
          </button>
        </div>
        <div style={{ textAlign: "end" }}>
          <button onClick={toggleDarkMode} display={"inline-block"}>
            {isDarkMode ? "LightMode" : "DarkMode"}
          </button>
        </div>
      </div>


      <div className="App">
        <About isDarkMode={isDarkMode} />
        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            background: isDarkMode ? "black" : "transparent",
          }}
        >
          <perspectiveCamera position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 4, 2]} />
          {isMeshOn ? <Cube></Cube> : <AboutMeMesh isDarkMode={isDarkMode}></AboutMeMesh>}
        </Canvas>
        <Timeline isDarkMode={isDarkMode} />
       
      </div>
    </div>
  );
}


export default function App({ isDarkMode }) {
  return (
    <div>
      <Scene />
    </div>
  );
}
