import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './GourmetCookies.css';
import Cards from '../Cards';

function GourmetCookies() {
  return (
    <>
      <div className="gourmet-header">
        <h1>Our Gourmet Cookies</h1>
        <p>Discover the finest selection of handcrafted cookies!</p>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default GourmetCookies;
