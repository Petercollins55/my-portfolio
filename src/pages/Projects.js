import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/App.css';

const projects = [
  {
    title: 'Full Stack Web Application',
    description: 'Developed a complete web application using a full-stack approach. Frontend built with React, and backend services powered by Python frameworks like Flask and Django.',
    link: null // We'll add the link here once you upload the project
  },
  {
    title: 'Event Listing App',
    description: 'A web application built with React to list and manage events. Demonstrates skills in front-end development, component-based architecture, and state management.',
    link: 'https://github.com/Petercollins55/EventListingApp'
  },
  {
    title: 'Electronics & PCB Design',
    description: 'Designed, simulated, and fabricated PCB prototypes using CAD tools like Fusion 360 and Eagle for circuit development.',
    link: null
  },
  {
    title: 'Embedded Systems Project',
    description: 'Developed C-based firmware for microcontrollers, executing a full-cycle embedded project from coding to debugging and integration.',
    link: null
  },
];

const Projects = () => {
  return (
    <div className="content">
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on, showcasing my skills in software and electronics.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;