import React from "react";
import photo1 from '../../images/contact-office-1.jpg';
import photo2 from '../../images/contact-office-2.jpg';
import { useInView } from 'react-intersection-observer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './ContactPage.scss';

const ContactPage: React.FC = () => {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });
  const [refEmail, inViewEmail] = useInView({ triggerOnce: true });


  return (
    <div className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 ref={refTitle} className={`animate__animated contact-page__title ${inViewTitle ? 'animate__fadeInLeft text-black' : ''}`}>Get in touch.</h1>
          </div>
        </div>

        <div className="mb-5 contact-page__image-wrapper">
          <img
            src={photo1}
            alt={photo1}
            className="scale-in-ver-top contact-page__image"
            height="800"
          />
        </div>

        <div className="row">
          <div className="col-12">
            <p ref={refDesc} className={`text-black fw-semibold animate__animated contact-page__email-desc ${inViewDesc ? 'animate__fadeInUp' : ''}`}>
              General enquiries
            </p>
            <a ref={refEmail} href="mailto:email@example.com" className={`text-black fw-semibold text-decoration-none animate__animated contact-page__email ${inViewEmail ? 'animate__fadeInUp' : ''}`}>
              email@example.com
            </a>
          </div>
        </div>

        <div className="mb-5 contact-page__image-wrapper">
          <img
            src={photo2}
            alt={photo2}
            className="contact-page__image"
            height="800"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
