import React from "react"
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


const Footer: React.FC = () => {

  return (
    <footer className={`py-2 bg-white shadow`}>
      <div className="container">

        <div className="row mb-3 text-center">
          <div className="col-12 col-md-6 mb-4 m-md-0">
            <p className=" fs-5">Navigation</p>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><NavLink to="/" className="nav-link text-black fs-4 fw-semibold">Projects</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="/about" className="nav-link text-black fs-4 fw-semibold" >About</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="/awards" className="nav-link text-black fs-4 fw-semibold" >Awards</NavLink></li>
              <li className="nav-item mb-2"><NavLink to="/contact" className="nav-link text-black fs-4 fw-semibold">Contact</NavLink></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 text-center">
            <p className="fs-5">Social</p>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="https://www.instagram.com" target='_blanc' className='nav-link p-2 text-black fs-4 fw-semibold'>Instagram</a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.facebook.com" target='_blanc' className='nav-link p-2 text-black fs-4 fw-semibold'>Facebook</a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://twitter.com" target='_blanc' className='nav-link p-2 text-black fs-4 fw-semibold'>Twitter</a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://desktop.telegram.org" target='_blanc' className='nav-link p-2 text-black fs-4 fw-semibold'>Telegram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-2 border-top">
          <p className="m-0">&copy; 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;