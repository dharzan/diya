import {
  faBars,
  faBrain,
  faBriefcaseMedical,
  faHeart,
  faLungs,
  faMicroscope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { TextureLoader } from "three";
import "./App.css";
import diya3 from "./Diya3.png";
import { OrbitalVisualization, styles } from "./Timeline";
import diya from "./diya.png";
import diya2 from "./diya2.jpeg";

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
    heading: {
      display: 'flex',
      flex: 1,
      fontSize: "2.5rem",
      margin: "20px 0",
      textAlign: "center", // Centers the text within its container
      
      flexDirection: "row", // Layout items in a row
      alignItems: "center", // Center items vertically within the container
      justifyContent: "center", // Center the content (icon and text) horizontally
      gap: "10px", // Adds space between the icon and the text
    },
    heading2: {
      display: "flex",
      flex: 1,
      fontSize: "1rem",
      margin: "20px 0",
      textAlign: "center", // Centers the text within its container
      flexDirection: "row", // Layout items in a row
      alignItems: "center", // Center items vertically within the container
      justifyContent: "flex-start", // Center the content (icon and text) horizontally
      gap: "10px", // Adds space between the icon and the text
      fontWeight: "bold",
    },
    app: {
      color: "white",
      backgroundColor: "black",

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

    timeline: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gripGap: "2rem",
      paddingBottom: "3rem",
    },

    timelineItem: {
      position: "relative",
      paddingLeft: "3rem",
      borderLeft: "1px solid var (--color-grey-5)",
    },

    tlIcon: {
      position: "absolute",
      left: "-27px",
      top: "0",
      backgroundColor: "var(--color-secondary)",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    tlDuration: {
      padding: "0.2rem 0.6rem",
      backgroundColor: "var(--color-grey-5)",
      borderRadius: "15px",
      display: "inline-block",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      fontWeight: "500",
    },

    title: {
      padding: "1rem 0",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      fontWeight: "600",
    },

    subtitle: {
      color: "var(--color-grey-2)",
      fontWeight: "500",
      fontSize: "1.2rem",
    },
    detail: {
      color: "var(--color-grey-2)",
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

  return (
    <div>
      <div style={styless.app}>
        <button onClick={handle3D} style={buttonStyle}>
          <FontAwesomeIcon icon={faBriefcaseMedical} />
        </button>

        <h1 style={styless.heading}>{is3D? "": "Timeline"}</h1>

        {is3D ? (
          <div style={styles.app}>
            <div style={styles.canvasContainer}>
              <OrbitalVisualization />
              {stars}
            </div>
          </div>
        ) : (
          // Updated component rendering to support multiple events per year
          <div className="timeline">
            <div className="timeline-item" onClick={handle3D}>
              {/* <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcaseMedical} />
              </div> */}
              <div className="content">
                <p className="tl-duration">December 2023 - Present</p>
                <h5 style={styless.heading2}>
                  Fundraising and Service Chair, Biomedical Engineering Society
                  (BMES), UToledo
                </h5>
                <p>
                  • Coordinate and oversee all fundraising initiatives,
                  activities, and regional/national conferences for the
                  Biomedical Engineering Society (BMES), ensuring strategic
                  alignment with organizational goals and member engagement
                </p>
                <p>
                  • Lead the planning and execution of monthly volunteering
                  events, fostering community service and enhancing the societal
                  impact of the bioengineering field
                </p>
                <p>
                  • Facilitate weekly membership meetings to discuss
                  advancements, address member concerns, and foster a
                  collaborative environment within the bioengineering community
                </p>
              </div>
            </div>
            <div className="timeline-item">
              {/* <div className="tl-icon">
                <i className="fas fa-briefcase">
                  <FontAwesomeIcon icon={faBriefcaseMedical} />
                </i>
              </div> */}
              <div className="content">
                <p className="tl-duration">August 2023 - Present</p>
                <h5 style={styless.heading2}>
                  Resident Assistant - Office of Residence Life, UToledo{" "}
                </h5>
                <p>
                  • Cultivate student relationships, fostering collaboration with fellow RAs to strategize and implement engaging events aimed at enhancing resident involvement
                </p>
                <p>
                  • Proactively identify and address student concerns, meticulously documenting incidents and health-related matters while adeptly resolving conflicts and conducting routine duty rounds
                </p>
                <p>
                  • Curate visually appealing bulletin boards and craft door decorations to enhance the ambiance of resident floors, ensuring a warm and inviting environment for incoming students
                </p>
                <p>
                  • Decorate bulletin boards and make door decs to make the
                  floor feel more welcoming to new students
                </p>
                •  Manage mail distribution via Starrez, efficiently assigning mail to respective mailboxes, and administer essential supplies including keys and locks from the building’s front desk to residents
              </div>
            </div>
            <div className="timeline-item">
              {/* <div className="tl-icon">
                <i className="fas fa-briefcase">
                  <FontAwesomeIcon icon={faBriefcaseMedical} />
                </i>
              </div> */}
              <div className="content">
                <p className="tl-duration">May 2023 - Present</p>
                <h5 style={styless.heading2}>
                 Certified Yoga Instructor, UToledo
                </h5>
                <p>
                  • Accredited YogaFit instructor specializing in Vinyasa, Hatha, Power Yoga, and Yoga Flow methodologies
                </p>
                <p>• Conduct thorough assessments of participants to discern individual needs and tailor training regimens accordingly</p>
                <p>• Inspire and empower participants to pursue and surpass their fitness objectives by crafting and adapting personalized routines designed to optimize performance and progress</p>
              </div>
            </div>
            <div className="timeline-item">
              {/* <div className="tl-icon">
                <i className="fas fa-briefcase">
                  <FontAwesomeIcon icon={faBriefcaseMedical} />
                </i>
              </div> */}
              <div className="content">
                <p className="tl-duration">May 2022 - December 2022
</p>
                <h5 style={styless.heading2}>
                Undergraduate Research Assistant- College of Life Science, UToledo
                </h5>
                <p>
                  • Conducted research in the field of Regio Degenerative Medicines alongside a doctorate candidate
                </p>
                <p>• Streamlined standard reactions and fundamental synthesis of compounds utilizing sophisticated organic equipment including NMR and Microvolume spectrometers, TLC Chambers, chromatographic systems, organic synthesizers, and rotary evaporators</p>
                <p>• Developed comprehensive lab manuals with supporting information and contributed to substrate scope studies, as well as meticulously proofreading research data</p>
              </div>
            </div>
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
