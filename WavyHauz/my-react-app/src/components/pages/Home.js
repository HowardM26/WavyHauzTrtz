import React from 'react';
import '../../App.css';
import './Home.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CarouselComponent from '../CarouselComponent';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      <div className='Featured-Item'>
        <h1> Featured Item</h1>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <CarouselComponent />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
