import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import useScrollPosition from './useScrollPosition';


const SpinningCube = ({ scroll }) => {
    const meshRef = useRef();
    useFrame(() => {

        const rotationSpeed = scroll * 0.00001;
        meshRef.current.rotation.x += rotationSpeed;
        meshRef.current.rotation.y += rotationSpeed

    })



    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>

    )
}

const About = () => {
const spin =  useScrollPosition()
    return (
        <div style = {{height:'200vh'}}>
            <h1>About Me</h1>
          
            <p>Hi, I'm Diya, Bioengineering Student </p>
            



            <div id="3D-model-Avatar-placeholder"> </div>
        </div>

    )
}

export default About;