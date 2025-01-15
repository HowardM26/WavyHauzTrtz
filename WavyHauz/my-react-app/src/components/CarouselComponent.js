import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/WavyHauzTrts_pics/Ohhhhhhreeooos.jpg"
          alt="Ohhhhhhreeooos"
        />
        <Carousel.Caption>
          <h3>Ohhhhhhreeooos</h3>
          <p>This is a description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/WavyHauzTrts_pics/Apple_Spice.jpg"
          alt="Apple Spice"
        />
        <Carousel.Caption>
          <h3>Apple Spice</h3>
          <p>This is a description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/WavyHauzTrts_pics/Macadamia_Madness.jpg"
          alt="Macadamia Madness"
        />
        <Carousel.Caption>
          <h3>Macadamia Madness</h3>
          <p>This is a description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
