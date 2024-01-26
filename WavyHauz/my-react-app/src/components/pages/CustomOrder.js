import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './CustomOrder.css';


const CustomOrder = () => {
    return (
     <div>
        <h1>
          All custom orders should be placed A WEEK in advance, as they come second priority to regular orders,
          especially if they are not on the regular menu for the month.
        </h1>
        <section>
            <div className='container'>
                <h2 className='--text-center'>Place Order</h2>
                <form className='--form-control--card  --flex-center --dir-column'>
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
                     className='--btn --btn-primary'>Place Order</button>
                </form>
            </div>
        </section>
        <Footer/>
      </div>
    );
  };

  export default CustomOrder;
  