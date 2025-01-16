import React from 'react';
import './CookieCards.css';
import CardItem from './CardItem';

// Import local images
import Ohhhhhhreeooos from '../Ohhhhhhreeooos.jpg';
import Snickerdoodle from '../Snickerdoodle.jpg';
import Burgundy from '../Burgundy.jpg';
import Banana_pudding from '../Banana_pudding.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Click picture to checkout</h1>
      <div className="cards__container">
        
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Ohhhhhhreeooos}
              text="

Soft, Airy, & slightly crunchy cookie made from a signature dough with Hershey's Cookies N Creme & Oreo pieces $3.50"
              label="Sweet"
              path="https://wavyhauz.square.site/product/ohreo-/51?cs=true&cst=custom"
            />
            <CardItem
              src={Snickerdoodle}
              text="Classic snickerdoodle cookie double coated in cinnamon sugar $2"
              label="Sweet"
              path="https://wavyhauz.square.site/product/snickerdoodle/15?cs=true&cst=custom"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Burgundy}
              text="Soft & rich red velvet cookie with a made from scratch cream cheese icing center $2"
              label="Sweet/Savory"
              path="https://wavyhauz.square.site/product/burgundy/11?cs=true&cst=custom"
            />
            <CardItem
              src={Banana_pudding}
              text="Soft banana flavored cookie filled with white chocolate chips, vanilla wafers & topped with vanilla glaze $2.50"
              label="Hearty"
              path="https://wavyhauz.square.site/product/banana-pudding-/41?cs=true&cst=custom"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
