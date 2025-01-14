import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <HeroSection />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Title</h3>
            <p>Some description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Title</h3>
            <p>Some description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Title</h3>
            <p>Some description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </>
  );
}

export default Home;
