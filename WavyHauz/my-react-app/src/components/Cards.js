import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src='WavyHauzTrts_pics/Ohhhreos.jpeg'
             text='Mouthwatering cookies and creme flavor! $2.50'
             label='Sweet'
             path='/products'
            />
            <CardItem
              src='WavyHauzTrts_pics/LemonBlissbery.jpeg'
              text='Who can resist a the tandem of Lemon and Blueberry? $2.50'
              label='Zesty'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='WavyHauzTrts_pics/Apple Spice.jpeg'
              text='Apple Spice just in time for the fall $5'
              label='Heartwarming'
              path='/products'
            />
            <CardItem
              src='WavyHauzTrts_pics/IMG_7158.jpeg'
              text='Oatmeal cookies with cranberries and white chocolate chips $1.75'
              label='Hearty'
              path='/products'
            />
            <CardItem
              src='WavyHauzTrts_pics/6FBB6940-93C8-4471-910A-9526CD5FA3D8.jpeg'
              text='peanut butter and jelly cookie? try peanut butter and apple jelly $2.50'
              label='Fun'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;