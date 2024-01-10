import React from 'react';
import { Link } from 'react-router-dom';

function GourmetItem(props) {
  return (
    <>
      <li className='Gourmet__item'>
        <Link className='Gourmet__item__link' to={props.path}>
          <figure className='Gourmet__item__pic-wrap' data-category={props.label}>
            <img
              className='Gourmet__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='Gourmet__item__info'>
            <h5 className='Gourmet__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GourmetItem;