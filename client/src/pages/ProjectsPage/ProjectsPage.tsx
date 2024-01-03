// import React, { useState, useEffect } from "react";
// import { useGetProjectsQuery } from "../../redux/projectsApi";
// import { Project } from "../../models/project";
// import logo from '../../images/logo.png';

// import ProjectList from "../../components/ProjectList/ProjectList";
// import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
// import MobileProjectList from "../../components/MobileProjectList/MobileProjectList";

// import 'bootstrap/scss/bootstrap.scss';
// import 'animate.css';
// import './ProjectsPage.scss';


// interface Info {
//   rotateX: number,
//   rotateY: number,
//   rotateZ: number,
//   photoUrl: string,
// }

// const ProjectsPage: React.FC = () => {
//   const { data: projects, error, isLoading, isSuccess } = useGetProjectsQuery('');
//   const [filteredProjects, setFilteredProjects] = useState<Project[] | undefined>(projects);
//   const [hoveredProject, setHoveredProject] = useState<Project | null>();
//   const [info, setInfo] = useState<Info>({
//     rotateX: 60,
//     rotateY: 0,
//     rotateZ: 0,
//     photoUrl: ''
//   });

//   useEffect(() => {
//     isSuccess && setFilteredProjects(projects);
//   }, [isSuccess, projects]);

//   const handleFilterProjects = (filterParam: string): void => {
//     switch (filterParam) {
//       case 'all':
//         setFilteredProjects(projects);
//         break;

//       case 'year':
//       case 'area':
//         const prevValues: string[] = [];
//         const filteredArr: Project[] | [] = isSuccess ? projects.map((project) => {
//           const updatedProject: Project = { ...project };

//           if (!prevValues.includes(String(project[filterParam]))) {
//             prevValues.push(String(project[filterParam]));
//             updatedProject.filterTitle = String(project[filterParam]);
//           };
//           return updatedProject;

//         }).sort((a, b) => b[filterParam] - a[filterParam]) : [];

//         setFilteredProjects(filteredArr);
//         break;

//       default:
//         break;
//     };
//   };

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
//     const { clientX, clientY } = event;
//     let angle: number = (clientY - window.innerHeight / 2) * 0.007;
//     angle = angle < 0 ? Math.abs(angle * 1.5) : -angle * 1.5;

//     setInfo({
//       ...info,
//       rotateX: 60 + angle,
//       rotateY: (clientX - window.innerWidth / 2) * 0.007,
//     });
//   };

//   const handleScroll = (event: React.WheelEvent<HTMLDivElement>): void => {
//     setInfo({
//       ...info,
//       rotateZ: info.rotateZ + event.deltaY * 0.08,
//       photoUrl: ''
//     });
//   };


//   return (
//     <>
//       {error
//         ? (<p>error</p>)
//         : isLoading
//           ? (<div className="projects-page">
//             <img src={logo} alt="sova lab" width="100" height="50" className="loader" />
//           </div>)
//           : isSuccess && filteredProjects
//             ? (<div className="projects-page" onWheel={handleScroll} onMouseMove={handleMouseMove}>
//               <div className="projects-page__gallery">
//                 <ProjectList projects={filteredProjects} info={info} onHoverProject={setHoveredProject} />
//               </div>

//               <div className="projects-page__mobile-gallery">
//                 {/* <p>mobile gallery...</p> */}
//                 <MobileProjectList projects={filteredProjects} info={info} onHoverProject={setHoveredProject} />
//               </div>

//               {hoveredProject ?
//                 <div className="projects-page__project-photo">
//                   <p className="m-0 fs-1 fw-semibold text-center">{hoveredProject.title}</p>
//                   <img src={hoveredProject.photoUrl} alt="photo" className="rounded-1 my-2" />
//                   <p className="m-0 fw-semibold text-center">{hoveredProject.category}</p>
//                 </div>
//                 :
//                 <div className="projects-page__title">
//                   <div className="animate__animated animate__fadeInUp">
//                     <p className="m-0 fs-1 fw-semibold text-center">SOVA LAB</p>
//                   </div>
//                 </div>}

//               <div className="projects-page__filter">
//                 <ProjectFilter onFilterProjects={handleFilterProjects} />
//               </div>
//             </div>)
//             : null}
//     </>
//   );
// };


// export default ProjectsPage;

// ====================================================================

import React, { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../../redux/projectsApi";
import { Project } from "../../models/project";
import logo from '../../images/logo.png';

import ProjectList from "../../components/ProjectList/ProjectList";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
import MobileSlider from "../../components/MobileSlider/MobileSlider";

import 'bootstrap/scss/bootstrap.scss';
import 'animate.css';
import './ProjectsPage.scss';

interface Info {
  rotateX: number,
  rotateY: number,
  rotateZ: number,
  photoUrl: string,
};

const ProjectsPage: React.FC = () => {
  const { data: projects, error, isLoading, isSuccess } = useGetProjectsQuery('');
  const [showLoader, setShowLoader] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState<Project[] | undefined>(projects);
  const [hoveredProject, setHoveredProject] = useState<Project | null>();
  const [info, setInfo] = useState<Info>({
    rotateX: 60,
    rotateY: 0,
    rotateZ: 0,
    photoUrl: ''
  });
  // add animation for circle
  const [animate, setAnimate] = useState('animate__zoomIn');


  useEffect(() => {
    isSuccess && setFilteredProjects(projects);

    // Show loader for 3 seconds
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setTimeout(() => setAnimate(''), 1100);
    }, 3000);

    return () => clearTimeout(loaderTimeout); // Clear timeout on component unmount
  }, [isSuccess, projects]);

  const handleFilterProjects = (filterParam: string): void => {
    switch (filterParam) {
      case 'all':
        setAnimate('animate__zoomIn');
        setTimeout(() => setAnimate(''), 1000);
        setFilteredProjects(projects);
        break;

      case 'year':
      case 'area':
        const prevValues: string[] = [];
        const filteredArr: Project[] | [] = isSuccess ? projects.map((project) => {
          const updatedProject: Project = { ...project };

          if (!prevValues.includes(String(project[filterParam]))) {
            prevValues.push(String(project[filterParam]));
            updatedProject.filterTitle = String(project[filterParam]);
          };
          return updatedProject;

        }).sort((a, b) => b[filterParam] - a[filterParam]) : [];

        setAnimate('animate__zoomIn');
        setTimeout(() => setAnimate(''), 1000);
        setFilteredProjects(filteredArr);
        break;

      default:
        break;
    };
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = event;
    let angle: number = (clientY - window.innerHeight / 2) * 0.007;
    angle = angle < 0 ? Math.abs(angle * 1.5) : -angle * 1.5;

    setInfo({
      ...info,
      rotateX: 60 + angle,
      rotateY: (clientX - window.innerWidth / 2) * 0.007,
    });
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>): void => {
    setInfo({
      ...info,
      rotateZ: info.rotateZ + event.deltaY * 0.08,
      photoUrl: ''
    });
  };


  return (
    <>
      {error
        ? (<p>error</p>)
        : (isLoading || showLoader)
          ? (<div className="projects-page">
            <img src={logo} alt="" width="100" height="50" className="loader" />
          </div>)
          : isSuccess && filteredProjects
            ? (<div className="projects-page" onWheel={handleScroll} onMouseMove={handleMouseMove}>
              <div className={`animate__animated projects-page__gallery ${animate}`}>
                <ProjectList projects={filteredProjects} info={info} onHoverProject={setHoveredProject} />
              </div>

              {/* <div className="projects-page__mobile-gallery"> */}
              {/* <p>mobile gallery...</p> */}
              {/* </div> */}
              {/* <div className="projects-page__mobile-gallery"> */}
              <div className="projects-page__mobile-gallery">
                <MobileSlider projects={filteredProjects} />
              </div>

              {hoveredProject ?
                <div className="projects-page__project-photo">
                  <p className="m-0 fs-1 fw-semibold text-center">{hoveredProject.title}</p>
                  <img src={hoveredProject.photoUrl} alt="photo" className="rounded-1 my-2" />
                  <p className="m-0 fw-semibold text-center">{hoveredProject.category}</p>
                </div>
                :
                <div className="projects-page__title">
                  <div className="animate__animated animate__fadeInUp">
                    <p className="m-0 fs-1 fw-semibold text-center">SOVA LAB</p>
                  </div>
                </div>}

              <div className="projects-page__filter">
                <ProjectFilter onFilterProjects={handleFilterProjects} />
              </div>
            </div>)
            : null}
    </>
  );
};

export default ProjectsPage;
