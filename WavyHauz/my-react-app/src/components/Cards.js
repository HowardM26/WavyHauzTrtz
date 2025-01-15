import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// Import local images
import Ohhhhhhreeooos from '../Ohhhhhhreeooos.jpg';
import MacadamiaMadness from '../Macadamia_Madness.jpg';
import Burgundy from '../Burgundy.jpg';
import Banana_pudding from '../Banana_pudding.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Gourmet Cookies</h1>
      <div className="cards__container">
        <h1>Click picture to checkout</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Ohhhhhhreeooos}
              text="

Soft, Airy, & slightly crunchy cookie made from a signature dough with Hershey's Cookies N Creme & Oreo pieces $3.50"
              label="Sweet"
              path="https://square.link/u/BcG1w0pd"
            />
            <CardItem
              src={MacadamiaMadness}
              text="Chewy buttery cookie with white chocolate chunks, crunchy macadamia nuts and raspberry jam?? $2.75"
              label="Sweet"
              path="https://square.link/u/wP4yqldW"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Burgundy}
              text="Soft & rich red velvet cookie with a made from scratch cream cheese icing center $2"
              label="Sweet/Savory"
              path="https://square.link/u/XOAF5ToH"
            />
            <CardItem
              src={Banana_pudding}
              text="Soft banana flavored cookie filled with white chocolate chips, vanilla wafers & topped with vanilla glaze $2.50"
              label="Hearty"
              path="https://square.link/u/s1XgAX6c"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
