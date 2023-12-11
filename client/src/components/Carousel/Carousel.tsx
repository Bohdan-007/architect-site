import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

// const photos = [
//   'https://live.staticflickr.com/65535/49389103952_ff4b2cf256.jpg',
//   'https://farm6.staticflickr.com/5343/30212993894_85351f21ba.jpg',
//   'https://farm1.staticflickr.com/836/39709319980_7b2159e8b5.jpg',
// ]

const photos = [
  { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
  { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
  { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
  { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
  { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
  { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
  { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
  { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
  { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
  { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
  { id: 1, title: "test flat", year: 2012, square: 85, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg" },
  { id: 10, title: "test office", year: 2023, square: 127, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-2-1536x1025.jpg" },
  { id: 9, title: "test factory", year: 2021, square: 720, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1536x1025.webp" },
  { id: 4, title: "test factory", year: 2017, square: 457, category: "factory", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.jpg" },
  { id: 5, title: "test office", year: 2018, square: 327, category: "office", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-3-1536x1024.jpg" },
  { id: 2, title: "test flat", year: 2015, square: 40, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-4-1536x661.jpg" },
  { id: 8, title: "test house", year: 2020, square: 148, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-5-1536x1020.jpg" },
  { id: 6, title: "test flat", year: 2017, square: 62, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-1.webp" },
  { id: 3, title: "test house", year: 2015, square: 97, category: "house", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-6.jpg" },
  { id: 7, title: "test flat", year: 2018, square: 56, category: "flat", photoUrl: "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" },
];

const PhotoSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: false,
  };


  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="img-wrapper">
            <img src={photo.photoUrl} alt={`slide-${index}`} className="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PhotoSlider;