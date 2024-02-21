import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { FaBrain, FaProjectDiagram, FaUniversity } from 'react-icons/fa'; // Example icons
import { Link } from 'react-scroll';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { DropdownMenu, Star } from './App'; // Navigation menu
import brain from "./brain3.stl";
import browneye from "./brown_eye.glb";
import lungs from "./lungs.glb";
import skull from "./skull.glb";



// Define styles for the page
const styles = {
  app: {
    color: 'white',
    backgroundColor: 'black', // Dark Theme Background
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '20px 0',
    textAlign: 'center', // Centers the text within its container
    display: 'flex', // Use flexbox to align items inline
    flex: 1,
    flexDirection: 'row', // Layout items in a row
    alignItems: 'center', // Center items vertically within the container
    justifyContent: 'center', // Center the content (icon and text) horizontally
    gap: '10px', // Adds space between the icon and the text
  },
  paragraph: {
    display:'flex',
    flex: 1,
    maxWidth: '800px',
    textAlign: 'justify',
    lineHeight: '1.6',
    fontSize: '1.2rem',
    margin: '10px',
  },
  canvasContainer: {
    width: '100%',
    height: '500px',
    marginBottom: '20px',
  },
  icon: {
    display:'flex',
    marginRight: '10px',
    fontSize: '1.5rem',
  },
  sectionDivider: {
    borderTop: '2px solid #555',
    width: '80%',
    margin: '40px auto',
  },
};
const SidebarStyles = {
    sidebar: {
      position: 'fixed',
      top: '20%',
      left: 0,
      width: '200px',
      height: 'auto',
      backgroundColor: 'black',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      zIndex: 100, // Ensure it's above other content
    },
    link: {
      margin: '10px 0',
      color: '#fff',
      cursor: 'pointer',
      textDecoration: 'none',
    }
  };
  
export const Sidebar = () => {
    return (
      <div style={SidebarStyles.sidebar}>
        <Link to="introSection" smooth={true} duration={500} style={SidebarStyles.link}>About Me</Link>
        <Link to="academicSection" smooth={true} duration={500} style={SidebarStyles.link}>Academic Background</Link>
        <Link to="projectsSection" smooth={true} duration={500} style={SidebarStyles.link}>Projects</Link>
      </div>
    );
  };
  

// Introduction Section with an icon
function IntroSection() {
    return (
      <div className='timeline'>

        <h1 style={styles.heading}><FaBrain style={styles.icon} />About Me</h1>
        {/* <p style={styles.paragraph}>
          I'm a junior Bioengineering student at the University Of Toledo, passionate about applying engineering principles to solve biological and medical problems. My journey in bioengineering is driven by curiosity and a deep desire to make a meaningful impact in healthcare.
        </p> */}
        <div className='about-timeline-item'>
        <p className='about-content'>

        I am currently a junior at the University of Toledo, pursuing a degree in Bioengineering with a concentration in pre-medical studies. My academic focus revolves around the intersection of biology and design, with a particular interest in exploring how technology can enhance advancements in the life sciences.
My career aspiration is to support healthcare professionals by innovating medical devices, implants, and procedures to improve patient outcomes. Outside of my studies, I have been actively involved in national-level badminton and hold a black belt in karate. Additionally, I enjoy sharing my passion for yoga through teaching, dedicating time to reading, and participating in campus activities during my free time.

           

        </p>
        </div>
      </div>
    );
  }
  
  // Academic and Skills Section with an icon
  function AcademicSection() {
    return (
      <div className='timeline'>
        <h2 style={styles.heading} paddingLeft={'20'}><FaUniversity style={styles.icon} />Skills</h2>
        {/* <p style={styles.paragraph}>
          Currently pursuing a B.S. in Bioengineering, I've engaged in coursework covering topics such as biomaterials, and so on. I'm also am skilled in Python and SolidWorks for biomedical applications.
        </p> */}
        <div className='about-timeline-item'>

        <p className='about-content'> 
        SolidWorks, Python, Biopython, MySQL, MATLAB, Tkinter, Minitab, Intergrated Cargo System (ICS), Microsoft Office
        
        </p>
        </div>
        
      </div>
    );
  }
  
  // Projects and Activities Section with an icon
  function ProjectsSection() {
    return (
      <div>
        <h2 style={styles.heading}><FaProjectDiagram style={styles.icon} />Projects & Extracurriculars</h2>
        <ul style={styles.paragraph}>
          <li>Class project on designing a low-cost prosthetic arm.</li>
          <li>Volunteer at [Local Hospital/Healthcare Event], assisting in patient data management and analysis.</li>
          <li>Member of the Bioengineering Society, participating in workshops and seminars on the latest industry trends.</li>
          {/* Add more projects and activities as needed */}
        </ul>
      </div>
    );
  }

  export const SkullModel = () => {
    const gltf = useLoader(GLTFLoader, skull);
    
    return <primitive object={gltf.scene} scale={[0.1, 0.1, 0.1]}  position={[5,0,0]} />
  };
  export const LungsModel = () => {
    const gltf = useLoader(GLTFLoader, lungs);
    
    return <primitive object={gltf.scene} scale={[2, 2, 2]} position={[0,0,0]} />
  };

  export const BrownEyeBallModel = () => {

    const gltf = useLoader(GLTFLoader, browneye);
    
    return <primitive object={gltf.scene} scale={[2, 2, 2]} position={[0,0,0]} />
  };


  export const BrainModel = () => {
    
    const geometry = useLoader(STLLoader, brain);
    return <mesh geometry={geometry}>
      <meshPhongMaterial attach="material" color="#B79E91" />
    </mesh>
  };

  const BrownEye = () => {

    const star = React.useMemo(() => {
        return new Array(600).fill().map((_, i) => <Star key={i} />);
      }, []);

    return (
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <BrownEyeBallModel />
          {star}
        </Suspense>
        <OrbitControls />
      </Canvas>

      
    );
  };


  const Skull = () => {

    const star = React.useMemo(() => {
        return new Array(600).fill().map((_, i) => <Star key={i} />);
      }, []);

    return (
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <SkullModel />
          {star}
        </Suspense>
        <OrbitControls />
      </Canvas>

      
    );
  };

  const SkullAndLungs = () => {

    const star = React.useMemo(() => {
        return new Array(600).fill().map((_, i) => <Star key={i} />);
      }, []);

    return (
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <SkullModel />
          <LungsModel/>
          {star}
        </Suspense>
        <OrbitControls />
      </Canvas>

      
    );
  };

  const Lungs = () => {

    const star = React.useMemo(() => {
        return new Array(600).fill().map((_, i) => <Star key={i} />);
      }, []);

    return (
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <LungsModel />
          {star}
        </Suspense>
        <OrbitControls />
      </Canvas>

      
    );
  };

  const Brain = () => {

    const star = React.useMemo(() => {
        return new Array(600).fill().map((_, i) => <Star key={i} />);
      }, []);

    return (
      <Canvas style={{ background: 'black' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <BrainModel />
          {star}
        </Suspense>
        <OrbitControls />
      </Canvas>

      
    );
  };
  
  // Use Section Dividers for visual separation
  export function AboutMe() {
    return (
      <div style={styles.app}>
        
        <div style={{width: '100%',height: '30%'}}>
          <Lungs/>
        </div>
        <DropdownMenu />
        <IntroSection />
        <div style={styles.sectionDivider}></div>

        
        <AcademicSection />
        
        
        
      </div>
    );
  }