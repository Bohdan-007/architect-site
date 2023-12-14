import React, { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../../redux/projectsApi";
import { Project } from "../../models/project";

import ProjectList from "../../components/ProjectList/ProjectList";
import MobileProjectList from "../../components/MobileProjectList/MobileProjectList";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
// import TestMobileProjectList from "../../components/TestMobileProjectList/TestMobileProjectList";

import 'bootstrap/scss/bootstrap.scss';
import './ProjectsPage.scss';


const ProjectsPage: React.FC = () => {
  const { data: projects, error, isLoading, isSuccess } = useGetProjectsQuery('');
  const [filteredProjects, setFilteredProjects] = useState<Project[] | undefined>(projects);
  const [projectPhotoUrl, setProjectPhotoUrl] = useState<string>('');

  const [info, setInfo] = useState<any>({
    rotateX: 60,
    rotateY: 0,
    rotateZ: 0,
    photoUrl: ''
  });

  useEffect(() => {
    isSuccess && setFilteredProjects(projects);
  }, [isSuccess, projects]);

  const handleFilterProjects = (filterParam: string): void => {
    switch (filterParam) {
      case 'all':
        setFilteredProjects(projects);
        break;

      case 'year':
      case 'area':
        const prevValues: any[] = [];

        const filteredArr: Project[] | [] = isSuccess ? projects.map((project) => {
          const updatedProject = { ...project, filterTitle: '' };
          if (!prevValues.includes(project[filterParam])) {
            prevValues.push(project[filterParam]);
            updatedProject.filterTitle = String(project[filterParam]);
          }
          return updatedProject;
        }).sort((a, b) => b[filterParam] - a[filterParam]) : [];

        // console.log(prevValues);
        // console.log(filteredArr);

        setFilteredProjects(filteredArr);
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


  return (
    <>
      {error ? (
        <p>error</p>
      ) : isLoading ? (
        <div className="projects-page">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : isSuccess && filteredProjects ? (
        <div className="projects-page" onWheel={handleScroll} onMouseMove={handleMouseMove}>
          <div className="projects-page__gallery">
            <ProjectList projects={filteredProjects} info={info} onHoverProject={setProjectPhotoUrl} />
          </div>

          <div className="projects-page__mobile-gallery">
            <p>mobile gallery...</p>
            {/* <MobileProjectList projects={filteredProjects} info={info} onHoverProject={setProjectPhotoUrl} /> */}
          </div>
          {/* <TestMobileProjectList projects={filteredProjects} /> */}

          <div className="projects-page__project-photo">
            {projectPhotoUrl &&
              <img
                src={projectPhotoUrl}
                alt="photo"
                className="rounded-1"
              />}
          </div>

          <div className="projects-page__filter">
            <ProjectFilter onFilterProjects={handleFilterProjects} />
          </div>
        </div>
      ) : null}
    </>
  );
};


export default ProjectsPage;
