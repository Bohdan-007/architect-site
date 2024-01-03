import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './TeamList.scss';


const TeamList: React.FC = () => {
  const employees = [
    {
      name: 'Name',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU',
      position: 'position',
      email: 'mail@gmail.com',
      phone: '+11 111-11-11-111',
    },
    {
      name: 'Name',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU',
      position: 'position',
      email: 'mail@gmail.com',
      phone: '+11 111-11-11-111',
    },
    {
      name: 'Name',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU',
      position: 'position',
      email: 'mail@gmail.com',
      phone: '+11 111-11-11-111',
    },
  ];


  return (
    <ul className="employee-list">
      {employees.map((employee, idx) => (
        <li key={idx} className="d-flex align-items-center mb-5">
          <div className="employee-list__img-wrapper animate__animated animate__fadeInLeft">
            <img src={employee.photo} alt="employee" />
          </div>
          <ul className="ms-4">
            <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">{employee.name}</li>
            <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">{employee.position}</li>
            <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:mail@gmail.com" className="fst-italic text-decoration-none"> {employee.email}</a>
            </li>
            <li className="mb-2 fw-semibold animate__animated animate__rotateInUpLeft">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+111111111111" className="fst-italic text-decoration-none"> {employee.phone}</a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};


export default TeamList;
