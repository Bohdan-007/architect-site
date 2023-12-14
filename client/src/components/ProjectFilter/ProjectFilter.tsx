import React from "react";

import './ProjectFilter.scss';


interface ProjectFilterProps {
  onFilterProjects: (value: string) => void;
};

const ProjectFilter: React.FC<ProjectFilterProps> = ({ onFilterProjects }) => {
  return (
    <ul className="d-flex filter">
      <li className="mx-2 p-1 fs-5 filter__item" onClick={() => onFilterProjects('all')}>All</li>
      <li className="mx-2 p-1 fs-5 filter__item" onClick={() => onFilterProjects('year')}>Year</li>
      <li className="mx-2 p-1 fs-5 filter__item" onClick={() => onFilterProjects('area')}>Area</li>
    </ul>
  );
};


export default ProjectFilter;
