import React from 'react';
import './Contact.css';
import Navbar from './Navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form action="#" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <div className="about">
          
          <p>Welcome to Food Delivery, your go-to place for delicious meals delivered right to your doorstep. Our team of talented chefs and delivery staff work tirelessly to bring you the best dining experience without leaving your home.</p>
          <p>With a focus on quality ingredients and exceptional service, we strive to make every meal memorable. Whether you're craving comfort food, exotic flavors, or healthy options, we have something for everyone.</p>
          <p>Thank you for choosing Food Delivery. We look forward to serving you!</p>
        </div>
      </div>
    </div></>
  );
};

export default Contact;
