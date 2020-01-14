import React from 'react';
import './App.css';
import Header from './Header.js';
import ProjectsBox from './ProjectsBox.js';

function ProjectsPage() {
  return (
    <div className="App">
        
        <Header title="My Projects" desc="A collection of my projects from ICS4U"></Header>
        <ProjectsBox></ProjectsBox>
    </div>
  );
}

export default ProjectsPage;
