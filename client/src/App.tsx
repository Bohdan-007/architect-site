import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { projectsApi } from './redux/projectsApi';

import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFountPage/NotFoundPage';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import './App.scss';

const App: React.FC = () => {
  const location = useLocation();
  const [isShowFooter, setIsShowFooter] = useState<boolean>(false);

  useEffect(() => {
    setIsShowFooter(location.pathname !== '/');
  }, [location]);

  console.log(isShowFooter);

  return (
    <div className="app">
      {/* <Router> */}
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
      {isShowFooter && <Footer />}
      {/* </Router> */}
    </div>
  );
};

export default App;
