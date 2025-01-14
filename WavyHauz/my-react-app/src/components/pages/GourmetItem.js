import React from 'react';
import PropTypes from 'prop-types';
import './GourmetItem.css';

function GourmetItem({ path, label, src, text }) {
  return (
    <div className="gourmet-item">
      <a href={path}>
        <img src={src} alt={label} />
        <div className="gourmet-item-info">
          <h5>{label}</h5>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}

// PropTypes validation
GourmetItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// Default props
GourmetItem.defaultProps = {
  path: '/',
  label: 'Default Label',
  src: 'default-image.jpg',
  text: 'Default Text',
};

export default GourmetItem;
