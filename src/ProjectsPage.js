import React from 'react';
import './App.css';
import Header from './Header.js';
import ProjectsBox from './ProjectsBox.js';
import {PROJECTS} from './data';

function ProjectsPage() {
  return (
    <div className="App">
        <Header title="Bonus Projects" desc="A few extra things I made throughout the course."></Header>
        <ProjectsBox projects={PROJECTS}/>
    </div>
  );
}

export default ProjectsPage;
