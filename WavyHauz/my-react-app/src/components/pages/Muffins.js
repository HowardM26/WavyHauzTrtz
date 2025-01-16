import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Muffins.css'
import MuffinCards from '../MuffinCards'

function Muffins() {
  return (
    <>
      <div className="Muffin-header">
        <h1>Sweet Delectable Muffins</h1>
        
      </div>
      <MuffinCards />
      <Footer />
    </>
  );
}

export default Muffins;
