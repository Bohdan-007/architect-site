import React, { useEffect, useState } from 'react';
import { Project } from '../../models/project';

import './ProjectItem.scss';
import { NavLink } from 'react-router-dom';


interface ProjectProps {
  // project: Project;
  project: any;
  style: { x: number; y: number; rotation: number };
  onHoverProject: (photoUrl: string) => void;
};

const ProjectItem: React.FC<ProjectProps> = ({ project, style, onHoverProject }) => {
  const [transformStyle, setTransformStyle] = useState({ ...style, scale: 1 });
  // const [filterTitleStyle, setFilterTitleStyle] = useState(0);


  // useEffect(() => {
  //   if (transformStyle.x > 0) {
  //     setFilterTitleStyle(180)
  //   } else {
  //     setFilterTitleStyle(0)
  //   }

  // }, [style]);


  const handleMouseEnter = (): void => {
    setTransformStyle({ ...transformStyle, scale: 1.2 });

    onHoverProject(project.photoUrl);
  };

  const handleMouseLeave = (): void => {
    setTransformStyle({ ...transformStyle, scale: 1 });
    onHoverProject('');
  };

  // console.log(`translateX(${transformStyle.x}px) translateY(${transformStyle.y}px) rotate(${transformStyle.rotation}deg) rotateX(-90deg) rotateY(180deg) scale(${transformStyle.scale})`);
  // console.log(`translateX(${transformStyle.x}px)`);


  return (
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

      <div className='filter-title'>
        <div className="cube">
          <div className="side front">
            <p>{project.filterTitle}</p>
            {/* front */}
          </div>
          <div className="side back">
            {/* back */}
            <p>{project.filterTitle}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};


export default ProjectItem;
