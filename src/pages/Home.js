import React from 'react';
import profilePic from '../profile.jpg';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="content">
      <img src={profilePic} alt="Peter Collins Wachira" className="profile-pic" />
      <h1 className="name">Peter Collins Wachira</h1>
      <h2 className="title">Electronics and Software Developer</h2>
      <p>
        Experienced in support, equipment servicing, and software development, with hands-on involvement in
        maintaining infrastructure and delivering technical assistance remotely and on-site. Skilled in installation, diagnostics and maintenance, user training and support across hardware and software systems.
      </p>
    </div>
  );
};

export default Home;