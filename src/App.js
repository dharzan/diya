import { Text } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import About, { Timeline } from "./About";
import "./App.css";
import diya from "./diya.png";
import diya2 from "./diya2.jpeg";

const sharedButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  borderRadius: "20px",
  backgroundColor: "#333",
  color: "#FFF",
  transition: "background-color 0.3s ease",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

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


export function Home() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define the button style to match the dropdown button style
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#333",
    color: "#FFF",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ textAlign: "end" }}>
          {/* Apply the buttonStyle to the toggle button */}
          <button onClick={toggleDarkMode} style={sharedButtonStyle}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      <DropdownMenu isDarkMode={isDarkMode} />

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
          <Cube></Cube>
        </Canvas>
      </div>
    </div>
  );
}


function DropdownMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  

  // Toggles the visibility of the dropdown content
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Styling for the dropdown button that aligns with your UI theme
  const buttonStyle = {
    padding: "10px 40px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#333",
    color: "#FFF",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    marginBottom: "10px", // Added to separate the button from the dropdown content visually
  };

  // Enhanced dropdown menu styling
  const menuStyle = {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    borderRadius: '5px',
    overflow: 'hidden', // Ensures the border radius applies to child elements
    zIndex: 1
  };

  // Styling for each dropdown item
  const itemStyle = {
    display: 'block',
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#333',
    backgroundColor: 'white', // Default background
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover
  };

  return (
    <div style={{ position: 'absolute', top: 20, right: 20 }}>
      <button onClick={toggleDropdown} style={buttonStyle}>
        Menu
      </button>
      {isOpen && (
        <div style={menuStyle}>
          <a href="#about-me" style={itemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>About Me</a>
          <a href="#timeline" style={itemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>Timeline</a>
          <a href="#projects" style={itemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>Projects</a>
          <a href="#contact-me" style={itemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>Contact Me</a>
        </div>
      )}
    </div>
  );
}



export default function App({ isDarkMode }) {
  return (
    <div>
      <Home />
    </div>
  );
}
