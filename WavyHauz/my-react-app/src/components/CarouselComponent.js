import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from the src folder
import Ohhhreeeos from "../Ohhhhhhreeooos.jpg";
import Apple_Spice from "../Apple_Spice.jpg";
import Banana_pudding from "../Banana_pudding.jpg";
import Burgundy from "../Burgundy.jpg";

const CustomCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5500, // Slow horizontal scroll
    slidesToShow: 4, // Number of logos visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear", // Smooth animation
    pauseOnHover: true, //Pauses autoplay when hovering over the carousel
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    {
      image: Ohhhreeeos,
      //alt: "Ohreo *****",
      //title: "Ohreo *****",
      //description: "Delicious chocolate cookies with cream filling.",
    },
    {
      image: Apple_Spice,
      /*alt: "Apple Spice",
      title: "Apple Spice",
      description: "A delightful taste of spiced apples.",*/
    },
    {
      image: Banana_pudding,
      /*alt: "Banana Pudding",
      title: "Banana Pudding",
      description:
        "Soft banana flavored cookie filled with white chocolate chips, vanilla wafers & topped with vanilla glaze.",*/
    },
    {
      image: Burgundy,
      /*alt: "Burgundy",
      title: "Burgundy",
      description:
        "Soft & rich red velvet cookie with a made from scratch cream cheese icing center.",*/
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
