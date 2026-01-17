import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick, ...aosProps }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)} {...aosProps}>
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <span className="view-details">View Details</span>
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.shortDescription}</p>
        <div className="project-tech-tags">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
