import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Explore the world'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

// Add PropTypes validation
CardItem.propTypes = {
  path: PropTypes.string.isRequired,  // Ensure 'path' is a required string
  label: PropTypes.string.isRequired, // Ensure 'label' is a required string
  src: PropTypes.string.isRequired,   // Ensure 'src' is a required string
  text: PropTypes.string.isRequired,  // Ensure 'text' is a required string
};

export default CardItem;
