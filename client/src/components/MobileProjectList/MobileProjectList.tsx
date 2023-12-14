import React, { useState, useEffect } from "react";
import { Project } from "../../models/project";
import ProjectItem from "../ProjectItem/ProjectItem";

import './MobileProjectList.scss';


interface MobileProjectList {
  projects: Project[];
  info: any;
  onHoverProject: (photoUrl: string) => void;
};

const MobileProjectList: React.FC<MobileProjectList> = ({ projects, info, onHoverProject }) => {

  const handleHoverProject = (photoUrl: string): void => {
    onHoverProject(photoUrl);
  };

  const cardWidth: number = 80;
  const cardHeight: number = 50;
  const numberOfCards: number = projects.length;


  return (
    <div style={{ transform: `rotateX(${info.rotateX}deg) rotateY(${info.rotateY}deg) rotateZ(${info.rotateZ}deg)` }} className="mobile-card-list">
      {
        projects.map((project, idx: number) => {

          const angle = (idx / numberOfCards) * 2 * Math.PI;
          const x = 250 * Math.cos(angle) - cardWidth / 2;
          const y = 250 * Math.sin(angle) - cardHeight / 2;
          const rotation = angle * (180 / Math.PI);
          const style = { x, y, rotation };

          return (
            <>
              {/* <ProjectItem key={project.id} project={project} style={style} onHoverProject={handleHoverProject} /> */}
            </>
          )
        })
      }
    </div>
  );
};


export default MobileProjectList;
