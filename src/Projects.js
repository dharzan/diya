import { faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DropdownMenu } from './App';
import { OrbitalVisualization, styles } from "./Timeline";


export default function Projects({isDarkMode}){
    const[on, setOn]= React.useState(false);
  
    
    const turnOn = ()  => { setOn(!on);  } 
       

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
        top: '0',
        left: '0',
      };
    
    return (
        <body >

            <div style={styles.app}>
            <h1 style={{textAlign:'center'}}>Projects</h1>
            <div className="timeline">
            <button style={buttonStyle} onClick={turnOn}>
            <FontAwesomeIcon icon={faMicroscope} />
            </button>

            </div>
            

                {on && <div style={styles.canvasContainer}>
                    <OrbitalVisualization/>
                </div>}

           
                <div className='App' >
                <DropdownMenu/>
                </div>

            </div>

        </body>
        
        )
}