import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import About from './About';
import './App.css';
import diya from './diya.png';
import diya2 from './diya2.jpeg';
import useScrollPosition from './useScrollPosition';


function Cube({ spin }) {
  const meshRef = useRef();
 
  const texture4 = useLoader(TextureLoader, diya);
  const texture3 = useLoader(TextureLoader, diya2);


  useFrame(() => {
    const rotationSpeed = spin * 0.00001;
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
  });


  return (
    <mesh
      ref={meshRef}>

      <boxGeometry args={[2, 2, 2]} />

      <meshBasicMaterial attach="material-0" map={texture3} />
      <meshBasicMaterial attach="material-1"map={texture3}/>
      <meshBasicMaterial attach="material-2" map={texture4} />
      <meshBasicMaterial attach="material-3" map={texture4}/>
      <meshBasicMaterial attach="material-4" map={texture3} />
      <meshBasicMaterial attach="material-5" map={texture3} />
      


    </mesh>
  );

};

export function Scene1 (){

  const spin = useScrollPosition();
  return (
    <div style={{ height: '200vh' }}>
    
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight intensity={.5} />
        <pointLight position={[2, 2, 2]} />
        <Cube  spin={spin} />
      </Canvas>

    </div>
  )

}

const Scene = () => {

  const spin = useScrollPosition();
  const[isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleDarkMode = () => { setIsDarkMode(!isDarkMode)};

  return (
    <div style={{ height: '200vh', background: isDarkMode ? '#333': 'transparent' }}>
    <button onClick={toggleDarkMode}>
      DarkMode
    </button>
    <About/>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 4, 2]} />
        <Cube spin={spin} />
      </Canvas>

    </div>

  )
}

function App() {

  return (

    <div className='App'>
      <Scene  />
    </div>
  );
}

export default App;
