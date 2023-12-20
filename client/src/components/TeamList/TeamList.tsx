import React from "react";
import { useInView } from 'react-intersection-observer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './TeamList.scss';


const TeamList: React.FC = () => {
  // const [refEmployee, inViewEmployee] = useInView({ triggerOnce: true });


  return (
    <ul className="employee-list">
      <li className="d-flex align-items-center mb-5">
        <div className="employee-list__img-wrapper animate__animated animate__fadeInLeft">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU" alt="employee" />
        </div>
        {/* <ul ref={refEmployee} className={`ms-4 text-transparent animate__animated ${inViewEmployee ? 'animate__fadeIn employee-contact' : ''}`}> */}
        <ul className="ms-4">
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">Name</li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">position</li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:mail@gmail.com" className="fst-italic text-decoration-none"> mail@gmail.com</a>
          </li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+111111111111" className="fst-italic text-decoration-none"> +11 111-11-11-111</a>
          </li>
        </ul>
      </li>
      <li className="d-flex align-items-center mb-5">
        <div className="employee-list__img-wrapper animate__animated animate__fadeInLeft">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU" alt="employee" />
        </div>
        <ul className="ms-4">
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">Name</li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">position</li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:mail@gmail.com" className="fst-italic text-decoration-none"> mail@gmail.com</a>
          </li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+111111111111" className="fst-italic text-decoration-none"> +11 111-11-11-111</a>
          </li>
        </ul>
      </li>
      <li className="d-flex align-items-center">
        <div className="employee-list__img-wrapper animate__animated animate__fadeInLeft">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU" alt="employee" />
        </div>
        <ul className="ms-4">
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">Name</li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">position</li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:mail@gmail.com" className="fst-italic text-decoration-none"> mail@gmail.com</a>
          </li>
          <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+111111111111" className="fst-italic text-decoration-none"> +11 111-11-11-111</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};


export default TeamList;
