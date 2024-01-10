import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Gourmet Cookies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src='/WavyHauzTrts_pics/Ohhhhhhreeooos.jpeg'
             text='Mouthwatering cookies and creme flavor! $2.50'
             label='Sweet'
             path='/products'
            />
            <CardItem
              src='/WavyHauzTrts_pics/Macadamia Madness.jpeg'
              text='Chewy buttery cookie with white chocolate chunks, crunchy macadamia nuts and raspberry jam?? $2.50'
              label='sweet'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/WavyHauzTrts_pics/Salty Scotch.jpeg'
              text='You have to taste it to believe it $5'
              label='Sweet/Savory'
              path='/products'
            />
            <CardItem
              src='/WavyHauzTrts_pics/Goldies.jpeg'
              text='Goldies $1.75'
              label='Hearty'
              path='/products'
            />
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;