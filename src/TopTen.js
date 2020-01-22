import React from 'react';
import './App.css';
import Header from './Header.js';
import ProjectsBox from './ProjectsBox.js';
import styled from "styled-components";
import {TOP_TEN} from './data';

const LinksP = styled.div`
margin: 1em auto;
  color: white;
  width: 60%;

`

function TopTenPage() {
  return (
    <div className="App">
        <Header title="My Top Ten" desc="These are the modules that I feel I learned the most from in ICS4U this semester. This page includes modules from both FreeCodeCamp and Khan Academy. Each item in the list has an accompanying paragraph which answers two questions: how this module affected me, and how I will use what I learned in the future. There is also a featured project for each (where applicable), which is the project that I'm most proud of from that module. However, not all of my projects are there. There are links at the bottom of this page to all of my projects."></Header>
        <ProjectsBox projects={TOP_TEN}>          
        </ProjectsBox><LinksP>All of my projects from KA can be accessed <a href=' https://www.khanacademy.org/profile/sabrinabutton/projects'>here</a>, and all of my projects from FreeCodeCamp can be accessed <a href='https://codepen.io/sabrinabutton'>here</a>. My FreeCodeCamp profile can also be accessed <a href="https://www.freecodecamp.org/sabrinabutton">here</a>, to validate my completion of various certifications.</LinksP>
    </div>
  );
}

export default TopTenPage;