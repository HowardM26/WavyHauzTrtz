import React from 'react';
import './MuffinCards.css';
import CardItem from './CardItem';

// Import local images
import Apple_Spice from '../Apple_Spice.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Click picture to checkout</h1>
      <div className="cards__container">
        
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Apple_Spice}
              text="iced apple cinnamon muffin w/fresh apple pieces, & cinnamon streusel topping $3.50"
              label="Sweet"
              path="https://wavyhauz.square.site/product/apple-spice-muffins/1?cs=true&cst=custom"
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
