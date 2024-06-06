import React, { useEffect } from "react";

import Particle from "../UI/Particle";
import Projects from "./Projects";
import { AllProjects } from "../../constants";

const ProjectMain = () => {
  useEffect(() => {
    document.title = "My Previous Projects";
  });
  return (
    <div className="projectMain">
      <Particle />
      {AllProjects.map((project) => (
        <Projects
          key={project.id}
          images={project.images}
          heading={project.heading}
          description={project.description}
          href={project.href}
        />
      ))}
    </div>
  );
};

export default ProjectMain;
