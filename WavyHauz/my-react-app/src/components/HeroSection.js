
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome To WavyHauzTrts</h1>
      <p>Join the Wave</p>
      <div className='hero-btns'>
        <Button
          className='hero-btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Purchase
        </Button>
        <Button
          className='hero-btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('what would you like?')}
        >
          Subscribe for updates
          <i class="fa-solid fa-user-plus"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;