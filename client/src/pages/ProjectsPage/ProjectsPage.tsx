import React, { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../../redux/projectsApi";
import { Project } from "../../models/project";

import ProjectList from "../../components/ProjectList/ProjectList";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";

import './ProjectsPage.scss';

const projects: Project[] = [
  { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
  { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
  { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
  { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
  { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
  { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
  { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
  { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
  { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
  { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
  { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
  { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
  { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
  { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
  { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
  { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
  { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
  { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
  { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
  { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
];


const ProjectsPage: React.FC = () => {
  // const { data, error, isLoading, isSuccess } = useGetProjectsQuery('');
  // const projects: Project[] = data ?? [];
  // const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const [info, setInfo] = useState<any>({
    rotateX: 60,
    rotateY: 0,
    rotateZ: 0,
    photoUrl: ''
  });


  // useEffect(() => {
  //   isSuccess && setFilteredProjects(projects);
  // }, [isSuccess]);

  const handleFilterProjects = (filterParam: string) => {
    switch (filterParam) {
      case 'all':
        setFilteredProjects(projects);
        break;

      case 'year':
      case 'square':
        // console.log(filterParam);
        const filteredArr = [...projects].sort((a, b) => b[filterParam] - a[filterParam]);
        setFilteredProjects(filteredArr);
        // console.log(filteredArr);
        break;

      default:
        break;
    }
  };

  const handleMouseMove = (event: any): void => {
    const { clientX, clientY } = event;
    let angle = (clientY - window.innerHeight / 2) * 0.007;
    angle = angle < 0 ? Math.abs(angle * 1.5) : -angle * 1.5;

    setInfo({
      ...info,
      rotateX: 60 + angle,
      rotateY: (clientX - window.innerWidth / 2) * 0.007,
    });
  };

  const handleScroll = (event: any): void => {
    setInfo({
      ...info,
      rotateZ: info.rotateZ + event.deltaY * 0.08,
      photoUrl: ''
    });
  };


  // return (
  //   <>
  //     {error ? (
  //       <p>error</p>
  //     ) : isLoading ? (
  //       <p> loading...</p>
  //     ) : isSuccess && filteredProjects ? (
  //       <div className="projects-page" onWheel={handleScroll} onMouseMove={handleMouseMove}>
  //         <div className="projects-gallery">
  //           <ProjectList projects={filteredProjects} info={info} />
  //         </div>
  //         <ProjectFilter onFilterProjects={handleFilterProjects} />
  //       </div>
  //     ) : null}
  //   </>
  // );

  return (
    <div className="projects-page" onWheel={handleScroll} onScroll={handleScroll} onMouseMove={handleMouseMove}>
      {/* <h1>qwe</h1> */}
      <div className="projects-gallery">
        <ProjectList projects={filteredProjects} info={info} />
      </div>
      <ProjectFilter onFilterProjects={handleFilterProjects} />
    </div>
  );
};

export default ProjectsPage;
