import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CarouselComponent from '../CarouselComponent';

function Home() {
  return (
    <>
      <HeroSection />
      <CarouselComponent />
      <Footer />
    </>
  );
}

export default Home;