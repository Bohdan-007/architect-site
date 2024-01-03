import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';
import { Project } from '../../models/project';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MobileSlider.scss';


interface MobileSliderProps {
  projects: Project[],
};

const MobileSlider: React.FC<MobileSliderProps> = ({ projects }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const htmlSlides: any = projects.map((project) => (
      <div>
        <h1 className='text-center mb-3'>{project.title}</h1>
        <NavLink to={`/project/${project.id}`}>
          <img src={project.photoUrl} width={250} height={160} />
        </NavLink>
        <p className='m-0 text-center'>{project.category}</p>
      </div>
    ));

    setSlides(htmlSlides);
  }, []);


  return (
    <Carousel slides={slides} autoplay={false} interval={2000} />
  );
};


export default MobileSlider;
