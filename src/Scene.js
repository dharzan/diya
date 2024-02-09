// App.js or Scene.js, depending on your structure
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube'; // Assuming Cube is in its own file
import useScrollPosition from './useScrollPosition';
import About from './About';
import Timeline from './Timeline'; // Import the Timeline component

const Scene = () => {
    const scrollY = useScrollPosition();
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [spin, setSpin] = useState(true); // Use state to control spinning
    
    useEffect(() => {
        const timelineElement = document.getElementById('timeline');
        const checkPosition = () => {
            if (timelineElement) {
                const rect = timelineElement.getBoundingClientRect();
                // Check if the top of the timeline is in view
                if (rect.top <= window.innerHeight) {
                    setSpin(false); // Stop spinning
                } else {
                    setSpin(true); // Continue spinning
                }
            }
        };
        
        window.addEventListener('scroll', checkPosition);
        checkPosition(); // Initial check
        
        return () => window.removeEventListener('scroll', checkPosition);
    }, []);
    
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div style={{ height: '200vh' }}>
            <button onClick={toggleDarkMode}>DarkMode</button>
            <About isDarkMode={isDarkMode} />
            <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: isDarkMode ? 'black' : 'transparent' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[4, 4, 3]} />
                <Cube spin={spin ? scrollY : 0} /> {/* Pass spin as 0 to stop */}
                <Timeline />
            </Canvas>
            
        </div>
    );
};

export default Scene;
