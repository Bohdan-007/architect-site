import { useInView } from 'react-intersection-observer';
import aboutPhoto1 from '../../images/about-img-1.jpg';
import aboutPhoto2 from '../../images/about-img-2.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.scss';


const HeroSection: React.FC = () => {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });

  return (
    <div className="hero">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <h1 ref={refTitle} className={`hero__title animate__animated ${inViewTitle ? 'animate__fadeInLeft text-black' : ''}`}>We do social space.</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className='hero__img-wrapper'>
              <img src={aboutPhoto1} className='scale-in-ver-top hero__img' height="800" />
            </div>
          </div>
        </div>


        <div className="row">
          <div className='col-12 col-lg-8'>
            <p className='hero__desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae consectetur dolorem voluptatibus culpa totam?
              Fuga, autem dolore? Saepe iure adipisci quia ipsum,
              quisquam exercitationem ratione deleniti voluptatibus,
              minima labore nisi.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className='hero__img-wrapper'>
              <img src={aboutPhoto2} className='hero__img' height="800" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


export default HeroSection;