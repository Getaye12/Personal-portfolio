import React from "react";
import './skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Brand Svg icons
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div className="cubespinner">
      <div className="face1">
        <FontAwesomeIcon icon={faNode} color="#3C873A" />
      </div>
      <div className="face2">
        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
      </div>
      <div className="face3">
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      </div>
      <div className="face4">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
      </div>
      <div className="face5">
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      </div>
      <div className="face6">
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
      </div>
    </div> 
  );
} 

export default Skills;





