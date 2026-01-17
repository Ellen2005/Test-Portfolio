import React, { useEffect } from 'react';
import './ProjectDialog.css';

const ProjectDialog = ({ project, isOpen, onClose }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="dialog-overlay" onClick={handleOverlayClick}>
      <div className="dialog-content">
        <button className="dialog-close" onClick={onClose} aria-label="Close dialog">
          ×
        </button>
        <div className="dialog-image-container">
          <img src={project.image} alt={project.title} className="dialog-image" />
        </div>
        <div className="dialog-body">
          <h2 className="dialog-title">{project.title}</h2>
          <p className="dialog-description">{project.fullDescription}</p>
          <div className="dialog-technologies">
            <h3 className="tech-section-title">Technologies Used:</h3>
            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
          {project.links && (
            <div className="dialog-links">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dialog-link live-link"
                >
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dialog-link github-link"
                >
                  View Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
