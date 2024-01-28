import React from 'react';
import {useRef} from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './CustomOrder.css';
import emailjs from '@emailjs/browser';



const CustomOrder = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ple8vw7', 'template_sm8d475', form.current, 'AG8Cc3dbDZsqqy-UO')
      .then((result) => {
          console.log('Order Placed!');
      }, (error) => {
          console.log('Sorry try again');
      });
      e.target.reset();
  };

    return (
     <div className='custom-container'>
        <h1>
          !All custom orders should be placed A WEEK in advance, as they come second priority to regular orders,
          especially if they are not on the regular menu for the month!
        </h1>
        <section>
            <div className="container">
                <h2 className='--text-center'>Place Order</h2>
                <form ref={form} onSubmit={sendEmail} className='--form-control--card--flex-center--dir-column' >
                    <input type='text'
                    placeholder='Full Name'
                    name='user_name' required />
                    <input type='email'
                    placeholder='Email'
                    name='user_email' required />
                    <input type='text'
                    placeholder='Address'
                    name='address' required />
                    <input type='text'
                    placeholder='Contact info'
                    name='information' required />
                    <textarea name='Custom Order'
                    cols="30" rows="10"></textarea>
                    <button type='submit'
                     className='--btn
                      --btn-primary'>Place Order</button>
                </form>
                <div className='notice-container'>
                <h3>
                If you're receiving your custom order in person,
                 please give a the date in which you expect your order
                  (allow at least 1 week for your order to be ready) all customer orders may not be accepted,
                   if we can not do your custom order we will reach out 24-48hrs after you've submitted your order & let you know.
                </h3>
                </div>
            </div>
        </section>
        <Footer/>
      </div>
    );
  };

  export default CustomOrder;
  