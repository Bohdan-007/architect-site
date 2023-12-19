import React, { useState } from "react";
import { Project } from "../../models/project";
import ProjectItem from "../ProjectItem/ProjectItem";

import './MobileProjectList.scss';


interface MobileProjectListProps {
  projects: Project[],
  info: { rotateX: number, rotateY: number, rotateZ: number },
  onHoverProject: (photoUrl: string) => void,
};

interface MobileProjectItemStyle {
  x: number,
  y: number,
  rotation: number,
}

const MobileProjectList: React.FC<MobileProjectListProps> = ({ projects, info: { rotateX, rotateY, rotateZ }, onHoverProject }) => {
  const [radius, setRadius] = useState<number>(calculateRadius());

  function calculateRadius(): number {
    const factor: number = 0.55;
    return Math.min(window.innerWidth, window.innerHeight) * factor;
  };

  const handleHoverProject = (photoUrl: string): void => {
    onHoverProject(photoUrl);
  };

  const cardWidth: number = 80;
  const cardHeight: number = 50;
  const numberOfCards: number = projects.length;


  return (
    <ul style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` }} className="project-list">
      {projects.map((project, idx: number) => {
        const angle: number = (idx / numberOfCards) * 2 * Math.PI;
        const x: number = 250 * Math.cos(angle) - cardWidth / 2;
        const y: number = 250 * Math.sin(angle) - cardHeight / 2;
        const rotation: number = angle * (180 / Math.PI);
        const style: MobileProjectItemStyle = { x, y, rotation };

        return (
          <li key={idx}>
            <ProjectItem project={project} style={style} onHoverProject={handleHoverProject} />
          </li>
        )
      })}
    </ul >
  );
};


export default MobileProjectList;
