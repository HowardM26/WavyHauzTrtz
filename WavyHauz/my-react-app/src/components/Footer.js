import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Happiness full of delight
          </p>
        <p className='footer-subscription-text'>
          All of our products are homemade.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>What is WavyHauz?</Link>
            
            <Link to='/'>Careers</Link>
            
            <Link to='/'>Nutrition facts</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support(COMING SOON)</Link>
            <Link to='https://square.link/u/LJlTO5Eq'>Donate</Link>
            <Link to='/'>Sponsor(COMING SOON)</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Other</h2>
            <Link to='/'>Submit a review</Link>
            <Link to='/'>Join the wave</Link>
            
            <Link to='/'>Merch(COMING SOON)</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/wavyhauztrts/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'>Instagram</Link>
            <Link to='https://www.facebook.com/Wavyhauxtrtz?mibextid=LQQJ4d'>Facebook</Link>
            <Link to='www.youtube.com/@wavychannel626'>Youtube</Link>
        
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WavyHauz
              <i class="fa-solid fa-cookie-bite"></i>
            </Link>
          </div>
          <small class='website-rights'>WavyHauz © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/Wavyhauxtrtz?mibextid=LQQJ4d'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/wavyhauztrts/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='www.youtube.com/@wavychannel626'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
