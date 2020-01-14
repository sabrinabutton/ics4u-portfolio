import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import ProjectsBox from './ProjectsBox.js';

function TopTenPage() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Header title="My Projects" desc="A collection of my projects from ICS4U"></Header>
        <ProjectsBox></ProjectsBox>
    </div>
  );
}

export default TopTenPage;