import React, { useState } from "react";
import './ProjectFilter.scss';


interface ProjectFilterProps {
  onFilterProjects: (value: string) => void;
};

const ProjectFilter: React.FC<ProjectFilterProps> = ({ onFilterProjects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFilterClick = (value: string) => {
    setActiveFilter(value);
    onFilterProjects(value);
  };


  return (
    <ul className="d-flex filter">
      <li
        className={`mx-2 p-1 fs-5 filter__item ${activeFilter === 'all' ? 'active-filter' : ''}`}
        onClick={() => handleFilterClick('all')}
      >
        All
      </li>
      <li
        className={`mx-2 p-1 fs-5 filter__item ${activeFilter === 'year' ? 'active-filter' : ''}`}
        onClick={() => handleFilterClick('year')}
      >
        Year
      </li>
      <li
        className={`mx-2 p-1 fs-5 filter__item ${activeFilter === 'area' ? 'active-filter' : ''}`}
        onClick={() => handleFilterClick('area')}
      >
        Area
      </li>
    </ul>
  );
};


export default ProjectFilter;
