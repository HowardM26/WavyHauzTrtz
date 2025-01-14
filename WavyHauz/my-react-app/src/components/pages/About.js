import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to GeeksforGeeks, a Computer Science portal for geeks! Our mission is to provide well-written, well-thought-out, and well-explained solutions to Computer Science and programming problems.
        </p>
        <p>
          Whether you are a student, a professional, or a tech enthusiast, we aim to deliver the knowledge and tools you need to succeed. Explore tutorials, interview preparation materials, coding challenges, and much more!
        </p>
        <p>
          Thank you for being a part of our community. Together, lets learn and grow!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
