import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is a description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is a description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Slide+3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is a description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
