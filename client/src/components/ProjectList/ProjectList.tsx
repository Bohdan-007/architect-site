import React, { useState, useEffect } from "react";
import { Project } from "../../models/project";
import ProjectItem from "../ProjectItem/ProjectItem";

import './ProjectList.scss';


interface ProjectListProps {
  projects: Project[];
  info: any;
  onHoverProject: (photoUrl: string) => void;
};

const ProjectList: React.FC<ProjectListProps> = ({ projects, info, onHoverProject }) => {
  const [radius, setRadius] = useState(calculateRadius());

  function calculateRadius() {
    const factor = 0.55;
    return Math.min(window.innerWidth, window.innerHeight) * factor;
  };

  useEffect(() => {
    const handleResize = (): void => {
      // setRadius(calculateRadius());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHoverProject = (photoUrl: string): void => {
    onHoverProject(photoUrl);
  };


  const cardWidth: number = 80;
  const cardHeight: number = 50;
  const numberOfCards: number = projects.length;

  
  return (
    <div style={{ transform: `rotateX(${info.rotateX}deg) rotateY(${info.rotateY}deg) rotateZ(${info.rotateZ}deg)` }} className="card-list">
      {
        projects.map((project, idx: number) => {
          const angle = (idx / numberOfCards) * 2 * Math.PI;
          const x = radius * Math.cos(angle) - cardWidth / 2;
          const y = radius * Math.sin(angle) - cardHeight / 2;
          const rotation = angle * (180 / Math.PI);
          const style = { x, y, rotation };

          return (
            <>
              <ProjectItem key={project.id} project={project} style={style} onHoverProject={handleHoverProject} />
            </>
          )
        })
      }
    </div>
  );
};


export default ProjectList;
