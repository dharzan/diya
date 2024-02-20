import { Text } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import About, { Timeline } from "./About";
import "./App.css";
import diya from "./diya.png";
import diya2 from "./diya2.jpeg";
import diya3 from "./Diya3.png";
import useScrollPosition from "./useScrollPosition";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faClock,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faDragon,
  faMoon,
  faHeart,
  faStethoscope,
  faBrain,
  faMicroscope,
  faIdCardClip,
  faBriefcaseMedical,
  faLungs,
  faFaceSmile,
  faHeartCircleCheck,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrbitalVisualization } from "./Timeline";
import { styles } from "./Timeline";

// export function Planets(){

//   const meshRef=useRef();

//   useFrame(()=>{
//     const rotationSpeed = 0.05;

//     meshRef.current.rotation.y += rotationSpeed;
//   })
//   return(<mesh>

//   <sphereGeometry position={[-2, 0, 0]}/>

//   </mesh>)

// }

export function Cube({ spin, turnSpinOn }) {
  const meshRef = useRef();

  // spin = useScrollPosition();
  const texture2 = useLoader(TextureLoader, diya3);
  const texture4 = useLoader(TextureLoader, diya);
  const texture3 = useLoader(TextureLoader, diya2);

  useFrame(() => {
    // uncomment for scroll to spin
    // const rotationSpeed = spin * 0.002;
    // meshRef.current.rotation.y= -1*rotationSpeed;

    // for always spin leave this uncommented
    const rotationSpeed = 0.002;
    meshRef.current.rotation.y += rotationSpeed - 0.003;
    meshRef.current.rotation.x += rotationSpeed + 0.002;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />

      <meshBasicMaterial attach="material-0" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-1" map={texture4} color={"#999999"} />
      <meshBasicMaterial attach="material-2" map={texture2} color={"#999999"} />
      <meshBasicMaterial attach="material-3" map={texture2} color={"#999999"} />
      <meshBasicMaterial attach="material-4" map={texture3} color={"#999999"} />
      <meshBasicMaterial attach="material-5" map={texture3} color={"#999999"} />
    </mesh>
  );
}

export function Home() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [is3D, setIs3D] = React.useState(false);

  const styless = {
    app: {
      color: "white",
      backgroundColor: "black",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      minHeight: "100vh",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    gridItem: {
      backgroundColor: "#333", // Slightly lighter than the background for contrast
      padding: "20px",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      marginRight: "10px",
    },
    eventText: {
      marginTop: "10px",
    },
  };

  function handle3D() {
    setIs3D(!is3D);
  }

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
    marginBottom: "10px", // Added to separate the button from the dropdown content visually
  };

  const stars = useMemo(() => {
    return new Array(600).fill().map((_, i) => <Star key={i} />);
  }, []);

  // Example timeline events
  const timelineEvents = [
    {
      year: " BMEs December 2023- Present",
      events: [
        "Schedule and coordinate all BMES fundraising events, activities, and regional/national BMES conferences",
        "Organize one volunteering event each month",
        "Conduct weekly membership meetings."
      ],
    },
    {
      year: "2022",
      events: ["Launched Project Y"],
    },
    {
      year: "December 2021- Present",
      events: [
        "Schedule and coordinate all BMES fundraising events, activities, and regional/national BMES conferences",
        "Organize one volunteering event each month",
      ],
    },
    {
      year: "2020",
      events: ["Another significant event", "More achievements"],
    },
    // Add more events as needed
  ];

  return (
    <div>
      <div style={styless.app}>
        <button onClick={handle3D} style={buttonStyle}>
          <FontAwesomeIcon icon={faSuitcase} />
        </button>

        {is3D ? (
          <div style={styles.app}>
            <div style={styles.canvasContainer}>
              <OrbitalVisualization />
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>Timeline</h1>
        )}
        {is3D ? (
          <div style={styles.app}>
            <div style={styles.canvasContainer}>
              <OrbitalVisualization />
            </div>
          </div>
        ) : (
          // Updated component rendering to support multiple events per year
          <div style={styless.gridContainer}>
            {timelineEvents.map((item, index) => (
              <div key={index} style={styless.gridItem}>
                <div style={styles.eventHeader}>
                  <FontAwesomeIcon icon={faSuitcase} style={styless.icon} />
                  <span>{item.year}</span>
                </div>
                {item.events.map((event, idx) => (
                  <div key={idx} style={styless.eventText}>
                    {event.includes("\n\n") ? (
                      <ul>
                        {event.split("\n\n").map((point, pointIdx) => (
                          <li key={pointIdx} style={styless.listItem}>
                            {point.trim()}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{event}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <DropdownMenu />
      </div>
    </div>
  );
}

export function Star() {
  const position = useMemo(() => {
    // Generate a random position for each star
    return [
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
    ];
  }, []);

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
}

export function DropdownMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Toggles the visibility of the dropdown content
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Styling for the dropdown button that aligns with your UI theme
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
    marginBottom: "10px", // Added to separate the button from the dropdown content visually
  };

  // Enhanced dropdown menu styling
  const menuStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "white",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    borderRadius: "5px",
    overflow: "hidden", // Ensures the border radius applies to child elements
    zIndex: 1,
  };

  // Styling for each dropdown item
  const itemStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 20px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#333", // Default background
    transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover
  };
  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      <button onClick={toggleDropdown} style={buttonStyle}>
        <FontAwesomeIcon icon={faBars} />{" "}
        {/* Assuming faBars is imported for the menu icon */}
      </button>
      {isOpen && (
        <div style={menuStyle}>
          <a href="/" style={itemStyle}>
            <FontAwesomeIcon icon={faHeart} />
            {/* <FontAwesomeIcon icon={faHeart}  /> */}
            <span style={{ marginLeft: "0px" }}></span>
          </a>
          <a href="#/AboutMe" style={itemStyle}>
            {/* <FontAwesomeIcon icon={faStethoscope}  /> */}
            <FontAwesomeIcon icon={faLungs} />
            <span style={{ marginLeft: "0px" }}></span>
          </a>
          <a href="#/Timeline" style={itemStyle}>
            <FontAwesomeIcon icon={faBrain} />
            <span style={{ marginLeft: "0px" }}></span>
          </a>
          <a href="#/Projects" style={itemStyle}>
            <FontAwesomeIcon icon={faMicroscope} />
            <span style={{ marginLeft: "0px" }}></span>
          </a>
          <a href="#/Contact-Me" style={itemStyle}>
            <FontAwesomeIcon icon={faBriefcaseMedical} />
            <span style={{ marginLeft: "0px" }}></span>
          </a>
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
