import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import About from './About';
import './App.css';
import diya from './diya.png';
import diya2 from './diya2.jpeg';
import useScrollPosition from './useScrollPosition';
import AboutMe from './AboutMe';
 


function Cube({ spin }) {
  const meshRef = useRef();
 
  const texture4 = useLoader(TextureLoader, diya);
  const texture3 = useLoader(TextureLoader, diya2);
  useFrame(() => {
    const rotationSpeed = spin * 0.005;
    
    meshRef.current.rotation.y = rotationSpeed;
   
    meshRef.current.rotation.zIndex = rotationSpeed;
    
  });


  return (
    <mesh
      ref={meshRef}>

      <boxGeometry args={[3, 3, 3]} />

      <meshBasicMaterial attach="material-0" map={texture3} color={"#999999"} />
      <meshBasicMaterial attach="material-1" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-2" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-3" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-4" map={texture3} color={"#999999"} />
      <meshBasicMaterial attach="material-5" map={texture3} color={"#999999"} />
      


    </mesh>
  );

};

const Scene = () => {

  const spin = useScrollPosition();
  const[isDarkMode, setIsDarkMode] = React.useState(true);
  const toggleDarkMode = () => { setIsDarkMode(!isDarkMode)};

  return (
    <div style={{ height: '200vh' }}>
    <button onClick={toggleDarkMode}>
      DarkMode
    </button>
    <About isDarkMode={isDarkMode}/>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: isDarkMode? 'black': 'transparent'}}>
      <perspectiveCamera position={[0,0,5]}/>
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 3]} />
        <Cube spin={spin} />
      </Canvas>

    </div>

  )
}

function App() {

  return (
    <div className='App'>
      <Scene/>
    </div>
  );
}

export default App;
