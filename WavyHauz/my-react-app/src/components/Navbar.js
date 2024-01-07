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
    if(window.innerWidth <960) {
      setDropdown(false)
    } else{
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth <960) {
      setDropdown(false)
    } else{
      setDropdown(false);
    }
  };


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WavyHauz
            <i class="fa-solid fa-cookie-bite"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <Link
                to='/Products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link to='/GourmetCookies' className='nav-links' onClick={closeMobileMenu}>
                Gourmet Cookies
              </Link>
            </li>
          
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
