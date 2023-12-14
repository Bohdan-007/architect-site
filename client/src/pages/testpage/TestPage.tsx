import * as React from 'react';
import { Carousel, CarouselItem, CarouselRef } from 'react-round-carousel';

import 'react-round-carousel/src/index.css';
import './TestPage.scss';
import { Project } from '../../models/project';


// Create an array of Carousel Items
// const items: CarouselItem[] = Array(20)
//   .fill('')
//   .map((_: string, index: number) => ({
//     alt: 'A random photo',
//     image: `https://picsum.photos/${210 + index}`,
//     content: (
//       <div>
//         <strong>Round Carousel</strong>
//         <span>Slide number {index + 1}</span>
//       </div>
//     )
//   }));
// const projects: Project[] = [
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
//   { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
//   { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
//   { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
//   { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
//   { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
//   { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
//   { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
//   { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
//   { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
//   { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
// ];

// const items: any = projects.map(project => ({
//   image: project.photoUrl
// }));


const TestPage: React.FC = () => {
  const carouselRef = React.createRef<CarouselRef>();


  React.useEffect(() => {
    if (carouselRef.current) {
      console.log(carouselRef.current.getSelectedIndex());
    }

  }, [carouselRef]);


  // const handleScroll = (event: any): void => {
  //   event.preventDefault();

  //   // Встановлюємо коефіцієнт швидкості прокрутки
  //   const scrollSpeed = 0.1;

  //   // Отримуємо величину прокрутки і швидкість прокрутки в події
  //   const delta = event.deltaY;
  //   const speed = Math.abs(delta) * scrollSpeed;

  //   // Визначаємо напрямок прокрутки
  //   const direction = delta > 0 ? 1 : -1;

  //   // Отримуємо початкову позицію прокрутки
  //   const initialScrollTop = event.currentTarget.scrollTop;

  //   // Розраховуємо нову позицію прокрутки з урахуванням швидкості і напрямку
  //   const newScrollTop = initialScrollTop + direction * speed;
  //   console.log(newScrollTop);

  //   if (newScrollTop > 0) {
  //     console.log('Scrolling down');
  //     carouselRef.current?.next()
  //   } else if (newScrollTop < 0) {
  //     console.log('Scrolling up');
  //     carouselRef.current?.prev()
  //   }
  // };


  // return (
  //   // <div className="projects-page" onWheel={handleScroll}>
  //   <div className="test-page">
  //     <div className='wrapper'>
  //       <Carousel
  //         ref={carouselRef}
  //         items={items}
  //         slideOnClick
  //         showControls={false}
  //       />
  //     </div>
  //   </div>
  // );
  return (
    <div>
      test page
    </div>
  );
};

export default TestPage;
