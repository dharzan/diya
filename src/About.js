import React from 'react';
import useScrollPosition from './useScrollPosition';


const About = ({ isDarkMode }) => {
    const spin = useScrollPosition()
    return (
        <div style={{ height: '600vh' }}>
            <h1 style={{ color: isDarkMode ? 'green' : 'black' }}>About Me</h1>

            <p style={{ color: isDarkMode ? 'white' : 'black' }}>Hi, I'm Diya, Bioengineering Student </p>

            <div id="3D-model-Avatar-placeholder"> </div>
        </div>

    )
}

// TimeLine p
export function Timeline({ isDarkMode }) {

     







}

export default About;