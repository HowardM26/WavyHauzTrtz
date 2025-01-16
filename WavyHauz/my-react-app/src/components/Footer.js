import React from 'react';
import './Footer.css';
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
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About'>What is WavyHauz?</Link>
            <Link to='/'>Careers (COMING SOON)</Link>
            <Link to='/'>Nutrition facts (COMING SOON)</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Other</h2>
            <Link to='/'>Submit a review</Link>
            <Link to='/'>Join the wave</Link>
            <Link to='/'>Merch (COMING SOON)</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/wavyhauztrts/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'>Instagram</Link>
            <Link to='https://www.facebook.com/Wavyhauxtrtz?mibextid=LQQJ4d'>Facebook</Link>
            <Link to='https://www.youtube.com/@wavychannel626'>YouTube</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Location</h2>
            <div className='location'>
            <p>10 Lakeside Way</p>
            <p>Newnan, Georgia 30265</p>
            <p>(804) 621-3741</p>
            <p>Wavyhzz93@gmail.com</p>
            <Link to='https://www.google.com/maps?q=10+Lakeside+Way+Newnan+GA'>Get directions</Link>
            
            </div>
          </div>
        </div>
        <div className='footer-link-items'>
            <h2>Hours</h2>
            <div className='hours'>
              <p><strong>Monday:</strong> 12:00 pm - 6:00 pm</p>
              <p><strong>Tuesday:</strong> 12:00 pm - 4:00 pm</p>
              <p><strong>Wednesday:</strong> Closed</p>
              <p><strong>Thursday:</strong> Closed</p>
              <p><strong>Friday:</strong> Closed</p>
              <p><strong>Saturday:</strong> Closed</p>
              <p><strong>Sunday:</strong> 1:00 pm - 4:00 pm</p>
              </div>
          </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              WavyHauz <i className="fa-solid fa-cookie-bite"></i>
            </Link>
          </div>
          <small className='website-rights'>WavyHauz © 2023</small>
          <div className='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/Wavyhauxtrtz?mibextid=LQQJ4d'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/wavyhauztrts/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/@wavychannel626'
              target='_blank'
              aria-label='YouTube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
