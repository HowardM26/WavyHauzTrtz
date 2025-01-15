import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import images from the src folder
import Ohhhreeeos from '../Ohhhhhhreeooos.jpg';
import Apple_Spice from '../Apple_Spice.jpg';
import Banana_pudding from '../Banana_pudding.jpg;'


const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const items = [
    {
      image:
        Ohhhreeeos,
      alt: "Ohreo *****",
      title: "Ohreo *****",
      description: "Delicious chocolate cookies with cream filling.",
    },
    {
      image:
        Apple_Spice,
      alt: "Apple Spice",
      title: "Apple Spice",
      description: "A delightful taste of spiced apples.",
    },
    {
      image:
        Banana_pudding,
      alt: "Banana Pudding",
      title: "Banana Pudding",
      description: "Soft banana flavored cookie filled with white chocolate chips, vanilla wafers & topped with vanilla glaze.",
    },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.image} alt={item.alt} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
