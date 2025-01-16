import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Delicious and homemade, made-from- scratch treats! </h1>
      <p>Gourmet treats, made carefully with love.</p>
      <div className='hero-btns'>
        {/* Add your button with a label */}
        <Button
         className='btns'
        buttonStyle='btn--primary' 
        buttonSize='btn--large'
        to="/gourmetcookies" //Link to Gourmet cookies page
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
