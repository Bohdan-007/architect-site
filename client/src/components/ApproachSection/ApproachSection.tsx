import { useInView } from 'react-intersection-observer';
// import photo1 from '../../images/approach-img.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ApproachSection.scss';


const ApproachSection: React.FC = () => {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refSubtitle, inViewSubtitle] = useInView({ triggerOnce: true });
  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });


  return (
    <div className="approach-section">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <p ref={refSubtitle} className={`approach-section__subtitle animate__animated ${inViewSubtitle ? 'animate__rotateInUpLeft' : ''}`}>Our approach</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 ref={refTitle} className={`approach-section__title animate__animated ${inViewTitle ? 'animate__fadeInUp' : ''}`}>We find the CLOU.</h2>
          </div>
        </div>

        <div className="row mb-2 mb-lg-5">
          <div className="col-12 col-md-6">
            <p ref={refDesc} className={`approach-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              We love challenging projects. Through intense research, analysis,
              idea generation and refinement, we uncover the potential lying within every constraint.
              Transforming these challenges into architectural opportunities, we find the CLOU.
            </p>
            <p ref={refDesc} className={`approach-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              From conception to completion, each project is advanced by a dedicated,
              tight-knit team of designers and managers led by an experienced project architect,
              with comprehensive support by our in-house specialists, including model-building,
              visualisation, graphic design, and BIM.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p ref={refDesc} className={`approach-section__desc animate__animated ${inViewDesc ? 'animate__fadeInUp text-black' : ''}`}>
              This integrated workflow allows us to constantly align our vision with the client,
              consultant, and contractor team, through all stages of design and construction into operation.
            </p>
          </div>
        </div>

        {/* <div className="row"> */}
        {/* <div className="col-12"> */}
        {/* <div className='approach-section__img-wrapper'> */}
        {/* <img src={photo1} className='approach-section__img' height="800" /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>

      <div className='approach-section__img'></div>
    </div>
  );
};


export default ApproachSection;