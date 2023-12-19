import React from "react";
import { useInView } from 'react-intersection-observer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './ContactPage.scss';


const ContactPage: React.FC = () => {
  const [refEmployee, inViewEmployee] = useInView({ triggerOnce: true });

  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });
  const [refEmail, inViewEmail] = useInView({ triggerOnce: true });


  return (
    <div className="contact-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 bg-primary-subtle mb-5 mb-lg-0">
          {/* <div className="col-12 col-lg-6 mb-5 mb-lg-0"> */}
            <ul className="employee-list">
              <li className="d-flex align-items-center mb-5">
                <div className="employee-list__img-wrapper">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU" alt="employee" />
                </div>
                <ul ref={refEmployee} className={`ms-4 text-transparent animate__animated ${inViewEmployee ? 'animate__fadeIn employee-contact' : ''}`}>
                  <li className="mb-2 fw-semibold">Name</li>
                  <li className="mb-2 fw-semibold">position</li>
                  <li className="mb-2 fw-semibold">
                    <a href="mailto:mail@gmail.com" className="text-decoration-none">mail@gmail.com</a>
                  </li>
                  <li className="mb-2 fw-semibold">
                    <a href="tel:+111111111111" className="text-decoration-none">+11 111-11-11-111</a>
                  </li>
                </ul>
              </li>
              <li className="d-flex align-items-center mb-5">
                <div className="employee-list__img-wrapper">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU" alt="employee" />
                </div>
                <ul ref={refEmployee} className={`ms-4 text-transparent animate__animated ${inViewEmployee ? 'animate__fadeIn employee-contact' : ''}`}>
                  <li className="mb-2 fw-semibold">Name</li>
                  <li className="mb-2 fw-semibold">position</li>
                  <li className="mb-2 fw-semibold">
                    <a href="mailto:mail@gmail.com" className="text-decoration-none">mail@gmail.com</a>
                  </li>
                  <li className="mb-2 fw-semibold">
                    <a href="tel:+111111111111" className="text-decoration-none">+11 111-11-11-111</a>
                  </li>
                </ul>
              </li>
              <li className="d-flex align-items-center">
                <div className="employee-list__img-wrapper">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU" alt="employee" />
                </div>
                <ul ref={refEmployee} className={`ms-4 text-transparent animate__animated ${inViewEmployee ? 'animate__fadeIn employee-contact' : ''}`}>
                  <li className="mb-2 fw-semibold">Name</li>
                  <li className="mb-2 fw-semibold">position</li>
                  <li className="mb-2 fw-semibold">
                    <a href="mailto:mail@gmail.com" className="text-decoration-none">mail@gmail.com</a>
                  </li>
                  <li className="mb-2 fw-semibold">
                    <a href="tel:+111111111111" className="text-decoration-none">+11 111-11-11-111</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 bg-secondary-subtle">
          {/* <div className="col-12 col-lg-6"> */}
            <form action="" className="p-3 rounded-2 shadow">
              <legend className='mb-4 text-center'>Feedback</legend>
              <div className="mb-3">
                <label htmlFor="formGroupUserName" className="form-label">Name</label>
                <input type="text" className="form-control shadow-none" id="formGroupUserName" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupPhone" className="form-label">Phone</label>
                <input type="text" className="form-control shadow-none" id="formGroupPhone" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupEmail" className="form-label">Email</label>
                <input type="email" className="form-control shadow-none" id="formGroupEmail" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupComment" className="form-label">Comment</label>
                <textarea className="form-control shadow-none" id="formGroupComment"></textarea>
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
  // return (
  //   <div className="contact-page">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-12">
  //           <h1 ref={refTitle} className={`animate__animated contact-page__title ${inViewTitle ? 'animate__fadeInLeft text-black' : ''}`}>Get in touch.</h1>
  //         </div>
  //       </div>

  //       <div className="mb-5 contact-page__image-wrapper">
  //         <img
  //           src={photo1}
  //           alt={photo1}
  //           className="scale-in-ver-top contact-page__image"
  //           height="800"
  //         />
  //       </div>

  //       <div className="row">
  //         <div className="col-12">
  //           <p ref={refDesc} className={`text-black fw-semibold animate__animated contact-page__email-desc ${inViewDesc ? 'animate__fadeInUp' : ''}`}>
  //             General enquiries
  //           </p>
  //           <a ref={refEmail} href="mailto:email@example.com" className={`text-black fw-semibold text-decoration-none animate__animated contact-page__email ${inViewEmail ? 'animate__fadeInUp' : ''}`}>
  //             email@example.com
  //           </a>
  //         </div>
  //       </div>

  //       <div className="mb-5 contact-page__image-wrapper">
  //         <img
  //           src={photo2}
  //           alt={photo2}
  //           className="contact-page__image"
  //           height="800"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};


export default ContactPage;
