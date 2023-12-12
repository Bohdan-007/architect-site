import React, { useState } from 'react';
import { Project } from '../../models/project';

import './ProjectItem.scss';
import { NavLink } from 'react-router-dom';


interface ProjectProps {
  // project: Project;
  project: any
  style: any;
  onHoverProject: (photoUrl: string) => void;
};

const ProjectItem: React.FC<ProjectProps> = ({ project, style, onHoverProject }) => {
  const [transformStyle, setTransformStyle] = useState({ ...style, scale: 1 });


  const handleMouseEnter = (): void => {
    setTransformStyle({ ...transformStyle, scale: 1.2 });

    onHoverProject(project.photoUrl);
  };

  const handleMouseLeave = (): void => {
    setTransformStyle({ ...transformStyle, scale: 1 });
    onHoverProject('');
  };


  // console.log(`translateX(${transformStyle.x}px) translateY(${transformStyle.y}px) rotate(${transformStyle.rotation}deg) rotateX(-90deg) rotateY(180deg) scale(${transformStyle.scale})`);


  return (
    // <NavLink to={`/project/${project.id}`}>

    <NavLink
      to={`/project/${project.id}`}
      style={{
        transform: `translateX(${transformStyle.x}px) translateY(${transformStyle.y}px) rotate(${transformStyle.rotation}deg) rotateX(-90deg) rotateY(180deg) scale(${transformStyle.scale})`
      }}
      className='card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.photoUrl} />

      {/* <p className='fw-semibold test'>{ project.year}</p> */}

      {/* <p>{project.title}</p>
      <p>{project.year}</p> */}
    </NavLink>
  );
};


export default ProjectItem;
