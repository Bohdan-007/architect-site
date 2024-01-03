import { NavLink, useParams } from "react-router-dom";
import { useGetProjectQuery } from "../../redux/projectsApi";
import logo from '../../images/logo.png';

import 'bootstrap/scss/bootstrap.scss';
import './OneProjectPage.scss';


const OneProjectPage: React.FC = () => {
  const params = useParams();
  const { data: project, error, isLoading, isSuccess } = useGetProjectQuery(params.id);


  return (
    <>
      {error
        ? (<p>Oh no, there was an error</p>)
        : isLoading
          ? (<div className="projects-page">
            <img src={logo} alt="" width="100" height="50" className="loader" />
          </div>)
          : (isSuccess && project)
            ? (<div className='project-page py-5'>

              <div className='container'>
                <div className='row'>
                  <div className="col-12 col-md-4">
                    <div className='px-4 py-2 shadow project-page__info'>
                      {/* <p className='mb-5 fs-2 fw-semibold text-center'>{project.title}</p> */}
                      <ul className='project-page__info-list'>
                        <li className='mb-5 d-flex flex-column align-items-center fw-semibold animate__animated animate__fadeInUp'>
                          <div className="w-100 d-flex align-items-end">
                            <span>title:</span>
                            <span className='fs-2 info jp-title'>{project.title}</span>
                          </div>
                          <p className="m-0 fs-2">!@#$%^&*</p>
                        </li>
                        <li className='mb-5 d-flex justify-content-between align-items-center fw-semibold'>
                          <div className="animate__animated animate__fadeInUp">
                            <span>year: </span>
                            <span className='fs-5 info'>{project.year}</span>
                          </div>
                        </li>
                        <li className='mb-5 d-flex justify-content-between align-items-center fw-semibold'>
                          <div className="animate__animated animate__fadeInUp">
                            <span>type: </span>
                            <span className='fs-5 info'>residental</span>
                          </div>
                        </li>
                        <li className='mb-5 d-flex justify-content-between align-items-center fw-semibold'>
                          <div className="animate__animated animate__fadeInUp">
                            <span>location: </span>
                            <span className='fs-5 text-uppercase info'>{project.location}</span>
                          </div>
                        </li>
                        <li className='mb-5 d-flex justify-content-between align-items-center fw-semibold'>
                          <div className="animate__animated animate__fadeInUp">
                            <span>scope: </span>
                            <span className='fs-5 info'>new build</span>
                          </div>
                        </li>
                        <li className='mb-5 d-flex justify-content-between align-items-center fw-semibold'>
                          <div className="animate__animated animate__fadeInUp">
                            <span>material: </span>
                            <span className='fs-5 info'>bricks</span>
                          </div>
                        </li>
                        <li className='mb-5 d-flex justify-content-between align-items-center fw-semibold'>
                          <div className="animate__animated animate__fadeInUp">
                            <span>scale/area: </span>
                            <span className='fs-5 info'>{project.area} m<sup>2</sup></span>
                          </div>
                        </li>
                      </ul>

                      <p>
                        <NavLink
                          to="/"
                          className={`nav-link fs-5 fw-semibold project-page__goback-link animate__animated animate__fadeInUp`}>All projects +</NavLink>
                      </p>
                    </div>
                  </div>

                  {/* <div className="col-12 col-md-8 bg-warning-subtle"> */}
                  <div className="col-12 col-md-8">
                    <div className='px-0 px-md-3 project-page-description'>
                      <div className='mb-5 image-wrapper'>
                        {/* <img src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" alt="" /> */}
                        <img src={project.photoUrl} alt={project.title} />
                      </div>

                      <p className='mb-5 fs-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <div className='image-wrapper'>
                        <img src={project.photoUrl} alt={project.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
            : null}
    </>
  );
};


export default OneProjectPage;