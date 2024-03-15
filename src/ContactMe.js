import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { DropdownMenu } from "./App";
import { OrbitalVisualization, styles } from "./Timeline";
import diya_bitmoji from './image-bit.png';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"></span>
            <br></br>
            <TypeAnimation
              sequence={[
                "diyadhayni59@gmail.com",
                1000,
                "Bioengineer",
                1000,
                "Python",
                1000,
                "SQL",
                1500,
                "SolidWorks",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          </p>
          <div>
           
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[black] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={diya_bitmoji}
             
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function ContactMe() {
  const [on, setOn] = React.useState(false);

  const turnOn = () => {
    setOn(!on);
  };

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
    top: "0",
    left: "0",
  };

  return (
    <div style={styles.app}>
      <h1>Contact Me</h1>
      <button style={buttonStyle} onClick={turnOn}>
        <FontAwesomeIcon icon={faBriefcaseMedical} />
      </button>

      {on && (
        <div style={styles.canvasContainer}>
          <OrbitalVisualization />
        </div>
      )}

      <HeroSection/>

      <div className="App">
        <DropdownMenu />
      </div>
    </div>
  );
}

export default ContactMe;
