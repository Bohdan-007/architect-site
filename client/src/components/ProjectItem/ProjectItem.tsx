import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Project } from '../../models/project';

import './ProjectItem.scss';


interface ProjectProps {
  project: Project,
  style: { x: number; y: number; rotation: number },
  onHoverProject: (project: Project | null) => void,
};

const ProjectItem: React.FC<ProjectProps> = ({ project, style: { x, y, rotation }, onHoverProject }) => {
  const [scale, setScale] = useState<number>(1);

  const handleMouseEnter = (): void => {
    setScale(1.2);
    onHoverProject(project);
  };

  const handleMouseLeave = (): void => {
    setScale(1);
    onHoverProject(null);
  };


  return (
    <NavLink
      to={`/project/${project.id}`}
      style={{
        transform: `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg) rotateX(-90deg) rotateY(180deg) scale(${scale})`
      }}
      className='project'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.photoUrl} />

      <div className='project__filter-title'>
        <div className="side front">{project.filterTitle}</div>
        <div className="side back">{project.filterTitle}</div>
      </div>
    </NavLink>
  );
};


export default ProjectItem;
