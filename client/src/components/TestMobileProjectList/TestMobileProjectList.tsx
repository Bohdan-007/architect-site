import React, { useEffect, useState } from "react";

import { Carousel, CarouselItem, CarouselRef } from 'react-round-carousel';
import { Project } from '../../models/project';

import 'react-round-carousel/src/index.css';
import './TestMobileProjectList.scss';


interface TestMobileProjectListProps {
  projects: Array<Project>
};

const TestMobileProjectList: React.FC<TestMobileProjectListProps> = ({ projects }) => {
  const [click, setClick] = useState(0);

  const carouselRef = React.createRef<CarouselRef>();

  // useEffect(() => {
  //   if (carouselRef.current) {
  //     console.log(carouselRef);

  //     // console.log(carouselRef.current.getSelectedIndex());
  //   }
  // }, [click]);


  const items: any = projects.map((project) => ({
    image: project.photoUrl
  }));


  return (
    // <div className="projects-page" onWheel={handleScroll}>
    // <div className='wrapper bg-danger' onClick={() => setClick(1)}>
    <Carousel
      ref={carouselRef}
      items={items}
      showControls={false}
      slideOnClick
    />
    // </div>
  );
};

export default TestMobileProjectList;
