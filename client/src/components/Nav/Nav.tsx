// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// // import logo from '../../images/header-logo.png';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import './Nav.scss';


// const Nav: React.FC = () => {
//   // const [navStyle, setNavStyle] = useState<string>('bg-light');
//   const [navStyle, setNavStyle] = useState<string>('bg-white');
//   const [logoStyle, setLogoStyle] = useState<string>('');
//   const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

//   const handleNavTogle = (): void => {
//     setIsNavExpanded(!isNavExpanded);

//     if (!isNavExpanded) {
//       setNavStyle('custom-navbar__expand');
//       setLogoStyle('custom-navbar__logo');

//     } else {
//       setNavStyle('bg-light');
//       setLogoStyle('');
//     }
//   };


//   return (
//     <nav className={`navbar navbar-expand-lg ${navStyle} position-sticky top-0 z-3 test`}>
//       <div className="container">

//         <NavLink to="/" className={`navbar-brand d-flex justify-content-between align-items-center fs-2 ${logoStyle}`}>
//           {/* <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-1" /> */}
//           LOGO
//         </NavLink>

//         <button onClick={handleNavTogle} className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon bg-black">
//             <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgb(255, 255, 255)' strokeMiterlimit='10' strokeWidth='2' d='M4 7h22M4 15h22M4 23h22' /></svg>
//           </span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start custom-navbar__big-nav">
//             <li className='nav-item'>
//               <NavLink to="/" className={`nav-link m-2 p-1 text-black fs-5 custom-navbar__link-hover`}>Projects</NavLink>
//             </li>
//             <li className='nav-item custom-navbar__dropdown-wrapper'>
//               <NavLink to="/about" className="nav-link m-2 p-1 text-black fs-5 custom-navbar__link-hover">Info</NavLink>
//               {/* dropdown */}
//               <ul className="m-0 p-3 text-white bg-black custom-navbar__dropdown-menu">
//                 <li>
//                   <NavLink to="/about" className="nav-link text-white custom-navbar__dropdown-link-hover">About</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/awards" className="nav-link text-white custom-navbar__dropdown-link-hover">Awards</NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className='nav-item'>
//               <NavLink to="/contact" className="nav-link m-2 p-1 text-black fs-5 custom-navbar__link-hover">Contact</NavLink>
//             </li>
//           </ul>

//           {/* mobile nav */}
//           <div className='mobile-nav' onClick={() => {
//             setIsNavExpanded(false); console.log('qwe');
//           }}>
//             <ul className='navbar-nav text-center'>
//               <li className='nav-item mb-3 fs-5 fw-semibold text-light'>Navigation</li>
//               <li className='nav-item'>
//                 <NavLink to="/" className="nav-link fs-5 fw-semibold p-1 text-light custom-navbar__dropdown-link-hover">
//                   <span onClick={handleNavTogle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//                     Projects
//                   </span>
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to="/about" className="nav-link fs-5 fw-semibold p-1 text-light custom-navbar__dropdown-link-hover">
//                   <span onClick={handleNavTogle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//                     About
//                   </span>
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to="/awards" className="nav-link fs-5 fw-semibold p-1 text-light custom-navbar__dropdown-link-hover">
//                   <span onClick={handleNavTogle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//                     Awards
//                   </span>
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink to="/contact" className="nav-link fs-5 fw-semibold p-1 text-light custom-navbar__dropdown-link-hover">
//                   <span onClick={handleNavTogle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
//                     Contact
//                   </span>
//                 </NavLink>
//               </li>
//             </ul>

// <ul className='navbar-nav text-center'>
//   <li className='nav-item mb-3 fs-5 fw-semibold text-light'>Social</li>
//   <li className='nav-item'>
//     <a href="https://www.instagram.com" target='_blanc' className='nav-link fs-5 fw-semibold p-1 text-light'>Instagram</a>
//   </li>
//   <li className='nav-item'>
//     <a href="https://www.facebook.com" target='_blanc' className='nav-link fs-5 fw-semibold p-1 text-light'>Facebook</a>
//   </li>
//   <li className='nav-item'>
//     <a href="https://twitter.com" target='_blanc' className='nav-link fs-5 fw-semibold p-1 text-light'>Twitter</a>
//   </li>
//   <li className='nav-item'>
//     <a href="https://desktop.telegram.org" target='_blanc' className='nav-link fs-5 p-1 text-light'>Telegram</a>
//   </li>
// </ul>
//           </div>

//           <NavLink to="#" className='nav-link d-flex align-items-center link-cart border-none'>
//             <span className='fw-medium'>EN / UA</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };


// export default Nav;

// ==============================
import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../images/header-logo.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Nav.scss';


const Nav: React.FC = () => {

  const setActiveSubLink = ({ isActive }: { isActive: boolean }): string => (isActive
    ? 'dropdown-item d-inline p-2 fs-5 text-white active-sub-link'
    : 'dropdown-item d-inline p-2 fs-5 text-white');


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm position-sticky top-0 z-3 h-100">
      <div className="container">

        <NavLink to="/" className="navbar-brand d-flex justify-content-between align-items-center fs-2 border-0">
          {/* <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top me-1" /> */}
          LOGO
        </NavLink>

        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className='navbar-wrapper'>
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <NavLink to="/" className="nav-link text-black fs-5">Projects</NavLink>
              </li>
              <li className="nav-item mx-2 dropdown">
                <a className="nav-link dropdown-toggle text-black fs-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">Info</a>
                <ul className="dropdown-menu px-2 bg-black border-0">
                  <li className='mb-2'><NavLink to="/about" className={setActiveSubLink}>About</NavLink></li>
                  <li className='mb-2'><NavLink to="/awards" className={setActiveSubLink}>Awards</NavLink></li>
                  <li className='mb-2'><NavLink to="/*" className={setActiveSubLink}>Something else</NavLink></li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/contact" className="nav-link text-black fs-5">Contact</NavLink>
              </li>
            </ul>

            {/* mobile */}
            <ul className='navbar-nav d-none mobile-soc-links'>
              <li className='nav-item'>
                <a href="https://www.instagram.com" target='_blanc' className='nav-link p-2 text-black fs-5'>Instagram</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.facebook.com" target='_blanc' className='nav-link p-2 text-black fs-5'>Facebook</a>
              </li>
              <li className='nav-item'>
                <a href="https://twitter.com" target='_blanc' className='nav-link p-2 text-black fs-5'>Twitter</a>
              </li>
              <li className='nav-item'>
                <a href="https://desktop.telegram.org" target='_blanc' className='nav-link p-2 text-black fs-5'>Telegram</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};


export default Nav;
