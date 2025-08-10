import React from 'react';
import '../styles/App.css';

const Contact = () => {
  return (
    <div className="content">
      <h1>Contact Me</h1>
      <p>I am currently available for new opportunities. Feel free to get in touch!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:petercollins5555@outlook.com">petercollins5555@outlook.com</a></p>
        <p><strong>Phone:</strong> (+254) 702 123 889</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contact;