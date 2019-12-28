import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import ProjectsBox from './ProjectsBox.js';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <ProjectsBox></ProjectsBox>
    </div>
  );
}

export default App;
