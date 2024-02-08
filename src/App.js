import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import About from './About';
import './App.css';
import biotech from './biotech.png';
import biotech2 from './biotech2.png';
import biotech3 from './biotech3.png';
import diya from './diya.png';
import useScrollPosition from './useScrollPosition';


function Cube({ imagePaths, spin }) {
  const meshRef = useRef();
  const texture1 = useLoader(TextureLoader, biotech);
  const texture2 = useLoader(TextureLoader, biotech2);
  const texture3 = useLoader(TextureLoader, biotech3);
  const texture4 = useLoader(TextureLoader, diya);


  useFrame(() => {
    const rotationSpeed = spin * 0.00001;
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
  });


  return (
    <mesh
      ref={meshRef}>



      <boxGeometry args={[2, 2, 2]} />s


      <meshBasicMaterial attach="material-0" map={texture4} />
      <meshBasicMaterial attach="material-1"map={texture4}/>
      <meshBasicMaterial attach="material-2" map={texture4} />
      <meshBasicMaterial attach="material-3" map={texture4}/>
      <meshBasicMaterial attach="material-4" map={texture4} />
      <meshBasicMaterial attach="material-5" map={texture4} />
      


    </mesh>
  );

};

export function Scene1 ({imagePaths}){

  const spin = useScrollPosition();
  return (
    <div style={{ height: '200vh' }}>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight intensity={.5} />
        <pointLight position={[2, 2, 2]} />
        <Cube imagePaths={imagePaths} spin={spin} />
      </Canvas>

    </div>
  )

}

const Scene = ({ imagePaths }) => {

  const spin = useScrollPosition();
  return (
    <div style={{ height: '200vh' }}>
    <About/>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 4, 2]} />
        <Cube imagePaths={imagePaths} spin={spin} />
      </Canvas>

    </div>

  )
}

function App() {

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {

    const handleScroll = () => setScrollY(window.scrollY);


    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);


  }, [])


  const imagePaths = [

    biotech,

  ]

  return (

    <div className='App'>
       
      <Scene imagePaths={imagePaths} />
    </div>
  );
}

export default App;
