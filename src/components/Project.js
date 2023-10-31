import React from "react";
import {projectsData} from "../data/ProjectsData.js";
import { useState } from "react";
const Project = ({id}) => {
  const [currentProject] = useState(projectsData[id]);
  return (
    <div className="projet">
      <img src={currentProject.img} alt={`projet de ${currentProject.title}`} />
      <span>
        <p>{currentProject.infos}</p>
      </span>
      
    </div>
  );
};

export default Project;
