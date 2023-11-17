import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { projectsApi } from './redux/projectsApi';

import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFountPage/NotFoundPage';

import Nav from './components/Nav/Nav';

// import "bootstrap-icons/font/bootstrap-icons.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap.scss';  // bootsstrap SCSS styles
// import 'bootstrap/dist/js/bootstrap.min.js';
import './App.scss';


const App: React.FC = () => {

  return (
    <div className="app">
      <Router>

        <Nav />

        <div className='main'>
          <ApiProvider api={projectsApi}>
            <Routes>
              <Route path='/' element={<ProjectsPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </ApiProvider>
        </div>

      </Router>
    </div>
  );
};


export default App;


// press the footer in the future !!!
