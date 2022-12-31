import React from "react";
import Image from "next/image";
const ProjectCard = ({ project }) => {
  return (
    <div className="portfolio-page__gallery-item">
      <Image src={project.image} alt={project.title} />
      <ul>
        {project.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h2>{project.title}</h2>
      </a>
    </div>
  );
};
export default ProjectCard;
