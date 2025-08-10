import React from 'react';
import '../styles/App.css';

const About = () => {
  return (
    <div className="content">
      <h1>About Me</h1>
      <p>
        I am Peter Collins Wachira, an experienced professional skilled in both electronics and software development. My background includes hands-on involvement in maintaining hardware/software and delivering technical assistance both remotely and on-site. I am skilled in installation, diagnostics, maintenance, and user training for a wide range of hardware and software systems. I bridge electronics and developer/IT capabilities to provide comprehensive technical support.
      </p>
      <h3>Skills</h3>
      <h4>Software Development & IT Infrastructure</h4>
      <ul className="skills-list">
        <li>Frontend: JavaScript, React.js (Vite), jQuery, React Native (Expo), HTML, CSS, UI/UX </li>
        <li>Backend: Python, Django, Flask, Node.js, REST APIs </li>
        <li>Database: MySQL </li>
        <li>IT Infrastructure: Deployment across Windows, Linux, and macOS environments </li>
        <li>Networking: IP addressing, DNS/DHCP setup, and resolving connectivity issues </li>
        <li>Cloud Services: Firebase </li>
        <li>Version Control: Git, GitHub </li>  
        <li>Hardware and software troubleshooting </li>
      </ul>
      <h4>Electronics & Field Support</h4>
      <ul className="skills-list">
        <li>Installation, calibration, and maintenance </li>
        <li>Diagnostics and fault isolation in hardware and electrical circuit systems </li>
        <li>Embedded systems development (C/C++) </li>
        <li>Technical documentation and service reporting. </li>
        <li>Support and user training </li>
        <li>Pre-sales engineering support: Tenders, quotations, and proposals </li>
        <li>Field support: On-site and remote assistance, troubleshooting, and repairs </li>
      </ul>
    </div>
  );
};

export default About;