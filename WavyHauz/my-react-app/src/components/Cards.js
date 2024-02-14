import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1>Gourmet Cookies</h1>
      <div className='cards__container'>
        <h1>Click picture to checkout</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src="src/WavyHauzTrts_pics/Ohhhhhhreeooos.jpg"
             text='Mouthwatering cookies and creme flavor! $2.50'
             label='Sweet'
             path='https://square.link/u/BcG1w0pd'
             
            />
            <CardItem
              src='/WavyHauzTrts_pics/Macadamia Madness.jpg'
              text='Chewy buttery cookie with white chocolate chunks, crunchy macadamia nuts and raspberry jam?? $2.75'
              label='sweet'
              path='https://square.link/u/wP4yqldW'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/WavyHauzTrts_pics/Salty Scotch.jpg'
              text='You have to taste it to believe it $2'
              label='Sweet/Savory'
              path='https://square.link/u/XOAF5ToH'
            />
            <CardItem
              src='/WavyHauzTrts_pics/Goldies.jpg'
              text='Goldie $2.50'
              label='Hearty'
              path='https://square.link/u/s1XgAX6c'
            />
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;