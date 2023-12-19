import { NavLink, useParams } from "react-router-dom";
import { useGetProjectQuery } from "../../redux/projectsApi";

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
          ? (<div className="mt-5 text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>)
          : (isSuccess && project)
            ? (<div className='project-page py-5'>

              <div className='container'>
                <div className='row'>
                  {/* <div className="col-12 col-md-4 bg-primary-subtle"> */}
                  <div className="col-12 col-md-4">
                    <div className='px-4 py-2 shadow project-page__info'>
                      <p className='mb-5 fs-2 fw-semibold text-center'>{project.title}</p>
                      <ul className='project-page__info-list'>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>{project.year}</p>
                          <p className='mb-2 subinfo'>year</p>
                        </li>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>{project.area} м</p>
                          <p className='mb-2 subinfo'>Area/Scale</p>
                        </li>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>residental</p>
                          <p className='mb-2 subinfo'>type/secotr</p>
                        </li>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>2</p>
                          <p className='mb-2 subinfo'>floor</p>
                        </li>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>{project.location}</p>
                          <p className='mb-2 subinfo'>location</p>
                        </li>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>{project.category}</p>
                          <p className='mb-2 subinfo'>category</p>
                        </li>
                        <li className='py-3 py-sm-4'>
                          <p className='mb-2 fs-5 fw-semibold info'>new build</p>
                          <p className='mb-2 subinfo'>scope</p>
                        </li>
                      </ul>

                      <p>
                        <NavLink
                          to="/"
                          className={`nav-link fs-5 fw-semibold project-page__goback-link`}>All projects +</NavLink>
                      </p>
                    </div>
                  </div>

                  {/* <div className="col-12 col-md-8 bg-warning-subtle"> */}
                  <div className="col-12 col-md-8">
                    <div className='px-0 px-md-3 project-page-description'>
                      <p className='mb-5 fs-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

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