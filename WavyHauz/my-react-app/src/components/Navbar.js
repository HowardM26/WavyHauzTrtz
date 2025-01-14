import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './pages/Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            WavyHauz <i className="fa-solid fa-cookie-bite"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/GourmetCookies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Treats <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/CustomOrder"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Custom Orders
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
