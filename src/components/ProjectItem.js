import React from "react";
import { v4 as uuidv4 } from 'uuid';

function ProjectItem({ name, about, technologies, id }) {
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((technology) => (
          <span key={uuidv4()}>{technology}</span>
        ))}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
