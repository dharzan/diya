import {React} from 'react';
import { Canvas } from '@react-three/fiber';
import Helix from './Helix'


export default function AboutMe({images}){
    return (
        <div style={{ height: '100vh' }}>
            <h1>About Me</h1>
            <p>Hi, I'm [Diya Dhyani], a [Bioengineering Student]. Here's a glimpse into my life:</p>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Helix images={images} />
            </Canvas>
        </div>
    );
};