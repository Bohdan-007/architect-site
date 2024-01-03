import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './WorkSection.scss';


const WorkSection: React.FC = () => {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refSubtitle, inViewSubtitle] = useInView({ triggerOnce: true });
  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });
  const [refLink, inViewLink] = useInView({ triggerOnce: true });


  return (
    <div className="works-section">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <p ref={refSubtitle} className={`works-section__subtitle animate__animated ${inViewSubtitle ? 'animate__rotateInUpLeft' : ''}`}>Our work</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 ref={refTitle} className={`works-section__title animate__animated ${inViewTitle ? 'animate__fadeInUp' : ''}`}>We do social space.</h2>
          </div>
        </div>

        <div className="row mb-2 mb-lg-5">
          <div className="col-12 col-md-6">
            <p ref={refDesc} className={`works-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              Our work focuses on the most vibrant places in today’s world:
              retail and leisure destinations, large mixed-use complexes, and community hubs.
            </p>
            <p ref={refDesc} className={`works-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              We define ourselves as creators of social spaces:
              we design projects that place the human being at centre stage,
              creating new environments for social encounters and authentic collective identities.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p ref={refDesc} className={`works-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              We deliver lively public spaces which are intimately
              connected to the people who use them and transform the
              urban fabric in which they are built.
            </p>
            <p ref={refDesc} className={`works-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              Our experience and creative spirit enables us to take
              advantage of unexpected potentials, manage complex conditions,
              and successfully deliver projects that are truly outstanding,
              truly active – truly social.
            </p>
            <p>
              <NavLink ref={refLink}
                to="/"
                className={`nav-link fs-5 fw-semibold works-section__link animate__animated ${inViewLink ? 'animate__fadeInUp' : ''}`}>View projects +</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WorkSection;