import React, { useState, useRef } from 'react';
import '../../App.css';
import Footer from '../Footer';
import './CustomOrder.css';
import emailjs from '@emailjs/browser';
import AlertMessage from '../Alert';

const CustomOrder = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [message, setMessage] = useState(""); // Message to display success/error
  const [messageType, setMessageType] = useState("success"); // Message type (success/error)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state when form is being submitted
    setMessage(""); // Reset the message before sending

    emailjs
      .sendForm('service_ple8vw7', 'template_sm8d475', form.current, 'AG8Cc3dbDZsqqy-UO')
      .then(
        (result) => {
          setLoading(false); // Hide loading when done
          setMessage("Order placed successfully! Thank you."); // Success message
          setMessageType("success"); // Set message type to success
          e.target.reset(); // Reset the form
        },
        (error) => {
          setLoading(false); // Hide loading when done
          setMessage("Sorry, there was an error with your order. Please try again."); // Error message
          setMessageType("danger"); // Set message type to error
        }
      );
  };

  return (
    <div className="custom-container">
      
      {/* Show Alert Message if there is any */}
      {message && <AlertMessage message={message} variant={messageType} />}

      <section>
        <div className="container">
          <h2 className="--text-center">Place Order Here</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="--form-control--card--flex-center--dir-column"
          >
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              required
            />
            <input
              type="text"
              placeholder="Contact info"
              name="information"
              required
            />
            <textarea
              name="Custom Order"
              cols="30"
              rows="10"
              placeholder="Describe your custom order here..."
              required
            ></textarea>

            {/* Show loading spinner while sending email */}
            <button type="submit" className="--btn --btn-primary">
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>

          <div className="notice-container">
            <h3>
              If you are receiving your custom order in person, please give a
              date in which you expect your order (allow at least 1 week for
              your order to be ready). All customer orders may not be accepted;
              if we cannot fulfill your custom order, we will reach out 24-48hrs
              after you have submitted your order to let you know.
            </h3>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CustomOrder;
